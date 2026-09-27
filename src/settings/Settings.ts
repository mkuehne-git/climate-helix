import * as THREE from "three";
import { Events, Showcase } from '../Enums';
import { SettingsButton } from "./SettingsButton";
import { SettingsPanel } from "./SettingsPanel";
import { buildSettingsPanel } from './settingsSections';
import type { Control } from './settingsControls';
import { COLOR_NAMES, DEFAULTS, SETTINGS, changedFields, restoreFields, styledColor, styledColorByTemp, type CaptureTarget, type ColorName } from './settingsValues';
import { DEFAULT_DATE, loadDatasets, type Dataset } from '../data/datasets';
import { YearRange } from '../data/YearRange';
import { persistentState, storedDate, type StoredState } from './PersistentState';
import { formatMonthYear } from '../i18n';

export type { CaptureTarget, Dataset };

/**
 * The app's settings and data: the loaded snapshots, the shared year range,
 * and the current settings (settingsValues.ts), restored on startup and saved
 * when they change. It builds the settings panel (settingsSections.ts).
 */
class Settings {
    #datasets: Record<string, Dataset>;
    #csv: Record<Showcase, string> = {} as Record<Showcase, string>;
    #controls: Control[] = [];
    #panel: SettingsPanel;
    #yearRange: YearRange;

    static async create(): Promise<Settings> {
        return new Settings(await loadDatasets());
    }

    static styledColor(propertyName: string): THREE.Color {
        return styledColor(propertyName);
    }

    private constructor(datasets: Record<string, Dataset>) {
        this.#datasets = datasets;
        const stored = persistentState.state;
        this.restore(stored);
        const all = Object.values(datasets);
        this.#yearRange = new YearRange(
            Math.min(...all.map((dataset) => dataset.firstYear)),
            Math.max(...all.map((dataset) => dataset.lastYear)),
            datasets[SETTINGS.date].firstYear,
            datasets[SETTINGS.date].lastYear,
        );
        this.#yearRange.restore(stored.yearRange ?? {});
        this.#panel = new SettingsPanel(document.querySelector('.container-div') ?? document.body);
        this.selectDate(SETTINGS.date);
        this.#controls = buildSettingsPanel(this.#panel, this);
        new SettingsButton(this.#panel);
        // Every settings, dataset, region and year range change of the helix ends in one of these.
        document.body.addEventListener(Events.CREATE_HELIX.toString(), () => this.save());
        document.body.addEventListener(Events.ANIMATION_CHANGED.toString(), () => this.save());
        document.body.addEventListener(Events.CONTROLS_CHANGED.toString(), () => this.save());
        // Values can change elsewhere: the dataset buttons below the helix, the theme's colors.
        document.body.addEventListener(Events.CREATE_HELIX.toString(), () => this.refreshControls());
        document.body.addEventListener(Events.THEME_CHANGED.toString(), () => this.refreshControls());
    }

    private refreshControls(): void {
        this.#controls.forEach((control) => control.update());
    }

    /** Applies the stored settings before the controls are built, so they show the restored values. */
    private restore(stored: Readonly<StoredState>): void {
        SETTINGS.date = storedDate(stored, DEFAULT_DATE, Object.keys(this.#datasets));
        SETTINGS.radio = stored.region ?? SETTINGS.radio;
        restoreFields(SETTINGS.view.navigation, stored.view?.navigation);
        restoreFields(SETTINGS.view.axes, stored.view?.axes);
        restoreFields(SETTINGS.view.geometry, stored.view?.geometry);
        restoreFields(SETTINGS.animation, stored.animation);
        for (const name of COLOR_NAMES) {
            const color = stored.colors?.[name];
            if (color) {
                SETTINGS.view.colors[name].color.set(color);
                SETTINGS.view.colors[name].modified = true;
            }
        }
    }

    private save(): void {
        const { radius, ...geometry } = SETTINGS.view.geometry;
        const { radius: defaultRadius, ...defaultGeometry } = DEFAULTS.geometry;
        const colors = Object.fromEntries(COLOR_NAMES
            .filter((name) => SETTINGS.view.colors[name].modified)
            .map((name) => [name, `#${SETTINGS.view.colors[name].color.getHexString()}`]));
        persistentState.update({
            defaultDate: DEFAULT_DATE,
            date: SETTINGS.date !== DEFAULT_DATE ? SETTINGS.date : undefined,
            region: SETTINGS.radio !== DEFAULTS.radio ? SETTINGS.radio : undefined,
            yearRange: this.#yearRange.stored,
            view: {
                navigation: changedFields(SETTINGS.view.navigation, DEFAULTS.navigation),
                axes: changedFields(SETTINGS.view.axes, DEFAULTS.axes),
                geometry: changedFields(geometry, defaultGeometry),
            },
            colors,
            animation: changedFields(SETTINGS.animation, DEFAULTS.animation),
        });
    }

    setDate(date: string): void {
        SETTINGS.date = date;
        this.selectDate(date);
        Events.dispatchEvent(Events.CREATE_HELIX);
    }

    setRegion(region: Showcase): void {
        SETTINGS.radio = region;
        SETTINGS.showcaseCSV = this.#csv[region];
        this.clampYearRange();
        Events.dispatchEvent(Events.CREATE_HELIX);
    }

    private selectDate(date: string): void {
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
        return this.#yearRange.setDataset(dataset.firstYear, dataset.lastYear);
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
        return this.#yearRange.firstYear;
    }

    get lastYear(): number {
        return this.#yearRange.lastYear;
    }

    get datasetFirstYear(): number {
        return this.#yearRange.datasetFirstYear;
    }

    get datasetLastYear(): number {
        return this.#yearRange.datasetLastYear;
    }

    /**
     * The earliest/latest year across *all* datasets, not just the active
     * one: the chart views' year axis and the limits of the shared year range.
     */
    get globalFirstYear(): number {
        return this.#yearRange.globalFirstYear;
    }

    get globalLastYear(): number {
        return this.#yearRange.globalLastYear;
    }

    get inertia(): boolean {
        return SETTINGS.view.navigation.inertia;
    }

    get rotateSpeed(): number {
        return SETTINGS.view.navigation.rotateSpeed;
    }

    setStartYear(year: number): void {
        this.#yearRange.setStart(year);
    }

    setEndYear(year: number): void {
        this.#yearRange.setEnd(year);
    }

    /** The shared year range, as last chosen on any view's year slider. See {@link YearRange}. */
    get requestedYearRange(): [number, number] {
        return this.#yearRange.requested;
    }

    /** Resets the shared year range to all years. The helix picks it up via {@link clampYearRange}. */
    resetYearRange(): void {
        this.#yearRange.reset();
        this.save();
    }

    /** Records a year range chosen on a chart view's slider, for the other views to pick up when they become active. */
    requestYearRange(firstYear: number, lastYear: number): void {
        this.#yearRange.request(firstYear, lastYear);
        this.save();
    }

    /** The last month with data, e.g. "August 2026". */
    get dataEndDate(): string {
        const end = this.#datasets[SETTINGS.date].endMonth;
        return end ? formatMonthYear(end.year, end.month, 'long') : '';
    }

    /** The active region. */
    get region(): Showcase {
        return SETTINGS.radio;
    }

    /** Seconds to grow the helix over the active dataset's full year span. */
    get animationDuration(): number {
        return SETTINGS.animation.duration;
    }

    get animationLoop(): boolean {
        return SETTINGS.animation.loop;
    }

    get playOnStart(): boolean {
        return SETTINGS.animation.playOnStart;
    }

    /** After a theme change: the colors the user did not change follow the new theme. */
    initializeColors(): void {
        for (const name of COLOR_NAMES) {
            if (!SETTINGS.view.colors[name].modified) {
                SETTINGS.view.colors[name].color = styledColorByTemp(name);
            }
        }
    }

    /** A color picked in the settings: remembered only if it differs from the theme's. */
    dispatchColorEvent(name: ColorName): void {
        SETTINGS.view.colors[name].modified = !SETTINGS.view.colors[name].color.equals(styledColorByTemp(name));
        Events.dispatchEvent(Events.CREATE_HELIX);
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

    /** What a screen capture saves: the whole page or the helix alone. */
    get captureTarget(): CaptureTarget {
        return SETTINGS.capture;
    }
}

export { Settings };
