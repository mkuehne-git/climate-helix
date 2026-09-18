import { GUI } from 'lil-gui';
import { Imprint } from './Imprint';
import { Events, Showcase } from './Enums';
import * as THREE from "three";
import './css/lil-gui.css';

import { SettingsButton } from "./SettingsButton";
import { checkForPwaUpdates, showPwaStatus } from './PwaUpdate';

type Dataset = { endDate: string, csv: Record<Showcase, string>, firstYear: number, lastYear: number };

const datasetPaths: Record<string, { endDate: string, files: Record<Showcase, string> }> = {
    '2026-09-16': { endDate: 'August 2026', files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
    '2024-10-22': { endDate: 'October 2024', files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
    '2023-09-03': { endDate: 'March 2023', files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
};

async function loadDatasets(): Promise<Record<string, Dataset>> {
    const entries = await Promise.all(Object.entries(datasetPaths).map(async ([date, definition]) => {
        const csvEntries = await Promise.all(Object.entries(definition.files).map(async ([showcase, file]) => {
            const url = `${import.meta.env.BASE_URL}assets/csv/${date}/${file}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Unable to load dataset: ${url}`);
            return [showcase, await response.text()] as const;
        }));
        const csv = Object.fromEntries(csvEntries) as Record<Showcase, string>;
        const years = Object.values(csv).flatMap((value) => value.split(/\r?\n/)
            .slice(2)
            .map((row) => row.split(',')[0].trim())
            .filter((year) => /^\d{4}$/.test(year))
            .map(Number));
        return [date, { endDate: definition.endDate, csv, firstYear: Math.min(...years), lastYear: Math.max(...years) }] as const;
    }));
    return Object.fromEntries(entries);
}
const SETTINGS = {
    showcaseCSV: undefined,
    radio: Showcase.GLOBAL,
    date: '2026-09-16',
    view: {
        axes: {
            yearVisible: false,
            temperatureVisible: false,
            monthVisible: false,
            yearLabelInterval: 25,
            temperatureRingCount: 5,
        },
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
    #datasets: Record<string, Dataset>;
    #csv: Record<Showcase, string> = {} as Record<Showcase, string>;
    #captureFolder: any;
    #dateFolder: GUI;
    #showcaseFolder: GUI;
    #hidden: boolean;
    #gui: GUI;
    #firstYear: number;
    #lastYear: number;

    static async create(): Promise<Settings> {
        return new Settings(await loadDatasets());
    }

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
    private constructor(datasets: Record<string, Dataset>) {
        this.#datasets = datasets;
        const years = Object.values(datasets).flatMap((dataset) => [dataset.firstYear, dataset.lastYear]);
        this.#firstYear = Math.min(...years);
        this.#lastYear = Math.max(...years);
        this.#gui = new GUI({ container: document.querySelector('.container-div') as HTMLElement | undefined, autoPlace: false });
        this.#gui.domElement.id = "gui";
        this.createDateFolder();
        this.createShowcaseFolder();
        this.createViewFolder();
        this.createCaptureFolder();
        this.createImprint();
        this.createShowHideListener();
        this.createSettingsIcon();
    }

    createSettingsIcon() {
        new SettingsButton(this.#gui);
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
        this.selectDate(SETTINGS.date);
        this.#showcaseFolder = Settings.addRadioButtonsFolder(
            this.#gui,
            `Region: ${SETTINGS.radio}`,
            SETTINGS.radio,
            this.#csv,
            (object, property, key) => {
                SETTINGS.radio = key;
                SETTINGS.showcaseCSV = this.#csv[key];
                Events.dispatchEvent(Events.CREATE_HELIX);
                this.#showcaseFolder.title(`Region: ${key}`);
                this.#showcaseFolder.close();
            }
        );
        SETTINGS.showcaseCSV = this.#csv[SETTINGS.radio];
        this.#showcaseFolder.close();
    }

    createDateFolder(): void {
        this.#dateFolder = Settings.addRadioButtonsFolder(
            this.#gui,
            `Date: ${SETTINGS.date}`,
            SETTINGS.date,
            this.#datasets,
            (object, property, key) => {
                this.setDate(key);
            }
        );
        this.#dateFolder.close();
    }

    setDate(date: string): void {
        SETTINGS.date = date;
        this.selectDate(date);
        this.#dateFolder.title(`Date: ${date}`);
        this.#dateFolder.close();
        Events.dispatchEvent(Events.CREATE_HELIX);
    }

    selectDate(date: string): void {
        Object.assign(this.#csv, this.#datasets[date].csv);
        SETTINGS.showcaseCSV = this.#csv[SETTINGS.radio];
    }

    get dateOptions(): string[] {
        return Object.keys(this.#datasets).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    }

    get date(): string {
        return SETTINGS.date;
    }

    get showYearAxis(): boolean {
        return SETTINGS.view.axes.yearVisible;
    }

    get showTemperatureAxis(): boolean {
        return SETTINGS.view.axes.temperatureVisible;
    }

    get showMonthAxis(): boolean {
        return SETTINGS.view.axes.monthVisible;
    }

    get yearLabelInterval(): number {
        return Math.max(1, Math.floor(SETTINGS.view.axes.yearLabelInterval));
    }

    get temperatureRingCount(): number {
        return Math.max(2, Math.min(10, Math.floor(SETTINGS.view.axes.temperatureRingCount)));
    }

    get firstYear(): number {
        return this.#firstYear;
    }

    get lastYear(): number {
        return this.#lastYear;
    }

    get dataEndDate(): string {
        return this.#datasets[SETTINGS.date].endDate;
    }

    createViewFolder() {
        const folder = this.#gui.addFolder("View");
        this.createViewLegendFolder(folder);
        this.createViewGeometryFolder(folder);
        this.createViewColorsFolder(folder);
        folder.close();
    }

    createViewLegendFolder(parent) {
        const folder = parent.addFolder('Legend');
        folder
            .add(SETTINGS.view.axes, 'yearVisible')
            .name('Year axis')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view.axes, 'temperatureVisible')
            .name('Temperature axis')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view.axes, 'monthVisible')
            .name('Month axis')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view.axes, 'yearLabelInterval')
            .min(1)
            .max(100)
            .step(1)
            .name('Year label interval')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view.axes, 'temperatureRingCount')
            .min(2)
            .max(10)
            .step(1)
            .name('Temperature rings')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
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
        this.#gui.add(SETTINGS, "imprint").name("Imprint");
        this.#gui.add({
            checkForUpdates: async () => {
                showPwaStatus('Checking for updates...', 'info');
                const wasChecked = await checkForPwaUpdates();
                if (!wasChecked) {
                    console.info('No app update check was possible right now.');
                }
            }
        }, 'checkForUpdates').name('Check for updates');
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
