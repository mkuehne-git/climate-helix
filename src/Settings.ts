import { GUI } from 'lil-gui';
import { Imprint } from './Imprint';
import { Events, Showcase } from './Enums';
import * as THREE from "three";
import './css/lil-gui.css';

import { SettingsButton } from "./SettingsButton";
import { checkForPwaUpdates, showPwaStatus } from './PwaUpdate';
import { GISSParser } from './GISSParser';

export type Dataset = { endDate: string, csv: Record<Showcase, string>, firstYear: number, lastYear: number };

const datasetPaths: Record<string, { files: Record<Showcase, string> }> = {
    '2026-09-16': { files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
    '2024-10-22': { files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
    '2023-09-03': { files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
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
        const endDate = new GISSParser(csv[Showcase.GLOBAL]).lastValidDate ?? '';
        return [date, { endDate, csv, firstYear: Math.min(...years), lastYear: Math.max(...years) }] as const;
    }));
    return Object.fromEntries(entries);
}
const SETTINGS = {
    showcaseCSV: undefined,
    radio: Showcase.GLOBAL,
    date: '2026-09-16',
    view: {
        axes: {
            yearVisible: true,
            temperatureVisible: true,
            monthVisible: true,
            yearTickCount: 5,
            temperatureRingCount: 5,
            temperatureRingsColored: true,
        },
        yearRangeVisible: true,
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
    /**
     * The year range last chosen on any view's year slider, shared by all
     * views. Each view clamps it to the years it can show (the helix to the
     * active dataset), so this keeps the unclamped request.
     */
    #requestedFirstYear: number;
    #requestedLastYear: number;
    #datasetFirstYear: number;
    #datasetLastYear: number;

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
        this.#datasetFirstYear = datasets[SETTINGS.date].firstYear;
        this.#datasetLastYear = datasets[SETTINGS.date].lastYear;
        this.#firstYear = this.#datasetFirstYear;
        this.#lastYear = this.#datasetLastYear;
        this.#requestedFirstYear = this.globalFirstYear;
        this.#requestedLastYear = this.globalLastYear;
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
                this.clampYearRange();
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
        this.clampYearRange();
    }

    /**
     * Clamps the requested (shared) year range to the active dataset.
     * @returns whether the helix's year range changed
     */
    clampYearRange(): boolean {
        const dataset = this.#datasets[SETTINGS.date];
        const previous = [this.#firstYear, this.#lastYear];
        this.#datasetFirstYear = dataset.firstYear;
        this.#datasetLastYear = dataset.lastYear;
        this.#firstYear = Math.max(this.#datasetFirstYear, Math.min(this.#requestedFirstYear, this.#datasetLastYear));
        this.#lastYear = Math.max(this.#firstYear, Math.min(this.#requestedLastYear, this.#datasetLastYear));
        return previous[0] !== this.#firstYear || previous[1] !== this.#lastYear;
    }

    get dateOptions(): string[] {
        return Object.keys(this.#datasets).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    }

    get datasets(): Readonly<Record<string, Dataset>> {
        return this.#datasets;
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

    get yearTickCount(): number {
        return Math.max(2, Math.min(10, Math.floor(SETTINGS.view.axes.yearTickCount)));
    }

    get temperatureRingCount(): number {
        return Math.max(2, Math.min(10, Math.floor(SETTINGS.view.axes.temperatureRingCount)));
    }

    get temperatureRingsColored(): boolean {
        return SETTINGS.view.axes.temperatureRingsColored;
    }

    get firstYear(): number {
        return this.#firstYear;
    }

    get lastYear(): number {
        return this.#lastYear;
    }

    get datasetFirstYear(): number {
        return this.#datasetFirstYear;
    }

    get datasetLastYear(): number {
        return this.#datasetLastYear;
    }

    /**
     * The earliest/latest year across *all* datasets, not just the active
     * one. The helix scales its z-axis against this fixed range (rather
     * than the active dataset's own range) so that a given calendar year
     * renders at the same z position no matter which dataset is selected -
     * important for morphing between datasets in future animations.
     */
    get globalFirstYear(): number {
        return Math.min(...Object.values(this.#datasets).map((dataset) => dataset.firstYear));
    }

    get globalLastYear(): number {
        return Math.max(...Object.values(this.#datasets).map((dataset) => dataset.lastYear));
    }

    get yearRangeVisible(): boolean {
        return SETTINGS.view.yearRangeVisible;
    }

    setStartYear(year: number): void {
        this.#firstYear = Math.max(this.#datasetFirstYear, Math.min(year, this.#lastYear));
        this.#requestedFirstYear = this.#firstYear;
    }

    setEndYear(year: number): void {
        this.#lastYear = Math.min(this.#datasetLastYear, Math.max(year, this.#firstYear));
        this.#requestedLastYear = this.#lastYear;
    }

    /** The shared year range, as last chosen on any view's year slider. */
    get requestedYearRange(): [number, number] {
        return [this.#requestedFirstYear, this.#requestedLastYear];
    }

    /** Resets the shared year range to all years. The helix picks it up via {@link clampYearRange}. */
    resetYearRange(): void {
        this.requestYearRange(this.globalFirstYear, this.globalLastYear);
    }

    /** Records a year range chosen on a chart view's slider, for the other views to pick up when they become active. */
    requestYearRange(firstYear: number, lastYear: number): void {
        this.#requestedFirstYear = firstYear;
        this.#requestedLastYear = lastYear;
    }

    get dataEndDate(): string {
        return this.#datasets[SETTINGS.date].endDate;
    }

    createViewFolder() {
        const folder = this.#gui.addFolder("View");
        folder
            .add(SETTINGS.view, 'yearRangeVisible')
            .name('Year range')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
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
            .add(SETTINGS.view.axes, 'yearTickCount')
            .min(2)
            .max(10)
            .step(1)
            .name('Year ticks')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view.axes, 'temperatureRingCount')
            .min(2)
            .max(10)
            .step(1)
            .name('Temperature rings')
            .onChange(() => Events.dispatchEvent(Events.CREATE_HELIX));
        folder
            .add(SETTINGS.view.axes, 'temperatureRingsColored')
            .name('Colored rings')
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
