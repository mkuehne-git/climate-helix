import * as THREE from 'three';
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { Events } from '../Enums';
import { Settings } from '../settings/Settings';
import { persistentState, type Vector3 } from '../settings/PersistentState';
import { ClimateHelix } from './ClimateHelix';
import { ClimateAxes } from './ClimateAxes';
import { HelixAnimation, drawCount, playSeconds, tipIndex } from './HelixAnimation';
import { ClassMutationObserver } from '../ui/ClassMutationObserver';
import { SVGToggleButton } from '../ui/SVGToggleButton';
import { YearRangeSlider } from '../ui/YearRangeSlider';
import { formatMonthYear } from '../charts/chartMath';
import { t } from '../i18n';
import { icon as playIcon } from '../icons/animation/playIcon';
import { icon as pauseIcon } from '../icons/animation/pauseIcon';

/**
 * The 3D helix view: the WebGL scene with the helix and its axes, the camera
 * and trackball controls, the creation animation with its Play/Pause button,
 * the title, and the snapshot buttons and year slider below the helix.
 */
class HelixScene {
    readonly renderer: THREE.WebGLRenderer;
    readonly animation = new HelixAnimation(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    #settings: Settings;
    #container: HTMLElement;
    #scene = new THREE.Scene();
    #camera: THREE.PerspectiveCamera;
    #controls: TrackballControls;
    #group = new THREE.Group();
    #helixMesh: THREE.Mesh | undefined;
    #wireframeMesh: THREE.Mesh | undefined;
    #axes: ClimateAxes | undefined;
    #helix: ClimateHelix | undefined;
    #playButton: SVGToggleButton;
    #yearRangeSlider: YearRangeSlider | undefined;
    // Below the title while the helix is incomplete: the month the growing tip has reached.
    #animationLabel = document.createElement('div');

    constructor(container: HTMLElement, settings: Settings) {
        this.#container = container;
        this.#settings = settings;
        this.#animationLabel.className = 'animation-label hidden';

        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(width, height);
        container.appendChild(this.renderer.domElement);
        // The scene's background follows the theme (a class on <body>).
        new ClassMutationObserver(document.body, () => {
            this.#scene.background = new THREE.Color(window.getComputedStyle(document.body).getPropertyValue("background-color"));
        });

        this.#camera = new THREE.PerspectiveCamera(50, width / height);
        this.#camera.position.set(4.5, 4.5, 4.5);
        this.#camera.lookAt(0, 0, 0);
        this.#scene.add(this.#camera);

        // The helix and its axes are built with years running along local Z.
        // Rotate so that axis renders vertically on the right side of the screen.
        this.#group.rotation.x = -Math.PI / 2;
        this.#scene.add(this.#group);

        this.#controls = this.createControls();
        window.addEventListener('resize', () => this.onWindowResize());
        // Every CREATE_HELIX comes from the user changing what is shown (settings,
        // dataset, region, year range), which ends a running animation. Theme
        // switches rebuild the helix directly (onThemeChanged) and keep it running.
        window.addEventListener(Events.CREATE_HELIX, () => {
            this.animation.finish();
            this.createHelix();
        });
        document.body.addEventListener(Events.ANIMATION_CHANGED.toString(), () => {
            this.animation.loop = settings.animationLoop;
            this.updateAnimationTiming();
        });
        this.#playButton = this.createPlayButton();
    }

    /** Starts rendering, one frame per display refresh. */
    start(): void {
        const animate = () => {
            requestAnimationFrame(animate);
            if (this.animation.update(performance.now())) {
                this.applyAnimation();
            }
            this.#controls.update();
            this.renderer.render(this.#scene, this.#camera);
        };
        animate();
    }

    /** The colors follow the theme: rebuilt without ending a running animation. */
    onThemeChanged(): void {
        this.#settings.initializeColors();
        this.createHelix();
    }

    /** Leaving the helix view pauses the animation. */
    onHidden(): void {
        this.animation.pause();
        this.applyAnimation();
    }

    /** A one-off run of the creation animation: it stops at the end even when Loop is on. */
    playOnce(): void {
        this.animation.play({ once: true });
        this.applyAnimation();
    }

    /**
     * Trackball, not orbit controls: they rotate the helix freely in every
     * direction, including end over end. Orbit controls keep the world's
     * vertical axis - since v0.6.2 the helix's own axis - fixed on screen.
     * Created before the stored camera is applied, so reset() returns to the
     * initial view.
     */
    private createControls(): TrackballControls {
        const camera = this.#camera;
        const controls = new TrackballControls(camera, this.renderer.domElement);
        const applyNavigation = () => {
            controls.staticMoving = !this.#settings.inertia;
            controls.rotateSpeed = this.#settings.rotateSpeed;
        };
        applyNavigation();
        document.body.addEventListener(Events.CONTROLS_CHANGED.toString(), applyNavigation);
        const storedCamera = persistentState.state.camera;
        if (storedCamera) {
            camera.position.fromArray(storedCamera.position);
            controls.target.fromArray(storedCamera.target);
            if (storedCamera.up) {
                camera.up.fromArray(storedCamera.up);
            }
            camera.lookAt(controls.target);
        }
        // 'change', not 'end': the camera keeps moving for a moment after a drag.
        controls.addEventListener('change', () => persistentState.update({
            camera: {
                position: camera.position.toArray() as Vector3,
                target: controls.target.toArray() as Vector3,
                up: camera.up.toArray() as Vector3,
            },
        }));
        this.renderer.domElement.addEventListener('dblclick', () => controls.reset());
        return controls;
    }

    private createPlayButton(): SVGToggleButton {
        const button = new SVGToggleButton({ container: this.#container, icons: [playIcon, pauseIcon], labels: [t('button.play'), t('button.pause')], classToken: 'animation-button', event: 'animation-clicked' });
        button.show(0);
        button.addOnClickListener(() => {
            this.animation.toggle();
            this.applyAnimation();
        });
        this.animation.loop = this.#settings.animationLoop;
        return button;
    }

    /**
     * Takes a mesh out of the scene and frees its GPU buffers: the helix is
     * rebuilt on every settings change, many times a second while a slider moves.
     */
    private disposeMesh(mesh: THREE.Mesh | undefined): void {
        if (!mesh) {
            return;
        }
        this.#group.remove(mesh);
        mesh.geometry.dispose();
        (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((material) => material.dispose());
    }

    private createHelix(): void {
        const settings = this.#settings;
        this.disposeMesh(this.#helixMesh);
        this.disposeMesh(this.#wireframeMesh);
        this.#helixMesh = undefined;
        this.#wireframeMesh = undefined;
        if (this.#axes) {
            this.#group.remove(this.#axes);
            this.#axes.dispose();
            this.#axes = undefined;
        }
        const helix = new ClimateHelix(settings);
        if (settings.showFaces) {
            this.#helixMesh = helix.createMesh();
            this.#group.add(this.#helixMesh);
        }
        if (settings.showWireframe) {
            this.#wireframeMesh = helix.createMesh({ wireframe: true, vertexColors: false });
            this.#group.add(this.#wireframeMesh);
        }
        if (settings.showYearAxis || settings.showTemperatureAxis || settings.showMonthAxis) {
            this.#axes = new ClimateAxes(settings, helix.height, 1);
            this.#group.add(this.#axes);
        }
        helix.createTitleDiv(this.#container).appendChild(this.#animationLabel);
        this.#helix = helix;
        this.updateAnimationTiming();
        this.applyAnimation();
        this.createDatasetControls();
    }

    /** The snapshot buttons and the year range slider below the helix. */
    private createDatasetControls(): void {
        const settings = this.#settings;
        let controls = this.#container.querySelector<HTMLElement>('#dataset-controls');
        if (!controls) {
            controls = document.createElement('div');
            controls.id = 'dataset-controls';
            this.#container.appendChild(controls);
        }
        controls.querySelector('#dataset-buttons')?.remove();
        const buttons = document.createElement('div');
        buttons.id = 'dataset-buttons';
        for (const date of settings.dateOptions) {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = String(new Date(date).getFullYear());
            button.className = 'dataset-button';
            button.classList.toggle('active', date === settings.date);
            button.addEventListener('click', () => settings.setDate(date));
            buttons.appendChild(button);
        }
        controls.appendChild(buttons);

        if (this.#yearRangeSlider) {
            this.#yearRangeSlider.refresh();
        } else {
            this.#yearRangeSlider = new YearRangeSlider(controls, {
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

    /** The selected years play in their share of the configured duration, see {@link playSeconds}. */
    private updateAnimationTiming(): void {
        const settings = this.#settings;
        this.animation.playSeconds = playSeconds(
            settings.animationDuration,
            settings.lastYear - settings.firstYear + 1,
            settings.datasetLastYear - settings.datasetFirstYear + 1,
        );
    }

    /** Draws the helix up to the animation's progress and updates the label and the Play/Pause button. */
    private applyAnimation(): void {
        for (const mesh of [this.#helixMesh, this.#wireframeMesh]) {
            if (mesh?.parent) {
                const { tubularSegments, radialSegments } = (mesh.geometry as any).parameters;
                mesh.geometry.setDrawRange(0, drawCount(this.animation.progress, tubularSegments, radialSegments));
            }
        }
        const points = this.#helix?.curve.length ?? 0;
        const label = this.#animationLabel;
        label.classList.toggle('hidden', this.animation.complete || points === 0);
        if (!this.animation.complete && points > 0) {
            label.textContent = formatMonthYear(this.#settings.firstYear + tipIndex(this.animation.progress, points) / 12);
        }
        this.#playButton?.select(this.animation.playing ? 1 : 0);
    }

    private onWindowResize(): void {
        this.#camera.aspect = window.innerWidth / window.innerHeight;
        this.#camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.#controls.handleResize();
    }
}

export { HelixScene };
