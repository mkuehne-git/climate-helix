/**
 * English, the source language: every message is defined here first, and
 * other languages must translate every key (see `Catalog` in index.ts).
 * `{name}` marks a parameter.
 */
export const en = {
    /** The locale for `Intl` number formatting. */
    locale: 'en-US',
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthsLong: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    messages: {
        /** A temperature, e.g. "+1.50°C"; the number is already formatted. */
        'format.temperature': '{value}°C',
        /** A month and year, e.g. "Feb 1990" or "August 2026". */
        'format.monthYear': '{month} {year}',
        /** A duration in seconds, e.g. "10 s". */
        'format.seconds': '{value} s',

        'region.global': 'Global',
        'region.northern': 'Northern HS',
        'region.southern': 'Southern HS',
        /** Short region names for the settings' buttons, which are narrow on phones. */
        'region.short.global': 'Global',
        'region.short.northern': 'North',
        'region.short.southern': 'South',
        /** The helix title per region; in English the titles of the GISS CSV files. */
        'title.global': 'Land-Ocean: Global Means',
        'title.northern': 'Land-Ocean: Northern Hemispheric Means',
        'title.southern': 'Land-Ocean: Southern Hemispheric Means',
        /** The helix heading: the region's title and the last month with data. */
        'helix.heading': '{title} ({date})',

        'scene.helix': 'Helix',
        'scene.charts': 'Charts',
        'scene.diff': 'Diff',
        /** The accessible name of a scene switcher button. */
        'scene.button': '{scene} view',

        'charts.heading': 'Temperature anomaly per dataset snapshot',
        'charts.title': '{date} snapshot',
        'diff.heading': 'Differences between dataset snapshots',
        'diff.title': '{region} - baseline {date}',
        'chart.autoScale': 'Auto-scale',
        'chart.movingAverage': 'Moving average',
        /** The accessible name of a legend checkbox. */
        'chart.showSeries': 'Show {series}',

        'yearRange.reset': 'Show all years',
        'yearRange.start': 'Start year',
        'yearRange.end': 'End year',

        'settings.title': 'Settings',
        'settings.data': 'Data',
        'settings.snapshot': 'Snapshot',
        'settings.region': 'Region',
        'settings.view': 'View',
        'settings.legend': 'Legend',
        'settings.yearAxis': 'Year axis',
        'settings.temperatureAxis': 'Temperature axis',
        'settings.monthAxis': 'Month axis',
        'settings.yearTicks': 'Year ticks',
        'settings.temperatureRings': 'Temperature rings',
        'settings.coloredRings': 'Colored rings',
        'settings.geometry': 'Geometry',
        'settings.wireframe': 'Wireframe',
        'settings.faces': 'Faces',
        'settings.monthlySegments': 'Monthly segments',
        'settings.radiusSegments': 'Radius segments',
        'settings.radiusFactor': 'Radius factor',
        'settings.colors': 'Colors',
        'settings.navigation': 'Navigation',
        'settings.inertia': 'Inertia',
        'settings.rotationSpeed': 'Rotation speed',
        'settings.animation': 'Animation',
        'settings.duration': 'Duration',
        'settings.loop': 'Loop',
        'settings.playOnStart': 'Play on start',
        'settings.capture': 'Screen capture',
        'settings.captureWhat': 'Capture',
        'settings.captureAll': 'Everything',
        'settings.captureHelix': 'Helix only',
        'settings.captureButton': 'Save image · Alt+S',
        'settings.advanced': 'Advanced',
        'settings.advancedNote': 'The helix\'s mesh and how it turns. The defaults suit most devices.',
        'settings.restoreDefaults': 'Restore defaults',
        'settings.restoreDefaultsConfirm': 'Restore all settings to their defaults? The app reloads.',
        'settings.language': 'Language',
        /** The Language setting's choice to follow the browser's language. */
        'settings.languageAuto': 'Automatic',
        'settings.imprint': 'Imprint',
        'settings.checkForUpdates': 'Check for updates',

        /** Accessible names of the icon buttons, per state. */
        'button.play': 'Play',
        'button.pause': 'Pause',
        'button.showInfo': 'Show information',
        'button.closeInfo': 'Close information',
        'button.openSettings': 'Open settings',
        'button.closeSettings': 'Close settings',
        'button.lightTheme': 'Switch to light theme',
        'button.darkTheme': 'Switch to dark theme',
        'button.close': 'Close',

        'version.title': 'Show the changelog',
        'changelog.heading': 'Changelog',
        /** Shown below the changelog and What's new headings when the entries are not in this language; empty in English. */
        'changelog.note': '',
        'whatsNew.heading': "What's new",
        'whatsNew.fullChangelog': 'Full changelog',

        'pwa.updateTitle': 'Update available',
        'pwa.updateMessage': 'A new version of Climate Helix is ready. Reload to apply the update?',
        'pwa.reload': 'Reload',
        'pwa.later': 'Later',
        'pwa.checking': 'Checking for updates...',
        'pwa.notSupported': 'Service workers are not supported in this browser.',
        'pwa.notRegistered': 'No service worker is registered yet.',
        'pwa.updateReady': 'Update ready. Reload to apply it.',
        'pwa.noUpdate': 'No update available.',
    },
} as const;
