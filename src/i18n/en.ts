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

        'region.global': 'Global',
        'region.northern': 'Northern HS',
        'region.southern': 'Southern HS',
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

        'settings.date': 'Date: {date}',
        'settings.region': 'Region: {region}',
        'settings.view': 'View',
        'settings.yearRange': 'Year range',
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
        'settings.monthlySegments': 'Monthly Segments',
        'settings.radiusSegments': 'Radius Segments',
        'settings.radiusFactor': 'Radius Factor',
        'settings.colors': 'Colors',
        'settings.navigation': 'Navigation',
        'settings.inertia': 'Inertia',
        'settings.rotationSpeed': 'Rotation speed',
        'settings.animation': 'Animation',
        'settings.duration': 'Duration (s)',
        'settings.loop': 'Loop',
        'settings.playOnStart': 'Play on start',
        'settings.capture': 'Screen capture',
        'settings.captureAll': 'All',
        'settings.captureHelix': 'Helix',
        'settings.captureButton': "Click or press 'alt s'",
        'settings.restoreDefaults': 'Restore defaults',
        'settings.restoreDefaultsConfirm': 'Restore all settings to their defaults? The app reloads.',
        'settings.imprint': 'Imprint',
        'settings.checkForUpdates': 'Check for updates',

        'version.title': 'Show the changelog',
        'changelog.heading': 'Changelog',
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
