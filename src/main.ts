
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

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ClimateHelix } from './ClimateHelix';
import { Events } from './Enums';
import { ScreenCapture, CaptureControls } from './ScreenCapture';
import { ClassMutationObserver } from './ClassMutationObserver';


// The info div
import infoDivAsString from '/assets/info.html?url&raw';

const containerDiv = document.createElement('DIV');
const CONTAINER_DIV = '.container-div';
containerDiv.setAttribute('class', 'container-div');
document.body.appendChild(containerDiv);

const settings = new Settings();
const switcher = new ThemesSwitcher({ container: containerDiv });

let group: THREE.Group;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let helixMesh: THREE.Mesh;
let wireframeMesh: THREE.Mesh;
let observer: ClassMutationObserver;
let capture: ScreenCapture;

let infoIcon;

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
    camera.position.set(0, 0, 5.5);
    scene.add(camera);

    group = new THREE.Group();
    scene.add(group);

    const orbitControls = new OrbitControls(
        camera,
        renderer.domElement
    );
    orbitControls.update();

    window.addEventListener('resize', onWindowResize);
    window.addEventListener(Events.CREATE_HELIX, createHelix);
    document.body.addEventListener(Events.THEME_CHANGED.toString(), onThemeChanged);
    const captureControls: CaptureControls = {
        All: document.body,
        Helix: renderer.domElement
    }
    capture = new ScreenCapture(settings.captureSettings(), captureControls);
    infoIcon = createInfoIcon();
    createInfoDiv();
    Events.dispatchEvent(Events.THEME_CHANGED);
    animate();
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
    const helix = new ClimateHelix(settings);
    if (settings.showFaces) {
        helixMesh = helix.createMesh();
        group.add(helixMesh);
    }
    if (settings.showWireframe) {
        wireframeMesh = helix.createMesh({ wireframe: true, vertexColors: false })
        group.add(wireframeMesh);
    }
    const container = document.querySelector(CONTAINER_DIV);
    helix.createTitleDiv(container);
}

function createInfoIcon(): void {
    const parentDiv = document.querySelector(CONTAINER_DIV) || document.body;
    const infoButton = new InfoButton(parentDiv);
}

function createInfoDiv() {
    const div = document.createElement('DIV');
    div.setAttribute('id', 'info-div');
    div.innerHTML = infoDivAsString;
    const infoIcon = document.querySelector('.info-button');
    infoIcon?.insertAdjacentElement('beforebegin', div);

    // Version info before infoIcon
    const span = document.createElement('SPAN');
    span.setAttribute('id', 'version-info');
    span.innerHTML = `v${APP_VERSION}`;
    infoIcon?.insertAdjacentElement('beforebegin', span);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
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
init();
switcher.initTheme()


// Make empty module to allow top level await
export { };