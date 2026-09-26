export enum Showcase {
    GLOBAL = 'Global',
    NORTHERN_HEMISPHERE = 'Northern HS',
    SOUTHERN_HEMISPHERE = 'Southern HS',
}

export enum Scene {
    HELIX = 'helix',
    CHARTS = 'charts',
    DIFF = 'diff',
}

export enum Events {
    SETTINGS_CHANGED = "settings-changed",
    CHANGE_THEME = "change-theme",
    THEME_CHANGED = "theme-changed",

    SHOW_IMPRINT = "show-imprint",
    HIDE_IMPRINT = "hide-imprint",

    SHOW_CHANGELOG = "show-changelog",
    HIDE_CHANGELOG = "hide-changelog",

    CREATE_HELIX = "create-helix",

    SCENE_CHANGED = "scene-changed",

    ANIMATION_CHANGED = "animation-changed",

    CONTROLS_CHANGED = "controls-changed",
}
export namespace Events {
    export function dispatchEvent(event: Events): void {
        const evt = new Event(event.toString(), { bubbles: true });
        document.body.dispatchEvent(evt);
    }
}
