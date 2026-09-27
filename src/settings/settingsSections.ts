import { Events, Showcase } from '../Enums';
import type { Settings } from './Settings';
import type { SettingsPanel } from './SettingsPanel';
import { button, checkbox, color, range, section, segmented, subheading, type Control } from './settingsControls';
import { LIMITS, SETTINGS, type CaptureTarget } from './settingsValues';
import { persistentState } from './PersistentState';
import { Imprint } from '../imprint/Imprint';
import { checkForPwaUpdates, showPwaStatus } from '../ui/PwaUpdate';
import { LANGUAGE_NAMES, LANGUAGES, formatNumber, formatTemperature, regionName, regionShortName, t, type Language } from '../i18n';

/**
 * Fills the settings panel: the sections in its body and the app functions in
 * its footer. Returns the controls, to show values that changed elsewhere.
 */
export function buildSettingsPanel(panel: SettingsPanel, settings: Settings): Control[] {
    const controls = [
        ...dataSection(panel.body, settings),
        ...viewSection(panel.body, settings),
        ...animationSection(panel.body),
        ...captureSection(panel.body),
        ...advancedSection(panel.body),
    ];
    appFunctions(panel.footer);
    return controls;
}

const redraw = () => Events.dispatchEvent(Events.CREATE_HELIX);

/** Data: the snapshot and the region. */
function dataSection(body: HTMLElement, settings: Settings): Control[] {
    const content = section(body, t('settings.data'), { open: true });
    return [
        segmented(content, t('settings.snapshot'),
            settings.dateOptions.map((date) => ({ value: date, label: String(new Date(date).getFullYear()), title: date })),
            () => SETTINGS.date,
            (date) => settings.setDate(date)),
        segmented(content, t('settings.region'),
            Object.values(Showcase).map((showcase) => ({ value: showcase, label: regionShortName(showcase), title: regionName(showcase) })),
            () => SETTINGS.radio,
            (showcase) => settings.setRegion(showcase)),
    ];
}

/** View: the legend and the colors. */
function viewSection(body: HTMLElement, settings: Settings): Control[] {
    const content = section(body, t('settings.view'));
    const view = SETTINGS.view;
    const axes = view.axes;
    const bool = (text: string, key: keyof typeof axes) =>
        checkbox(content, text, () => axes[key] as boolean, (value) => { (axes[key] as boolean) = value; redraw(); });
    const number = (text: string, key: keyof typeof axes) =>
        range(content, text, LIMITS[key], () => axes[key] as number, (value) => { (axes[key] as number) = value; redraw(); });
    subheading(content, t('settings.legend'));
    const controls = [
        bool(t('settings.yearAxis'), 'yearVisible'),
        bool(t('settings.temperatureAxis'), 'temperatureVisible'),
        bool(t('settings.monthAxis'), 'monthVisible'),
        number(t('settings.yearTicks'), 'yearTickCount'),
        number(t('settings.temperatureRings'), 'temperatureRingCount'),
        bool(t('settings.coloredRings'), 'temperatureRingsColored'),
    ];
    subheading(content, t('settings.colors'));
    for (const [name, temperature, decimals] of [['cold', -1, 1], ['zero', 0, 0], ['warm', 1.5, 1]] as const) {
        controls.push(color(content, formatTemperature(temperature, decimals),
            () => `#${view.colors[name].color.getHexString()}`,
            (value) => {
                view.colors[name].color.set(value);
                settings.dispatchColorEvent(name);
            }));
    }
    return controls;
}

function animationSection(body: HTMLElement): Control[] {
    const content = section(body, t('settings.animation'));
    const animation = SETTINGS.animation;
    const changed = () => Events.dispatchEvent(Events.ANIMATION_CHANGED);
    return [
        range(content, t('settings.duration'), LIMITS.duration, () => animation.duration,
            (value) => { animation.duration = value; changed(); }, (value) => t('format.seconds', { value })),
        checkbox(content, t('settings.loop'), () => animation.loop, (value) => { animation.loop = value; changed(); }),
        checkbox(content, t('settings.playOnStart'), () => animation.playOnStart, (value) => { animation.playOnStart = value; changed(); }),
    ];
}

/** Screen capture: what to save, and the button (Alt+S does the same, see ScreenCapture.ts). */
function captureSection(body: HTMLElement): Control[] {
    const content = section(body, t('settings.capture'));
    const target = segmented<CaptureTarget>(content, t('settings.captureWhat'),
        [{ value: 'All', label: t('settings.captureAll') }, { value: 'Helix', label: t('settings.captureHelix') }],
        () => SETTINGS.capture,
        (value) => { SETTINGS.capture = value; });
    button(content, t('settings.captureButton'), () => Events.dispatchEvent(Events.SCREEN_CAPTURE)).classList.add('wide');
    return [target];
}

/** Advanced, collapsed: the helix's mesh and how it turns - the defaults suit most devices. */
function advancedSection(body: HTMLElement): Control[] {
    const content = section(body, t('settings.advanced'), { hint: `${t('settings.geometry')}, ${t('settings.navigation')}` });
    const note = document.createElement('p');
    note.className = 'settings-note';
    note.textContent = t('settings.advancedNote');
    content.appendChild(note);

    const geometry = SETTINGS.view.geometry;
    const number = (text: string, key: 'tubularSegments' | 'radialSegments' | 'radiusFactor', format?: (value: number) => string) =>
        range(content, text, LIMITS[key], () => geometry[key], (value) => { geometry[key] = value; redraw(); }, format);
    subheading(content, t('settings.geometry'));
    const controls = [
        checkbox(content, t('settings.wireframe'), () => geometry.meshVisible, (value) => { geometry.meshVisible = value; redraw(); }),
        checkbox(content, t('settings.faces'), () => geometry.facesVisible, (value) => { geometry.facesVisible = value; redraw(); }),
        number(t('settings.monthlySegments'), 'tubularSegments'),
        number(t('settings.radiusSegments'), 'radialSegments'),
        number(t('settings.radiusFactor'), 'radiusFactor', (value) => formatNumber(value, 2)),
    ];

    const navigation = SETTINGS.view.navigation;
    // Not CREATE_HELIX: these only change how the camera moves, and must not end a running animation.
    const controlsChanged = () => Events.dispatchEvent(Events.CONTROLS_CHANGED);
    subheading(content, t('settings.navigation'));
    controls.push(
        checkbox(content, t('settings.inertia'), () => navigation.inertia, (value) => { navigation.inertia = value; controlsChanged(); }),
        range(content, t('settings.rotationSpeed'), LIMITS.rotateSpeed, () => navigation.rotateSpeed,
            (value) => { navigation.rotateSpeed = value; controlsChanged(); }, (value) => formatNumber(value, value % 1 === 0 ? 0 : 1)),
    );
    return controls;
}

function footerButton(label: string, onClick: () => void): HTMLButtonElement {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = 'settings-button';
    element.textContent = label;
    element.addEventListener('click', onClick);
    return element;
}

/**
 * The app functions, in the panel's footer: Language (Automatic follows the
 * browser; a change is stored at once and reloads the app, because many labels
 * are fixed when things are built), Check for updates, Imprint, Restore
 * defaults, and the version with the changelog.
 */
function appFunctions(footer: HTMLElement): void {
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
        footerButton(t('settings.checkForUpdates'), async () => {
            showPwaStatus(t('pwa.checking'), 'info');
            await checkForPwaUpdates();
        }),
        footerButton(t('settings.imprint'), () => Events.dispatchEvent(Events.SHOW_IMPRINT)),
    );

    // Forgets the stored settings and state and reloads: the simplest way to reset everything, including the camera and the views.
    const restore = footerButton(t('settings.restoreDefaults'), () => {
        if (window.confirm(t('settings.restoreDefaultsConfirm'))) {
            persistentState.clear();
            window.location.reload();
        }
    });
    restore.classList.add('danger');

    const version = document.createElement('div');
    version.className = 'settings-version';
    const changelog = footerButton(`v${APP_VERSION} · ${t('changelog.heading')}`, () => Events.dispatchEvent(Events.SHOW_CHANGELOG));
    changelog.className = 'settings-link';
    version.appendChild(changelog);

    footer.append(languageRow, buttons, restore, version);
}
