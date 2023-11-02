export enum Showcase {
    GLOBAL = 'Global',
    NORTHERN_HEMISSPHERE = 'Northern HS',
    SOUTHERN_HEMISSPHERE = 'Southern HS',
}

export enum Events {
    SETTINGS_CHANGED = "settings-changed",
    CHANGE_THEME = "change-theme",
    THEME_CHANGED = "theme-changed",

    SHOW_IMPRINT = "show-imprint",
    HIDE_IMPRINT = "hide-imprint",

    CREATE_HELIX = "create-helix",
}
export namespace Events {
    export function dispatchEvent(event: Events): void {
        const evt = new Event(event.toString(), { bubbles: true });
        document.body.dispatchEvent(evt);
    }
}
