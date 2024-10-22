import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { Imprint } from './Imprint';
import { Events, Showcase } from './Enums';
import { ClassMutationObserver } from './ClassMutationObserver';
import * as THREE from "three";
import './css/lil-gui.css';

import { SettingsButton } from "./SettingsButton";

import globalCSV from '/assets/csv/2024-10-22/GLB.Ts+dSST.csv?url&raw';
import northernHemisphereCSV from '/assets/csv/2024-10-22/NH.Ts+dSST.csv?url&raw';
import southernHemisphereCSV from '/assets/csv/2024-10-22/SH.Ts+dSST.csv?url&raw';

const csv = {
}
const SETTINGS = {
    showcaseCSV: undefined,
    radio: Showcase.GLOBAL,
    view: {
        geometry: {
            meshVisible: false,
            facesVisible: true,
            radialSegments: 8,
            radius: 1,
            radiusFactor: 0.9,
            tubularSegments: 30,
        },
        colors: {
            cold: colorDescriptor('cold'),
            zero: colorDescriptor('zero'),
            warm: colorDescriptor('warm'),
        }
    },
    capture: {},
    imprint: () => Events.dispatchEvent(Events.SHOW_IMPRINT)
}

function colorDescriptor(temp: string) {
    return { color: styledColorByTemp(temp), modified: false };
}

function styledColorByTemp(temperature): THREE.Color {
    return styledColor(`--${temperature}-color`);
}

function styledColor(propertyName: string): THREE.Color {
    const style = window.getComputedStyle(document.body);
    const color = style.getPropertyValue(propertyName);
    return new THREE.Color(color);
}

class Settings {
    #captureFolder: any;
    #showcaseFolder: GUI;
    #hidden: boolean;
    #gui: GUI;

    static styledColor(propertyName: string): THREE.Color {
        return styledColor(propertyName);
    }

    static addRadioButtonsFolder(
        parent: GUI,
        folderName: string,
        object,
        options,
        onChange = (obj, prop, index) => { }
    ) {
        // Create the folder
        const folder = parent.addFolder(folderName);
        Settings.addRadioButtons(folder, object, options, onChange);
        return folder;
    }

    static addRadioButtons(
        parent: GUI,
        initial: any,
        options: any,
        onChange = (obj, prop, index) => { }
    ) {
        const object = {};
        // create property for each object
        Object.entries(options).forEach(entry => {
            const [key, value] = entry;
            // console.log(`key: ${key}, value: ${value}`);
            const property = `option_${key}`;
            object[property] = initial === key;
        });

        // create the dat.gui buttons
        Object.keys(options).forEach(key => {
            const property = `option_${key}`;
            parent
                .add(object, property)
                .name(key)
                .listen()
                .onChange(() => {
                    for (let prop in object) {
                        object[prop] = property === prop;
                    }
                    // console.log(`${object}, ${property}, ${key}`)
                    onChange(object, property, key);
                });
        });
    }
    constructor() {
        this.#gui = new GUI({ container: document.querySelector('.container-div') as HTMLElement | undefined, autoPlace: false });
        this.#gui.domElement.id = "gui";
        this.createShowcaseFolder();
        this.createViewFolder();
        this.createCaptureFolder();
        this.createImprint();
        this.createShowHideListener();
        this.createSettingsIcon();
    }

    createSettingsIcon() {
        const settingsButton = new SettingsButton(this.#gui);
        new ClassMutationObserver(this.#gui.domElement, (value: MutationRecord, index: number | undefined) => {
            const div = value.target as HTMLDivElement;
            if (index === 0 && !div?.classList.contains('transition') && div?.classList.contains('closed')) {
                this.#gui.hide();
                this.#gui.close();

                settingsButton.toggle();
            }
        });
    }
    createShowHideListener(): void {
        window.addEventListener('keydown', (e) => {
            if (e.key === "h" || e.key === "H") {
                this.#hidden ? this.#gui.show() : this.#gui.hide();
                this.#hidden = !this.#hidden;
            }
        })
    }

    createShowcaseFolder(): void {
        csv[Showcase.GLOBAL] = globalCSV;
        csv[Showcase.NORTHERN_HEMISSPHERE] = northernHemisphereCSV;
        csv[Showcase.SOUTHERN_HEMISSPHERE] = southernHemisphereCSV;
        this.#showcaseFolder = Settings.addRadioButtonsFolder(
            this.#gui,
            `Region: ${SETTINGS.radio}`,
            SETTINGS.radio,
            csv,
            (object, property, key) => {
                SETTINGS.showcaseCSV = csv[key];
                Events.dispatchEvent(Events.CREATE_HELIX);
                this.#showcaseFolder.title(`Region: ${key}`);
                this.#showcaseFolder.close();
            }
        );
        SETTINGS.showcaseCSV = csv[SETTINGS.radio];
        this.#showcaseFolder.close();
    }

    createViewFolder() {
        const folder = this.#gui.addFolder("View");
        this.createViewGeometryFolder(folder);
        this.createViewColorsFolder(folder);
        folder.close();
    }

    createViewGeometryFolder(parent) {
        const folder = parent.addFolder('Geometry');
        const geometry =
            SETTINGS.view.geometry;
        folder
            .add(geometry, "meshVisible")
            .name("Wireframe")
            // .onChange(() => Settings.dispatchEvent(Events.UPDATE_VISIBLE));
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "facesVisible")
            .name("Faces")
            // .onChange(() => Settings.dispatchEvent(Events.UPDATE_VISIBLE));
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "tubularSegments")
            .min(1)
            .max(31)
            .step(1)
            .name(`Monthly Segments`)
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "radialSegments")
            .min(3)
            .max(32)
            .step(1)
            .name(`Radius Segments`)
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "radiusFactor")
            .min(0.1)
            .max(2)
            .name(`Radius Factor`)
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder.close();
    }
    createViewColorsFolder(parent) {
        const folder = parent.addFolder('Colors');
        const colors =
            SETTINGS.view.colors;
        folder
            .addColor(colors.cold, "color")
            .name("-1.0°C")
            .listen()
            .onChange(() => this.dispatchColorEvent('cold'));
        folder
            .addColor(colors.zero, "color")
            .name("0°C")
            .listen()
            .onChange(() => this.dispatchColorEvent('zero'));
        folder
            .addColor(colors.warm, "color")
            .name("+1.5°C")
            .listen()
            .onChange(() => this.dispatchColorEvent('warm'));

        folder.close();
    }
    initializeColors() {
        if (!SETTINGS.view.colors.cold.modified) {
            SETTINGS.view.colors.cold.color = styledColorByTemp('cold');
        }
        if (!SETTINGS.view.colors.zero.modified) {
            SETTINGS.view.colors.zero.color = styledColorByTemp('zero');
        }
        if (!SETTINGS.view.colors.warm.modified) {
            SETTINGS.view.colors.warm.color = styledColorByTemp('warm');
        }
    }
    dispatchColorEvent(temp: string) {
        SETTINGS.view.colors[temp].modified = !SETTINGS.view.colors[temp].color.equals(styledColorByTemp(temp));
        Events.dispatchEvent(Events.CREATE_HELIX);
    }
    createCaptureFolder(): void {
        const folder = this.#gui.addFolder("Screen capture");
        folder.close();
        this.#captureFolder = folder;
    }

    createImprint(): void {
        const imprint = new Imprint();
        const p = imprint.isAvailable();
        p.then((available) => {
            if (available) {
                this.#gui.add(SETTINGS, "imprint").name("Imprint");
            }
        });
    }

    get showcaseCSV(): string | undefined {
        return SETTINGS.showcaseCSV;
    }

    get radialSegments(): number {
        return Math.floor(SETTINGS.view.geometry.radialSegments);
    }
    get radiusFactor(): number {
        return SETTINGS.view.geometry.radiusFactor;
    }
    get tubularSegments(): number {
        return Math.floor(SETTINGS.view.geometry.tubularSegments);
    }
    get showFaces(): boolean {
        return SETTINGS.view.geometry.facesVisible;
    }
    get showWireframe(): boolean {
        return SETTINGS.view.geometry.meshVisible;
    }
    get cold(): THREE.Color {
        return SETTINGS.view.colors.cold.color;
    }
    get zero(): THREE.Color {
        return SETTINGS.view.colors.zero.color;
    }
    get warm(): THREE.Color {
        return SETTINGS.view.colors.warm.color;
    }

    captureSettings(): { folder: any, property: any } {
        return {
            folder: this.#captureFolder,
            property: SETTINGS.capture
        }
    }
}

export { Settings };
