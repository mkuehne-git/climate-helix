/**
 * Climate Helix: NASA GISS temperature anomalies as a 3D helix.
 *
 * National Aeronautics and Space Administration
 * Goddard Institute for Space Studies
 * https://data.giss.nasa.gov/gistemp/
 */

// First, so the app's styles come first in the cascade, as the <link> in index.html did before.
import './css/style.css';
import '@fontsource/special-elite';
import '@fontsource/dejavu-sans';
import { Settings } from './settings/Settings';
import { ThemesSwitcher } from './ui/ThemesSwitcher';
import { InfoButton } from './ui/InfoButton';
import { Changelog } from './changelog/Changelog';
import { showWhatsNewOnce } from './changelog/WhatsNew';
import { Events, Scene } from './Enums';
import { ScreenCapture } from './ui/ScreenCapture';
import { initPwaUpdate } from './ui/PwaUpdate';
import { SceneSwitcher } from './ui/SceneSwitcher';
import { ChartsScene } from './charts/ChartsScene';
import { DiffChartsScene } from './charts/DiffChartsScene';
import { HelixScene } from './helix/HelixScene';
import { persistentState } from './settings/PersistentState';
import { language, t, type Language } from './i18n';

// The info panels. Static imports (not public/ assets fetched at runtime), so
// they are bundled into the hashed JS chunk and cache-bust with the rest.
import infoDivAsString from './i18n/info/info.html?raw';
import chartInfoDivAsString from './i18n/info/chart-info.html?raw';
import diffInfoDivAsString from './i18n/info/diff-info.html?raw';
import infoDivAsStringDe from './i18n/info/info.de.html?raw';
import chartInfoDivAsStringDe from './i18n/info/chart-info.de.html?raw';
import diffInfoDivAsStringDe from './i18n/info/diff-info.de.html?raw';

const INFO_CONTENT_BY_SCENE: Record<Language, Record<Scene, string>> = {
    en: {
        [Scene.HELIX]: infoDivAsString,
        [Scene.CHARTS]: chartInfoDivAsString,
        [Scene.DIFF]: diffInfoDivAsString,
    },
    de: {
        [Scene.HELIX]: infoDivAsStringDe,
        [Scene.CHARTS]: chartInfoDivAsStringDe,
        [Scene.DIFF]: diffInfoDivAsStringDe,
    },
};

const containerDiv = document.createElement('div');
containerDiv.className = 'container-div';
document.body.appendChild(containerDiv);

// Sets the theme's class on <body> right away; init() announces it (THEME_CHANGED), which builds the helix once.
new ThemesSwitcher({ container: containerDiv });
const changelog = new Changelog();

let settings: Settings;
let helixScene: HelixScene;
let sceneSwitcher: SceneSwitcher;

function init(): void {
    helixScene = new HelixScene(containerDiv, settings);
    new ScreenCapture(settings, { All: document.body, Helix: helixScene.renderer.domElement });

    sceneSwitcher = new SceneSwitcher(containerDiv);
    new ChartsScene(settings, sceneSwitcher);
    new DiffChartsScene(settings, sceneSwitcher);
    new InfoButton(containerDiv, sceneSwitcher);
    createInfoDiv();

    document.body.addEventListener(Events.THEME_CHANGED.toString(), () => helixScene.onThemeChanged());
    document.body.addEventListener(Events.CREATE_HELIX.toString(), updateInfoEndDate);
    document.body.addEventListener(Events.SCENE_CHANGED.toString(), onSceneChanged);
    Events.dispatchEvent(Events.THEME_CHANGED);
    if (sceneSwitcher.scene !== Scene.HELIX) {
        // Reopen the view last shown.
        Events.dispatchEvent(Events.SCENE_CHANGED);
    }
    helixScene.start();
}

function onSceneChanged(): void {
    const helixActive = sceneSwitcher.scene === Scene.HELIX;
    containerDiv.classList.toggle('scene-not-helix', !helixActive);
    if (helixActive) {
        helixScene.onShown();
    } else {
        helixScene.onHidden();
    }
    // Pick up a year range chosen on a chart view's slider.
    if (helixActive && settings.clampYearRange()) {
        Events.dispatchEvent(Events.CREATE_HELIX);
    }
    updateInfoContent();
}

function updateInfoContent(): void {
    const infoDiv = document.querySelector('#info-div');
    if (!infoDiv) {
        return;
    }
    infoDiv.innerHTML = INFO_CONTENT_BY_SCENE[language()][sceneSwitcher.scene];
    updateInfoEndDate();
}

/** The info panel, and the version label that opens the changelog, both before the info button. */
function createInfoDiv(): void {
    const div = document.createElement('div');
    div.id = 'info-div';
    div.innerHTML = INFO_CONTENT_BY_SCENE[language()][Scene.HELIX];
    const infoIcon = document.querySelector('.info-button');
    infoIcon?.insertAdjacentElement('beforebegin', div);
    updateInfoEndDate();

    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'version-info';
    button.textContent = `v${APP_VERSION}`;
    button.title = t('version.title');
    button.addEventListener('click', () => Events.dispatchEvent(Events.SHOW_CHANGELOG));
    infoIcon?.insertAdjacentElement('beforebegin', button);
}

function updateInfoEndDate(): void {
    const endDate = document.querySelector('#data-end-date');
    if (endDate) {
        endDate.textContent = settings.dataEndDate;
    }
}

async function start(): Promise<void> {
    settings = await Settings.create();
    initPwaUpdate();
    // Canvas-drawn axis labels need the webfont file itself to be loaded
    // before they render; otherwise the browser silently falls back to a
    // default font for that one draw and never redraws it once the font
    // arrives. Force-load it up front, especially important on slower
    // mobile connections.
    await document.fonts.load("32px 'Special Elite'").catch(() => undefined);
    init();
    // Play on start waits until the news are closed.
    await showWhatsNewOnce(changelog, persistentState, APP_VERSION);
    if (settings.playOnStart && sceneSwitcher.scene === Scene.HELIX) {
        helixScene.playOnce();
    }
}

start();
