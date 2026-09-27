import { Imprint } from '../imprint/Imprint';
import { Events, Showcase } from '../Enums';
import * as THREE from "three";

import { SettingsButton } from "./SettingsButton";
import { SettingsPanel } from "./SettingsPanel";
import { button, checkbox, color, range, section, segmented, subheading, type Control } from './settingsControls';
import { checkForPwaUpdates, showPwaStatus } from '../ui/PwaUpdate';
import { GISSParser } from '../data/GISSParser';
import { YearRange } from '../data/YearRange';
import { persistentState, storedDate, type StoredState } from './PersistentState';
import { LANGUAGE_NAMES, LANGUAGES, formatMonthYear, formatNumber, formatTemperature, regionName, regionShortName, t, type Language } from '../i18n';

/** `endMonth`: the last month with data, 0 (January) to 11. */
export type Dataset = { endMonth?: { year: number, month: number }, csv: Record<Showcase, string>, firstYear: number, lastYear: number };

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
        const endMonth = new GISSParser(csv[Showcase.GLOBAL]).lastValidMonth;
        return [date, { endMonth, csv, firstYear: Math.min(...years), lastYear: Math.max(...years) }] as const;
    }));
    return Object.fromEntries(entries);
}
// Builds for the end-to-end tests (see playwright.config.ts) use a much
// lighter helix mesh: headless browsers render WebGL in software.
const E2E_BUILD = import.meta.env.VITE_E2E === 'true';

const DEFAULT_DATE = '2026-09-16';

type Limit = { min: number, max: number, step?: number };

/** The ranges of the numeric settings, for their sliders and for restoring stored values. */
const LIMITS: Record<string, Limit> = {
    yearTickCount: { min: 2, max: 10, step: 1 },
    temperatureRingCount: { min: 2, max: 10, step: 1 },
    tubularSegments: { min: 1, max: 31, step: 1 },
    radialSegments: { min: 3, max: 32, step: 1 },
    radiusFactor: { min: 0.1, max: 2, step: 0.05 },
    duration: { min: 2, max: 60, step: 1 },
    rotateSpeed: { min: 0.5, max: 10, step: 0.5 },
};

function settingsButton(label: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'settings-button';
    button.textContent = label;
    button.addEventListener('click', onClick);
    return button;
}

const SETTINGS = {
    showcaseCSV: undefined,
    radio: Showcase.GLOBAL,
    date: DEFAULT_DATE,
    view: {
        axes: {
            yearVisible: true,
            temperatureVisible: true,
            monthVisible: true,
            yearTickCount: 5,
            temperatureRingCount: 5,
            temperatureRingsColored: true,
        },
        navigation: {
            /** The helix keeps turning for a moment after a drag. */
            inertia: true,
            /** 1 is the trackball controls' own speed, about a fifth of the orbit controls used before v0.11.1. */
            rotateSpeed: 3,
        },
        geometry: {
            meshVisible: false,
            facesVisible: true,
            radialSegments: E2E_BUILD ? 3 : 8,
            radius: 1,
            radiusFactor: 0.9,
            tubularSegments: E2E_BUILD ? 1 : 30,
        },
        colors: {
            cold: colorDescriptor('cold'),
            zero: colorDescriptor('zero'),
            warm: colorDescriptor('warm'),
        }
    },
    animation: { duration: 10, loop: false, playOnStart: false },
    capture: 'All' as CaptureTarget,
}

type ColorName = 'cold' | 'zero' | 'warm';
export type CaptureTarget = 'All' | 'Helix';
const COLOR_NAMES: ColorName[] = ['cold', 'zero', 'warm'];

/** The settings as shipped, to store only what the user changed - a changed default then still reaches everyone else. */
const DEFAULTS = {
    radio: SETTINGS.radio,
    navigation: { ...SETTINGS.view.navigation },
    axes: { ...SETTINGS.view.axes },
    geometry: { ...SETTINGS.view.geometry },
    animation: { ...SETTINGS.animation },
};

/** The fields of `current` that differ from `defaults`; undefined when none do. */
function changedFields<T extends object>(current: T, defaults: T): Partial<T> | undefined {
    const changed = Object.entries(current).filter(([key, value]) => value !== defaults[key]);
    return changed.length > 0 ? Object.fromEntries(changed) as Partial<T> : undefined;
}

/** Copies stored values onto the settings, keeping numbers within their slider's range. */
function restoreFields<T extends object>(target: T, stored: Partial<T> | undefined): void {
    for (const [key, value] of Object.entries(stored ?? {})) {
        if (value === undefined || !(key in target)) {
            continue;
        }
        const limit = LIMITS[key];
        if (limit && typeof value === 'number') {
            const stepped = limit.step === undefined ? value : Math.round(value / limit.step) * limit.step;
            target[key] = Math.max(limit.min, Math.min(stepped, limit.max));
        } else {
            target[key] = value;
        }
    }
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
        this.createDataSection();
        this.createViewSection();
        this.createAnimationSection();
        this.createCaptureSection();
        this.createAdvancedSection();
        this.createAppFunctions(this.#panel.footer);
        this.createSettingsIcon();
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

    createSettingsIcon() {
        new SettingsButton(this.#panel);
    }

    setDate(date: string): void {
        SETTINGS.date = date;
        this.selectDate(date);
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

    /** Data: the snapshot and the region. */
    private createDataSection(): void {
        const content = section(this.#panel.body, t('settings.data'), { open: true });
        this.#controls.push(
            segmented(content, t('settings.snapshot'),
                this.dateOptions.map((date) => ({ value: date, label: String(new Date(date).getFullYear()), title: date })),
                () => SETTINGS.date,
                (date) => this.setDate(date)),
            segmented(content, t('settings.region'),
                Object.values(Showcase).map((showcase) => ({ value: showcase, label: regionShortName(showcase), title: regionName(showcase) })),
                () => SETTINGS.radio,
                (showcase) => {
                    SETTINGS.radio = showcase;
                    SETTINGS.showcaseCSV = this.#csv[showcase];
                    this.clampYearRange();
                    Events.dispatchEvent(Events.CREATE_HELIX);
                }),
        );
    }

    /** View: the legend and the colors. */
    private createViewSection(): void {
        const content = section(this.#panel.body, t('settings.view'));
        const redraw = () => Events.dispatchEvent(Events.CREATE_HELIX);
        const view = SETTINGS.view;
        const axes = view.axes;
        const bool = (text: string, object: object, key: string, changed = redraw) =>
            checkbox(content, text, () => object[key], (value) => { object[key] = value; changed(); });
        const number = (text: string, object: object, key: string, changed = redraw, format?: (value: number) => string) =>
            range(content, text, LIMITS[key], () => object[key], (value) => { object[key] = value; changed(); }, format);
        subheading(content, t('settings.legend'));
        this.#controls.push(
            bool(t('settings.yearAxis'), axes, 'yearVisible'),
            bool(t('settings.temperatureAxis'), axes, 'temperatureVisible'),
            bool(t('settings.monthAxis'), axes, 'monthVisible'),
            number(t('settings.yearTicks'), axes, 'yearTickCount'),
            number(t('settings.temperatureRings'), axes, 'temperatureRingCount'),
            bool(t('settings.coloredRings'), axes, 'temperatureRingsColored'),
        );
        subheading(content, t('settings.colors'));
        for (const [name, temperature, decimals] of [['cold', -1, 1], ['zero', 0, 0], ['warm', 1.5, 1]] as const) {
            this.#controls.push(color(content, formatTemperature(temperature, decimals),
                () => `#${view.colors[name].color.getHexString()}`,
                (value) => {
                    view.colors[name].color.set(value);
                    this.dispatchColorEvent(name);
                }));
        }
    }

    private createAnimationSection(): void {
        const content = section(this.#panel.body, t('settings.animation'));
        const animation = SETTINGS.animation;
        const changed = () => Events.dispatchEvent(Events.ANIMATION_CHANGED);
        this.#controls.push(
            range(content, t('settings.duration'), LIMITS.duration, () => animation.duration,
                (value) => { animation.duration = value; changed(); }, (value) => t('format.seconds', { value })),
            checkbox(content, t('settings.loop'), () => animation.loop, (value) => { animation.loop = value; changed(); }),
            checkbox(content, t('settings.playOnStart'), () => animation.playOnStart, (value) => { animation.playOnStart = value; changed(); }),
        );
    }

    /** Screen capture: what to save, and the button (Alt+S does the same, see ScreenCapture.ts). */
    private createCaptureSection(): void {
        const content = section(this.#panel.body, t('settings.capture'));
        this.#controls.push(segmented<CaptureTarget>(content, t('settings.captureWhat'),
            [{ value: 'All', label: t('settings.captureAll') }, { value: 'Helix', label: t('settings.captureHelix') }],
            () => SETTINGS.capture,
            (target) => { SETTINGS.capture = target; }));
        button(content, t('settings.captureButton'), () => Events.dispatchEvent(Events.SCREEN_CAPTURE)).classList.add('wide');
    }

    /** Advanced, collapsed: the helix's mesh and how it turns - the defaults suit most devices. */
    private createAdvancedSection(): void {
        const content = section(this.#panel.body, t('settings.advanced'), { hint: `${t('settings.geometry')}, ${t('settings.navigation')}` });
        const note = document.createElement('p');
        note.className = 'settings-note';
        note.textContent = t('settings.advancedNote');
        content.appendChild(note);
        const geometry = SETTINGS.view.geometry;
        const redraw = () => Events.dispatchEvent(Events.CREATE_HELIX);
        const number = (text: string, key: string, format?: (value: number) => string) =>
            range(content, text, LIMITS[key], () => geometry[key], (value) => { geometry[key] = value; redraw(); }, format);
        subheading(content, t('settings.geometry'));
        this.#controls.push(
            checkbox(content, t('settings.wireframe'), () => geometry.meshVisible, (value) => { geometry.meshVisible = value; redraw(); }),
            checkbox(content, t('settings.faces'), () => geometry.facesVisible, (value) => { geometry.facesVisible = value; redraw(); }),
            number(t('settings.monthlySegments'), 'tubularSegments'),
            number(t('settings.radiusSegments'), 'radialSegments'),
            number(t('settings.radiusFactor'), 'radiusFactor', (value) => formatNumber(value, 2)),
        );

        const navigation = SETTINGS.view.navigation;
        // Not CREATE_HELIX: these only change how the camera moves, and must not end a running animation.
        const controlsChanged = () => Events.dispatchEvent(Events.CONTROLS_CHANGED);
        subheading(content, t('settings.navigation'));
        this.#controls.push(
            checkbox(content, t('settings.inertia'), () => navigation.inertia, (value) => { navigation.inertia = value; controlsChanged(); }),
            range(content, t('settings.rotationSpeed'), LIMITS.rotateSpeed, () => navigation.rotateSpeed,
                (value) => { navigation.rotateSpeed = value; controlsChanged(); }, (value) => formatNumber(value, value % 1 === 0 ? 0 : 1)),
        );
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
    /**
     * The app functions, native in the panel's footer: Language (Automatic
     * follows the browser; a change is stored at once and reloads the app,
     * because many labels are fixed when things are built), Check for updates,
     * Imprint, Restore defaults, and the version with the changelog.
     */
    createAppFunctions(footer: HTMLElement): void {
        new Imprint();
        const languageRow = document.createElement('div');
        languageRow.className = 'settings-row';
        const languageLabel = document.createElement('label');
        languageLabel.htmlFor = 'settings-language';
        languageLabel.textContent = t('settings.language');
        const select = document.createElement('select');
        select.id = 'settings-language';
        const choices: [Language | 'auto', string][] = [['auto', t('settings.languageAuto')], ...LANGUAGES.map((language): [Language, string] => [language, LANGUAGE_NAMES[language]])];
        for (const [value, label] of choices) {
            select.add(new Option(label, value, false, value === (persistentState.state.language ?? 'auto')));
        }
        select.addEventListener('change', () => {
            const value = select.value as Language | 'auto';
            persistentState.update({ language: value === 'auto' ? undefined : value });
            persistentState.flush();
            window.location.reload();
        });
        languageRow.append(languageLabel, select);

        const buttons = document.createElement('div');
        buttons.className = 'settings-buttons';
        buttons.append(
            settingsButton(t('settings.checkForUpdates'), async () => {
                showPwaStatus(t('pwa.checking'), 'info');
                const wasChecked = await checkForPwaUpdates();
                if (!wasChecked) {
                    console.info('No app update check was possible right now.');
                }
            }),
            settingsButton(t('settings.imprint'), () => Events.dispatchEvent(Events.SHOW_IMPRINT)),
        );

        // Forgets the stored settings and state and reloads: the simplest way to reset everything, including the camera and the views.
        const restore = settingsButton(t('settings.restoreDefaults'), () => {
            if (window.confirm(t('settings.restoreDefaultsConfirm'))) {
                persistentState.clear();
                window.location.reload();
            }
        });
        restore.classList.add('danger');

        const version = document.createElement('div');
        version.className = 'settings-version';
        const changelog = settingsButton(`v${APP_VERSION} · ${t('changelog.heading')}`, () => Events.dispatchEvent(Events.SHOW_CHANGELOG));
        changelog.className = 'settings-link';
        version.appendChild(changelog);

        footer.append(languageRow, buttons, restore, version);
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
