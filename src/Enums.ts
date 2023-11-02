enum Showcase {
    GLOBAL = 'Global',
    NORTHERN_HEMISSPHERE = 'Northern HS',
    SOUTHERN_HEMISSPHERE = 'Southern HS',
}

enum Events {
    SETTINGS_CHANGED = "settings-changed",
    CHANGE_THEME = "change-theme",
    THEME_CHANGED = "theme-changed",
  
    SHOW_IMPRINT = "show-imprint",
    HIDE_IMPRINT = "hide-imprint",

    CREATE_HELIX = "create-helix",
}

export { Events, Showcase };