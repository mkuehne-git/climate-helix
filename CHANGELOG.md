# Changelog

## v0.7.1

* Add a link to download the GISS CSV data to the Charts and Diff scenes' info panels, matching the one already in the Helix info panel.

## v0.7.0

* Add a Charts scene: a time-series chart per dataset snapshot, all three regions (Global, Northern HS, Southern HS) overlaid, reachable via a new icon-button scene switcher alongside the Helix view.
* Add a Diff scene: pick a baseline snapshot and see how each other snapshot's monthly values differ from it, revealing that NASA revises historical data between snapshots rather than only appending new months. Includes a per-chart auto-scale toggle and a 12-month moving-average overlay.
* Add `ChartControl`, a reusable, dependency-free SVG line chart with gridlines, a legend with per-series show/hide checkboxes, and a hover crosshair/tooltip. Its viewBox tracks the container's real pixel width, so wider charts show more axis detail instead of just scaling up.
* Show scene-specific content in the info panel, and hide the helix-only snapshot/year controls while a chart scene is active; the settings panel (Screen capture, Imprint) stays available in every scene.
* Fix a race where clicking the info button and a scene button in quick succession could briefly show two scenes overlaid at different opacities: the scene switcher is now genuinely disabled while the info panel is open, and the info panel now dims each scene's own content instead of the scene container, so the always-rendering helix canvas can no longer bleed through it.

## v0.6.5

* Scale the helix's z-axis (years) against the full span of the longest available dataset instead of the active dataset's own span, so a given calendar year renders at the same z position regardless of which dataset (or default full-range selection) is shown. Datasets shorter than the longest one now render proportionally shorter rather than being stretched to fill the full configured height. Prep work for future dataset-morph animations.

## v0.6.4

* Replace the runtime `fetch()` of `public/assets/info.html` (and the version-query workaround added in v0.6.3) with a static `?raw` import of `src/info.html`. It's now bundled into the hashed JS chunk, so it cache-busts the same way the rest of the app already does, and the service worker has nothing left to mis-cache with `revision:null`.

## v0.6.3

* Fix axis labels silently falling back to the default font on slower connections: canvas-drawn text needs the webfont file itself loaded before it's drawn, since (unlike CSS text) a canvas snapshot never redraws once the font arrives later. The font is now force-loaded before the scene is built.
* Fix the info panel's end date being stuck on a stale, pre-multi-dataset value ("October 2024") on installed PWAs. `assets/info.html` was being precached by the service worker with `revision:null`, which tells it the file is immutable and never needs to be re-fetched, so no update ever reached clients that had already cached it. The fetch now includes a version query so its URL changes with each release, the same way hashed JS/CSS chunks already do.

## v0.6.2

* Enable the year, temperature, and month axes by default.
* Render axis labels in the same font used by the title, year slider, and dataset selector.
* Rotate the helix's initial orientation so the year axis renders vertically on the right side of the screen.
* Position each temperature ring's label exactly on its ring (relying on the existing Z offset for legibility) instead of padding it outward.
* Update the README screenshots to reflect the new default view.

## v0.6.1

* Fix the info panel and helix title showing a mismatched end date for the 2024-10-22 dataset (labeled October, but the CSV's last actual value is September). The end date is now derived from the dataset itself instead of a hand-maintained string.

## v0.6.0

* Add a "Colored rings" legend setting (on by default) that renders the temperature rings using the same cold/zero/warm gradient as the helix.
* Color the month axis ticks and labels to match the outermost temperature ring, and color each temperature ring's label to match its ring.
* Move temperature ring labels slightly below their rings for better separation.
* Update the legend screenshot in the README.

## v0.5.10

* Document the dataset selector, year range slider, and legend in the README.
* Replace the README screenshot with a mobile, light-theme capture and add a second one showing the legend enabled.

## v0.5.9

* Group the year range slider and dataset selector under one visibility control.
* Preserve selected years when switching datasets and keep the controls aligned on mobile.

## v0.5.8

* Prepare the year range slider and configurable year ticks for release.

## v0.5.7

* Add a dataset-aware year range slider for the helix.
* Keep helix diameter stable while changing the selected year range.
* Replace year-label interval configuration with an evenly distributed year tick count.
* Add an HTTP development-server fallback for browsers that reject the local HTTPS certificate.

## v0.5.6

* Move the year axis closer to the helix on mobile-sized views.

## v0.5.5

* Fix Imprint loading on GitHub Pages by bundling the local dynamic import.

## v0.5.4

* Show Imprint content immediately on mobile and fall back to readable HTML if canvas rendering fails.

## v0.5.2

* Keep the Imprint control reachable in the mobile Settings menu.
* Restore the Settings icon after closing the menu with the X icon.

## v0.5.1

* Remove the obsolete Show year buttons setting now that year visibility is controlled from the Legend settings.

## v0.5.0

* Add configurable year, temperature, and month axes with legend controls.
* Add configurable year-label spacing and temperature-ring count.
* Add plain HTTP development mode with `npm run dev:http`.
* Fix the lil-gui root control remaining visible alongside the Settings icon.

## v0.4.0

* Add selectable NASA GISS data snapshots.
* Display the selected dataset end date in the info panel and helix title.

## v0.3.3

* Bump `vite` 5.4.10 -> 6.3.5

## v0.3.2

* Update three.js 0.161.0 -> 0.170.0

## v0.3.1

* Fix: `Rollup` cve, upgrade packages
* Update climate data (2024-10-22)

## v0.2.9

* Fix: Upgrade `vite` and `three` packages.

## v0.2.8

* Fix: Info button blocks Imprint button.

## v0.2.7

* Fix: Info button was clicked by clicking Themes button.

## v0.2.6

* Info button now has two different icons.

## v0.2.5

* Animate Themes/Settings buttons
* Update packages, fixing `crypto-js` issue

## v0.2.4

* Fix PWA implementation, replace `manifest.json` with `manifest.webmanifest`, generated by `vite-plugin-pwa`.
* Add `ServiceWorker`, which allows offline usage.
* Change PWA icon background to white.

## v0.2.3

* Change PWA icons.

## v0.2.2

* Improve rendering of imprint
  * Fix weird looking text if installed as PWA. Font used by imprint imported from local assets. Workaround for `html2canvas` issue.
  * Fix styling of imprint, now all of the text should be displayed.
* Add version info at the lower right corner .

## v0.2.1

* Screen capture with ***alt-s***
* Redraw imprint on theme change

## v0.2.0

* Add `favicon.png`
* Add `manifest.json` to create PWA

## v0.1.3

* Add info button with info icon.

## v0.1.2

* Translate helix's center of gravity to origin. This eases rotation without prior moving the helix.
* Rename some UI labels.

## v0.1.1

* Restructure controller UI.
* Add color choosers, for cold, zero and warm temperature

## v0.1.0

* Add header line explaining what you see
* Controller UI starts as Settings icon. When closing controller, the UI is replaced by Settings icon.

## v0.0.3

* Wireframe color reacts on light/dark theme change
* Display title div
* Change position of controler UI to avoid title overlap. UI closed on start.

## v0.0.2

* Configure wireframe color through CSS (--wireframe-color)
* Remove obsolete console.log

## v0.0.1

### Main Features

* Interactive Climate Helix showing difference from mean temperature
* Three regions (Northern Hemisphere, Southern Hemisphere, Globe) from 1880-2023 based on [NASA, Goddard Space Flight Center](https://data.giss.nasa.gov/gistemp/) data
* Selective screen capture, and file download
