import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';
import { Imprint } from './Imprint';
import { Events, Showcase } from './Enums';

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
        meshVisible: false,
        facesVisible: true,
        radialSegments: 8,
        radius: 1,
        radiusFactor: 0.9,
        tubularSegments: 30,
    },
    capture: {},
    imprint: () => Settings.dispatchEvent(Events.SHOW_IMPRINT)
}
function preferredTheme() {
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // console.log(`Theme: ${darkTheme ? 'dark' : 'light'}`)
    return darkTheme;
}
class Settings {
    #captureFolder: any;
    #showcaseFolder: GUI;
    #hidden: boolean;
    private gui: GUI;
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
        this.gui = new GUI();
        this.gui.domElement.id = "gui";

        this.createShowcaseFolder();
        this.createViewFolder();
        this.createCaptureFolder();
        this.createImprint();
        this.createShowHideListener();
        this.gui.close();
    }
    createShowHideListener(): void {
        window.addEventListener('keydown', (e) => {
            if (e.key === "h" || e.key === "H") {
                this.#hidden ? this.gui.show() : this.gui.hide();
                this.#hidden = !this.#hidden;
            }
        })
    }

    createShowcaseFolder(): void {
        csv[Showcase.GLOBAL] = globalCSV;
        csv[Showcase.NORTHERN_HEMISSPHERE] = northernHemisphereCSV;
        csv[Showcase.SOUTHERN_HEMISSPHERE] = southernHemisphereCSV;
        this.#showcaseFolder = Settings.addRadioButtonsFolder(
            this.gui,
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
        const folder = this.gui.addFolder("View");
        folder
            .add(SETTINGS.view, "dark_theme")
            .name(`Dark theme`)
            .onChange(() => Settings.dispatchEvent(Events.CHANGE_THEME));
        folder
            .add(SETTINGS.view, "meshVisible")
            .name("Wireframe")
            // .onChange(() => Settings.dispatchEvent(Events.UPDATE_VISIBLE));
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view, "facesVisible")
            .name("Faces")
            // .onChange(() => Settings.dispatchEvent(Events.UPDATE_VISIBLE));
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view, "tubularSegments")
            .min(1)
            .max(31)
            .step(1)
            .name(`Monthly Segments`)
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view, "radialSegments")
            .min(3)
            .max(32)
            .step(1)
            .name(`Radius Segments`)
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view, "radiusFactor")
            .min(0.1)
            .max(3)
            .name(`Radius Factor`)
            .onChange(() => Settings.dispatchEvent(Events.CREATE_HELIX));
        folder.close();
    }
    createCaptureFolder(): void {
        const folder = this.gui.addFolder("Screen capture");
        folder.close();
        this.#captureFolder = folder;
    }

    createImprint(): void {
        const imprint = new Imprint();
        const p = imprint.isAvailable();
        p.then((available) => {
            if (available) {
                this.gui.add(SETTINGS, "imprint").name("Imprint");
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
    }

    get showcaseCSV(): string | undefined {
        return SETTINGS.showcaseCSV;
    }

    get radialSegments(): number {
        return Math.floor(SETTINGS.view.radialSegments);
    }
    get radiusFactor(): number {
        return SETTINGS.view.radiusFactor;
    }
    get tubularSegments(): number {
        return Math.floor(SETTINGS.view.tubularSegments);
    }
    get showFaces(): boolean {
        return SETTINGS.view.facesVisible;
    }
    get showWireframe(): boolean {
        return SETTINGS.view.meshVisible;
    }
    get theme(): string {
        return SETTINGS.view.dark_theme ? 'dark' : 'light';
    }
    get inverseTheme(): string {
        return SETTINGS.view.dark_theme ? 'light' : 'dark';
    }

    // get captureFolder() {
    //     return this.#captureFolder;
    // }
    captureSettings(): { folder: any, property: any } {
        return {
            folder: this.#captureFolder,
            property: SETTINGS.capture
        }
    }
}
export { Settings };
