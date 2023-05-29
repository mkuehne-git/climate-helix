import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { Imprint } from './Imprint';
import { Events, Showcase } from './Enums';
import { ClassMutationObserver } from './ClassMutationObserver';
import * as THREE from "three";

// The icon
import svgAsString from '../assets/images/Settings.svg?raw';

import globalCSV from '../assets/GLB.Ts+dSST.csv?raw';
import northernHemisphereCSV from '../assets/NH.Ts+dSST.csv?raw';
import southernHemisphereCSV from '../assets/SH.Ts+dSST.csv?raw';

const csv = {
}
const SETTINGS = {
    showcaseCSV: undefined,
    radio: Showcase.GLOBAL,
    view: {
        dark_theme: preferredTheme(),
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
    imprint: () => Settings.dispatchEvent(Events.SHOW_IMPRINT)
}

function colorDescriptor(temp: string) {
    return { color: styledColorByTemp(temp), modified: false };
}

function preferredTheme() {
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // console.log(`Theme: ${darkTheme ? 'dark' : 'light'}`)
    return darkTheme;
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
    #guiIcon: HTMLElement;

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
        const div = document.createElement('DIV');
        div.innerHTML = svgAsString;
        this.#guiIcon = div.querySelector('#gui-icon') as HTMLElement;
        this.#guiIcon.classList.add('show');
        this.#gui.hide();
        this.#gui.domElement.insertAdjacentElement('beforeBegin', this.#guiIcon);
        new ClassMutationObserver(this.#gui.domElement, (value: MutationRecord, index: number | undefined) => {
            const div = value.target as HTMLDivElement;
            if (index === 0 && !div?.classList.contains('transition') && div?.classList.contains('closed')) {
                this.#gui.hide();
                this.#gui.close();
                this.#guiIcon.classList.toggle('show');
            }
        });
        // Make Icon invisible, show open GUI
        this.#guiIcon?.addEventListener('click', () => {
            this.#guiIcon.classList.toggle('show');
            this.#gui.show();
            this.#gui.open();
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
            `Showcase: ${SETTINGS.radio}`,
            SETTINGS.radio,
            csv,
            (object, property, key) => {
                SETTINGS.showcaseCSV = csv[key];
                Settings.dispatchEvent(Events.CREATE_HELIX);
                this.#showcaseFolder.title(`Showcase: ${key}`);
                this.#showcaseFolder.close();
            }
        );
        SETTINGS.showcaseCSV = csv[SETTINGS.radio];
        this.#showcaseFolder.close();
    }

    createViewFolder() {
        const folder = this.#gui.addFolder("View");
        folder
            .add(SETTINGS.view, "dark_theme")
            .name(`Dark theme`)
            .onChange(() => {
                Settings.dispatchEvent(Events.CHANGE_THEME);
            });
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
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "facesVisible")
            .name("Faces")
            // .onChange(() => Settings.dispatchEvent(Events.UPDATE_VISIBLE));
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "tubularSegments")
            .min(1)
            .max(31)
            .step(1)
            .name(`Monthly Segments`)
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "radialSegments")
            .min(3)
            .max(32)
            .step(1)
            .name(`Radius Segments`)
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(geometry, "radiusFactor")
            .min(0.1)
            .max(2)
            .name(`Radius Factor`)
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
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
        SETTINGS.view.colors[temp].modified = !(SETTINGS.view.colors[temp].color === styledColorByTemp(temp));
        Settings.dispatchEvent(Events.CREATE_HELIX);
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

    static dispatchEvent(event: Events): void {
        const evt = new Event(event.toString(), { bubbles: true });
        document.body.dispatchEvent(evt);
    }

    onThemeChange(element: HTMLElement) {
        const oldThemeStyle = this.inverseTheme;
        const newThemeStyle = this.theme;
        if (element.classList.contains(oldThemeStyle)) {
            element.classList.remove(oldThemeStyle);
        }
        element.classList.add(newThemeStyle);
        // console.log(`onThemeChange: ${newThemeStyle}`)
        this.initializeColors();
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

    get theme(): string {
        return SETTINGS.view.dark_theme ? 'dark' : 'light';
    }
    get inverseTheme(): string {
        return SETTINGS.view.dark_theme ? 'light' : 'dark';
    }

    captureSettings(): { folder: any, property: any } {
        return {
            folder: this.#captureFolder,
            property: SETTINGS.capture
        }
    }
}

export { Settings };
