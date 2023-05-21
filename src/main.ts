
/**
 
National Aeronautics and Space Administration
Goddard Institute for Space Studies
https://data.giss.nasa.gov/gistemp/

*/

import * as THREE from 'three';
import { Settings } from './Settings';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ClimateHelix } from './ClimateHelix';
import { Events } from './Enums';
import { ScreenCapture, CaptureControls } from './ScreenCapture';

const settings = new Settings();

let group: THREE.Group;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let helixMesh: THREE.Mesh;
let wireframeMesh: THREE.Mesh;
let observer: MutationObserver;
let capture: ScreenCapture;

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    observer = updateSceneBackgroundDueToThemeChange();

    // camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 5);
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
    document.body.addEventListener(Events.CHANGE_THEME.toString(), onThemeChange);
    const captureControls: CaptureControls = {
        All: document.body,
        Helix: renderer.domElement
    }
    capture = new ScreenCapture(settings.captureSettings(), captureControls);
    onThemeChange();
    animate();
}

/** 
 * This function is used to update scene background color due to theme changes.
 * Observe DOM for changing '<style class>' attribute. 
 */
function updateSceneBackgroundDueToThemeChange(): MutationObserver {
    let initialized = false;
    const observer = new MutationObserver((mutations) => {
        if (initialized) {
            mutations.forEach((value: MutationRecord) => {
                const style = window.getComputedStyle(document.body);
                const backgroundColor = style.getPropertyValue("background-color");
                scene.background = new THREE.Color(backgroundColor);
            });
        }
    });
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
    });
    initialized = true;
    return observer;
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
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
function onThemeChange() {
    settings.onThemeChange(document.body);
    createHelix();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}
init();


// Make empty module to allow top level await
export { };