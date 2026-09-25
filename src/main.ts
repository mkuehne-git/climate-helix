
/**
 
National Aeronautics and Space Administration
Goddard Institute for Space Studies
https://data.giss.nasa.gov/gistemp/

*/

import '@fontsource/special-elite';
import '@fontsource/dejavu-sans';
import * as THREE from 'three';
import { Settings } from './Settings';
import { ThemesSwitcher } from './ThemesSwitcher';
import { InfoButton } from './InfoButton';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ClimateHelix } from './ClimateHelix';
import { ClimateAxes } from './ClimateAxes';
import { Events, Scene } from './Enums';
import { ScreenCapture, CaptureControls } from './ScreenCapture';
import { ClassMutationObserver } from './ClassMutationObserver';
import { initPwaUpdate } from './PwaUpdate';
import { YearRangeSlider } from './YearRangeSlider';
import { SceneSwitcher } from './SceneSwitcher';
import { ChartsScene } from './ChartsScene';
import { DiffChartsScene } from './DiffChartsScene';
import { HelixAnimation, drawCount, playSeconds, tipIndex } from './HelixAnimation';
import { SVGToggleButton } from './SVGToggleButton';
import { formatMonthYear } from './chartMath';
import { icon as playIcon } from './icons/animation/playIcon';
import { icon as pauseIcon } from './icons/animation/pauseIcon';

// The info div. A static import (not a public/ asset fetched at runtime) so
// it's bundled into the hashed JS chunk and cache-busts the same way the
// rest of the app already does, instead of needing its own workaround.
import infoDivAsString from './info.html?raw';
import chartInfoDivAsString from './chart-info.html?raw';
import diffInfoDivAsString from './diff-info.html?raw';

const containerDiv = document.createElement('DIV');
const CONTAINER_DIV = '.container-div';
containerDiv.setAttribute('class', 'container-div');
document.body.appendChild(containerDiv);

let settings: Settings;
const switcher = new ThemesSwitcher({ container: containerDiv });

let group: THREE.Group;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let helixMesh: THREE.Mesh;
let wireframeMesh: THREE.Mesh;
let climateAxes: ClimateAxes;
let observer: ClassMutationObserver;
let capture: ScreenCapture;
let yearRangeSlider: YearRangeSlider;
let sceneSwitcher: SceneSwitcher;
let chartsScene: ChartsScene;
let diffChartsScene: DiffChartsScene;
let currentHelix: ClimateHelix;
let playButton: SVGToggleButton;

const animation = new HelixAnimation(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
// Below the title while the helix is incomplete: the month the growing tip has reached.
const animationLabel = document.createElement('DIV');
animationLabel.className = 'animation-label hidden';

let infoIcon;

function createDateButtons(): void {
    const container = document.querySelector(CONTAINER_DIV);
    const controls = document.querySelector('#dataset-controls') || document.createElement('DIV');
    controls.id = 'dataset-controls';
    if (!controls.parentElement) {
        container?.appendChild(controls);
    }
    document.querySelector('#dataset-buttons')?.remove();
    const buttons = document.createElement('DIV');
    buttons.id = 'dataset-buttons';

    settings.dateOptions.forEach((dateKey: string) => {
        const button = document.createElement('BUTTON');
        const year = new Date(dateKey).getFullYear();
        button.type = 'button';
        button.textContent = String(year);
        button.className = 'dataset-button';
        if (dateKey === settings.date) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            settings.setDate(dateKey);
            updateDateButtons();
        });
        buttons.appendChild(button);
    });

    controls.appendChild(buttons);
}

function updateDateButtons(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('#dataset-buttons .dataset-button');
    buttons.forEach((button) => {
        const isActive = button.textContent === String(new Date(settings.date).getFullYear());
        button.classList.toggle('active', isActive);
    });
}

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    containerDiv.appendChild(renderer.domElement);
    observer = updateSceneBackgroundDueToThemeChange();

    // camera
    const aspectRatio = width / height;
    // console.log(`Aspect ratio: ${aspectRatio}`);
    camera = new THREE.PerspectiveCamera(50, aspectRatio);
    camera.position.set(4.5, 4.5, 4.5);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    group = new THREE.Group();
    // The helix and its axes are built with years running along local Z.
    // Rotate so that axis renders vertically on the right side of the screen.
    group.rotation.x = -Math.PI / 2;
    scene.add(group);

    const orbitControls = new OrbitControls(
        camera,
        renderer.domElement
    );
    orbitControls.update();

    window.addEventListener('resize', onWindowResize);
    // Every CREATE_HELIX comes from the user changing what is shown (settings,
    // dataset, region, year range), which ends a running animation. Theme
    // switches rebuild the helix directly (onThemeChanged) and keep it running.
    window.addEventListener(Events.CREATE_HELIX, () => {
        animation.finish();
        createHelix();
    });
    document.body.addEventListener(Events.ANIMATION_CHANGED.toString(), () => {
        animation.loop = settings.animationLoop;
        updateAnimationTiming();
    });
    document.body.addEventListener(Events.THEME_CHANGED.toString(), onThemeChanged);
    const captureControls: CaptureControls = {
        All: document.body,
        Helix: renderer.domElement
    }
    capture = new ScreenCapture(settings.captureSettings(), captureControls);
    createSceneSwitcher();
    createPlayButton();
    infoIcon = createInfoIcon();
    createInfoDiv();
    document.body.addEventListener(Events.SCENE_CHANGED.toString(), onSceneChanged);
    Events.dispatchEvent(Events.THEME_CHANGED);
    animate();
}

function createSceneSwitcher(): void {
    const parentDiv = document.querySelector(CONTAINER_DIV) || document.body;
    sceneSwitcher = new SceneSwitcher(parentDiv);
    chartsScene = new ChartsScene(settings, sceneSwitcher);
    diffChartsScene = new DiffChartsScene(settings, sceneSwitcher);
}

function onSceneChanged(): void {
    const helixActive = sceneSwitcher.scene === Scene.HELIX;
    document.querySelector(CONTAINER_DIV)?.classList.toggle('scene-not-helix', !helixActive);
    if (!helixActive) {
        animation.pause();
        applyAnimation();
    }
    // Pick up a year range chosen on a chart view's slider.
    if (helixActive && settings.clampYearRange()) {
        Events.dispatchEvent(Events.CREATE_HELIX);
    }
    updateInfoContent();
}

const INFO_CONTENT_BY_SCENE: Record<Scene, string> = {
    [Scene.HELIX]: infoDivAsString,
    [Scene.CHARTS]: chartInfoDivAsString,
    [Scene.DIFF]: diffInfoDivAsString,
};

function updateInfoContent(): void {
    const infoDiv = document.querySelector('#info-div');
    if (!infoDiv) {
        return;
    }
    infoDiv.innerHTML = INFO_CONTENT_BY_SCENE[sceneSwitcher.scene];
    updateInfoEndDate();
}

/** 
 * This function is used to update scene background color due to theme changes.
 * Observe DOM for changing '<style class>' attribute. 
 */
function updateSceneBackgroundDueToThemeChange(): ClassMutationObserver {
    return new ClassMutationObserver(document.body, (value: MutationRecord) => {
        const style = window.getComputedStyle(document.body);
        const backgroundColor = style.getPropertyValue("background-color");
        scene.background = new THREE.Color(backgroundColor);
    });
}

function createHelix(): void {
    if (helixMesh) {
        group.remove(helixMesh);
    }
    if (wireframeMesh) {
        group.remove(wireframeMesh);
    }
    if (climateAxes) {
        group.remove(climateAxes);
        climateAxes.dispose();
    }
    const helix = new ClimateHelix(settings);
    if (settings.showFaces) {
        helixMesh = helix.createMesh();
        group.add(helixMesh);
    }
    if (settings.showWireframe) {
        wireframeMesh = helix.createMesh({ wireframe: true, vertexColors: false })
        group.add(wireframeMesh);
    }
    if (settings.showYearAxis || settings.showTemperatureAxis || settings.showMonthAxis) {
        climateAxes = new ClimateAxes(settings, helix.height, 1);
        group.add(climateAxes);
    }
    const container = document.querySelector(CONTAINER_DIV);
    helix.createTitleDiv(container).appendChild(animationLabel);
    currentHelix = helix;
    updateAnimationTiming();
    applyAnimation();
    createDateButtons();
    const controls = document.querySelector('#dataset-controls');
    controls?.classList.toggle('hidden', !settings.yearRangeVisible);
    if (settings.yearRangeVisible && controls) {
        if (yearRangeSlider) {
            yearRangeSlider.refresh();
        } else {
            yearRangeSlider = new YearRangeSlider(controls, {
                get min() { return settings.datasetFirstYear; },
                get max() { return settings.datasetLastYear; },
                get start() { return settings.firstYear; },
                get end() { return settings.lastYear; },
                setStart: (year) => { settings.setStartYear(year); Events.dispatchEvent(Events.CREATE_HELIX); },
                setEnd: (year) => { settings.setEndYear(year); Events.dispatchEvent(Events.CREATE_HELIX); },
                reset: () => { settings.resetYearRange(); settings.clampYearRange(); Events.dispatchEvent(Events.CREATE_HELIX); },
            });
        }
    }
    updateInfoEndDate();
}

function createInfoIcon(): void {
    const parentDiv = document.querySelector(CONTAINER_DIV) || document.body;
    const infoButton = new InfoButton(parentDiv, sceneSwitcher);
}

function createInfoDiv() {
    const div = document.createElement('DIV');
    div.setAttribute('id', 'info-div');
    div.innerHTML = infoDivAsString;
    const infoIcon = document.querySelector('.info-button');
    infoIcon?.insertAdjacentElement('beforebegin', div);
    updateInfoEndDate();

    // Version info before infoIcon
    const span = document.createElement('SPAN');
    span.setAttribute('id', 'version-info');
    span.innerHTML = `v${APP_VERSION}`;
    infoIcon?.insertAdjacentElement('beforebegin', span);
}

function updateInfoEndDate() {
    const endDate = document.querySelector('#data-end-date');
    if (endDate) {
        endDate.textContent = settings.dataEndDate;
    }
}

function animate() {
    requestAnimationFrame(animate);
    if (animation.update(performance.now())) {
        applyAnimation();
    }
    renderer.render(scene, camera);
}

function createPlayButton(): void {
    const container = document.querySelector(CONTAINER_DIV) || document.body;
    playButton = new SVGToggleButton({ container, icons: [playIcon, pauseIcon], classToken: 'animation-button', event: 'animation-clicked' });
    playButton.show(0);
    playButton.addOnClickListener(() => {
        animation.toggle();
        applyAnimation();
    });
    animation.loop = settings.animationLoop;
}

/** The selected years play in their share of the configured duration, see {@link playSeconds}. */
function updateAnimationTiming(): void {
    animation.playSeconds = playSeconds(
        settings.animationDuration,
        settings.lastYear - settings.firstYear + 1,
        settings.datasetLastYear - settings.datasetFirstYear + 1,
    );
}

/** Draws the helix up to the animation's progress and updates the label and the Play/Pause button. */
function applyAnimation(): void {
    for (const mesh of [helixMesh, wireframeMesh]) {
        if (mesh?.parent) {
            const { tubularSegments, radialSegments } = (mesh.geometry as any).parameters;
            mesh.geometry.setDrawRange(0, drawCount(animation.progress, tubularSegments, radialSegments));
        }
    }
    const points = currentHelix?.curve.length ?? 0;
    animationLabel.classList.toggle('hidden', animation.complete || points === 0);
    if (!animation.complete && points > 0) {
        animationLabel.textContent = formatMonthYear(settings.firstYear + tipIndex(animation.progress, points) / 12);
    }
    playButton?.select(animation.playing ? 1 : 0);
}

function onThemeChanged() {
    settings.initializeColors();
    createHelix();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
async function start() {
    settings = await Settings.create();
    initPwaUpdate();
    // Canvas-drawn axis labels need the webfont file itself to be loaded
    // before they render; otherwise the browser silently falls back to a
    // default font for that one draw and never redraws it once the font
    // arrives. Force-load it up front, especially important on slower
    // mobile connections.
    await document.fonts.load("32px 'Special Elite'").catch(() => undefined);
    init();
    switcher.initTheme();
    if (settings.playOnStart) {
        // A one-off run: it stops at the end even when Loop is on.
        animation.play({ once: true });
        applyAnimation();
    }
}

start();


// Make empty module to allow top level await
export { };