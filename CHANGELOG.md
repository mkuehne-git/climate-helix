# Changelog

## v0.9.8

* Fix a click on the imprint's X button being lost right after resizing the window: the button now closes the imprint on the click itself instead of after its click animation, and closing cancels a pending resize redraw.
* Move local development to Node 24 LTS: `.nvmrc` selects it for `nvm use`, and `engines` in `package.json` states the minimum (Node 22.12, required by Vitest 5).
* Correct the README's outdated data range and snapshot dates.

## v0.9.7

* Update the CI workflow's `actions/checkout` and `actions/setup-node` from v4 to v7, which run on Node 24 (v4 ran on the deprecated Node 20 and caused a warning), and let Dependabot keep the workflow's GitHub Actions up to date. No functional change.

## v0.9.6

* Add a CI workflow (phase 4 of `TESTING.md`) that runs the unit tests and a production build on Node 24 for every push to `main` and every pull request. It replaces the dependency-only validation on Node 20 and does not deploy; deployment stays a manual `deploy.sh` run. Dependabot now groups the test tools. No functional change.

## v0.9.5

* Add two project skills for Claude Code in `.claude/skills/`: `release` (version, changelog, validation and approval before each commit) and `data-update` (adding a new NASA GISS snapshot). `CLAUDE.md` points to them and now describes how snapshots are registered in `Settings.ts`. No functional change.

## v0.9.4

* Fix Escape not closing the imprint after opening it from the settings panel: the settings panel (lil-gui) stops key events, and the Imprint button keeps the focus. The imprint now listens for Escape before that.
* Add Playwright end-to-end tests in Chromium and Firefox (`npm run test:e2e`, local only), phase 3 of `TESTING.md`: app start without console errors, dataset and region switching, theme switcher, info panel, service worker, the shared year range and reset across views, and the imprint at desktop and phone size. Test builds (`VITE_E2E=true`) use a lighter helix mesh.

## v0.9.3

* Add component tests (phase 2 of `TESTING.md`) with happy-dom: the year range slider and its reset button, chart zoom, y-axis fitting and legend toggles, the imprint's close button, Escape and resize handling, and the helix geometry. Regression tests cover the v0.8.4 month ticks and the v0.8.6 helix height and imprint fixes. No functional change.

## v0.9.2

* Add unit tests with Vitest (`npm test`), phase 1 of `TESTING.md`: the GISS parser against every bundled snapshot and region, the chart tick and moving-average math, and the shared year range logic, including regression tests for earlier fixes. To make this testable, the chart math moves from `ChartControl.ts` to `chartMath.ts`, and the year range logic from `Settings` to a new `YearRange` class. No functional change.
* Note in `CLAUDE.md` that Node.js must move to a stable LTS release (locally Node 23, in CI Node 20), which Vitest 5 and the current npm already require.

## v0.9.1

* Add `TESTING.md`, the plan for automated tests: Vitest unit and component tests (also in CI) and local Playwright end-to-end tests in Chromium and Firefox. No functional change.

## v0.9.0

* Add the year range slider to the Charts scene: it zooms the x-axis of all snapshot charts at once, and each chart's y-axis fits the years in view.
* Share the year range between the Helix, Charts and Diff views: a view you switch to picks up the range last chosen on any view's slider. The helix clamps it to the selected dataset's years but keeps the original range, so switching to a shorter dataset and back (or to a chart view and back) restores it.
* Add a small reset (X) button to the right of every year range slider. It shows all years again, for the shared range too, and is dimmed while all years are already shown.

## v0.8.6

* Restore the earlier helix behavior for the year range slider: the selected years stretch to the full helix height again instead of shrinking the helix along the z-axis. This reverts the v0.6.5 z-scaling against the longest dataset's span, so shorter datasets also fill the full height again.
* Fix the imprint being impossible to close: the info button (and the scene switcher, settings and version label) were drawn on top of it, covering its Close button. The imprint now covers them all, and its Close button at the end of the page is replaced by an X button fixed at the info button's position, so it can be closed without scrolling down. Escape still closes it too.

## v0.8.5

* Document a possible future hardening of the imprint's text source in the roadmap (serving it on demand from a Turnstile-gated Cloudflare Worker instead of bundling it encrypted). No functional change.

## v0.8.4

* Fix the x-axis of monthly charts having almost no labels when zoomed in: below about one tick per year, the Diff charts now use month-aligned ticks (every 1, 2, 3 or 6 months, January showing the year, other months their abbreviation) instead of only whole years.

## v0.8.3

* Fix the failing "Dependency validation" CI build (and with it every Dependabot PR check): the gitignored, private `src/imprint-gen.js` is bundled through a static import since the v0.5.5 GitHub Pages fix, so CI now writes a stub module before building. The stub only lets the import resolve - the CI build is never deployed, and local/deploy builds still fail loudly when the real imprint file is missing.

## v0.8.2

* Make the chart lines thinner (raw lines 1.5px, or 1px while a moving average is overlaid; moving-average lines 1.75px) so the dense monthly Diff charts read more clearly.
* Remove the Auto-scale checkbox from the Diff charts, since toggling it barely changed anything; the y-axis now always auto-scales to the checked legend lines and the years in view. `ChartControl` applies `autoScaleDefault` even when the checkbox isn't shown.

## v0.8.1

* Fix the scene-switcher tooltips staying on screen for a long time on touch devices: hover styling now applies only on devices that can hover, since touch browsers keep `:hover` on the last tapped button.
* Sync the root version in `package-lock.json` with `package.json` (it had been stale at 0.4.4).

## v0.8.0

* Add a year range slider to the Diff scene that zooms the x-axis of all charts at once. The y-axis refits to the years in view when Auto-scale is on, and the zoom is kept when the baseline changes. `YearRangeSlider` no longer depends on `Settings` (the Helix passes its own range in), and `ChartControl` gained `setXDomain` and now clips lines to the plot area.
* The Diff scene's baseline buttons now show only the year, matching the Helix dataset selector (the full date is in the tooltip).
* Shorten chart titles: "2024-10-22 snapshot" in the Charts scene and "Global - baseline 2024-10-22" in the Diff scene.
* Decorate the Diff scene icon with a small delta badge on the chart glyph.
* Move the scene-switcher buttons closer together so they no longer overlap the info button's tap area on phones.
* Fix the black border around the Imprint and Check for updates buttons in the Settings menu in light mode.

## v0.7.2

* Vertically center the scene-switcher icons on the info button instead of on the bottom edge, without moving the info button itself.

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
