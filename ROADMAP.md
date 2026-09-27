# Roadmap

This file describes the planned improvements to Climate Helix. Work through the priorities in order and keep each change focused on one user-visible capability.

## Priorities

No open priorities.

## Completed

### Changelog and What's new (v0.12.0, v0.13.0)

The version label opens `CHANGELOG.md` as a full page, and after an update the app shows the news since the version used last, once.

- **Changelog format**: each heading reads `## vX.Y.Z · YYYY-MM-DD · [hash](commit URL)`. A commit cannot contain its own hash, so the newest entry gets it with the next release; until then the build adds `HEAD`'s hash to the app's copy (`changelogCommit` in `vite.config.ts`). The headings before v0.12.0 were filled in from the commits that set each version in `package.json`; v0.5.7 and v0.7.0 had no commit of their own and name the commit they were shipped in.
- **Rendering** (`src/changelogFormat.ts`): a small parser for the Markdown the changelog uses, no dependency. The file is loaded on demand in its own chunk and precached for offline use.
- **Overlay** (`src/OverlayPage.ts`): shared with the imprint - X button at the info button's position, Escape in the capture phase.
- **What's new** (`src/WhatsNew.ts`): `lastSeenVersion` in the persistent state, set as soon as the news are shown. New visitors see nothing; users from before v0.13.0 without a stored version count as coming from v0.11.1. Entries marked "No functional change." are left out. Restore defaults keeps the version. Play on start waits until it is closed.

### Remembered settings (v0.11.0)

The settings and application state are kept across reloads, and **Restore defaults** in the settings panel resets them.

- **Storage** (`src/PersistentState.ts`): one versioned Local Storage entry, `climate-helix.state`. Each field is validated on load; anything unreadable falls back to its default, and unavailable storage only means nothing is remembered. Writes are grouped (300 ms) and flushed when the page is hidden. The Animation settings of v0.10.0 (`climate-helix.animation`) are carried over once.
- **What is kept**: dataset, region, the shared year range (an end at the limit of all datasets is stored as open, so it grows with new data), View and Animation settings (only those changed from the defaults), changed colors, the theme once switched, the active view, the camera, the Diff baseline and the chart legend and option checkboxes.
- **New snapshots win**: the stored dataset is dropped when `DEFAULT_DATE` changed since it was stored.
- **Restore defaults** clears the entry and reloads, which resets everything, including the camera and the views.

### Creation animation (v0.10.0)

A Play/Pause button in the top-left corner of the Helix view grows the helix month by month from the first selected year, with the month the tip has reached shown below the title.

- **State** lives in `src/HelixAnimation.ts` (progress 0-1, playing, loop), outside the meshes: many things rebuild them, and a rebuilt mesh picks up the current progress. `main.ts` advances it from the render loop and draws a prefix of the helix with `geometry.setDrawRange` (`HelixGeometry` builds the tube segment by segment along the curve, so no geometry is rebuilt per frame).
- **Interruptions**: every `CREATE_HELIX` (settings, dataset, region, year range) finishes the animation and shows the complete helix; theme switches rebuild the helix directly and keep it running. Leaving the Helix view pauses it. With reduced motion, Play shows the complete helix.
- **Settings -> Animation**: Duration (seconds for the dataset's full year span; a shorter selection plays proportionally shorter), Loop (rests 1 s on the complete helix), Play on start (a one-off run that stops at the end even when looping).

### Charts (v0.7.0)

Helix, Charts, and Diff are equal peer scenes, reachable via icon-buttons at the lower-left; the info button's content and the helix-only controls (snapshot/year picker) adapt to whichever scene is active.

- **Charts** scene (`src/ChartsScene.ts`): one time-series chart per dataset snapshot, all three regions (Global, Northern HS, Southern HS) overlaid, annual-mean resolution.
- **Diff** scene (`src/DiffChartsScene.ts`): a baseline-snapshot picker (year-only buttons, like the Helix dataset selector) and a year range slider that zooms the x-axis of every chart, then one chart per region showing how each other snapshot differs from that baseline - monthly resolution, so per-month revisions aren't averaged away like they would be in an annual mean. The y-axis always auto-scales to the checked legend series and the years in view, and each chart has a per-instance moving-average toggle (a centered 12-month trend line that dims the raw noisy series).
- **ChartControl** (`src/ChartControl.ts`): the reusable, dependency-free SVG line chart - gridlines, legend checkboxes to show/hide series, a hover crosshair/tooltip, and a viewBox that tracks the container's real pixel width via `ResizeObserver` so wider charts show more axis detail instead of just scaling up.

## Infrastructure

Deployment stays a manual `deploy.sh` run (decided in v0.9.6). The CI workflow (`.github/workflows/ci.yml`) only tests and builds.

Automating it later would need the imprint in CI first: the CI build has no `src/imprint-gen.js` and uses a stub, so a site deployed from CI would have no imprint. Either store the file's content as a repository secret that the workflow writes before building, or move the imprint to the external text source described below. Deploy on a manual trigger or a version tag, not on every push to `main` (every commit here is a version), with GitHub's Pages actions instead of force-pushing `gh-pages`.

### Imprint text source (eventually)

Today the imprint text ships as AES-encrypted text inside the gitignored `src/imprint-gen.js`, which `Imprint.ts` bundles and renders through `html2canvas`. The key necessarily ships in the public bundle too, so this only deters naive scrapers - and the CI build needs a stub for the missing file (see v0.8.3). The rendering (`html2canvas`: crisp, resizable, theme-aware) is worth keeping; only the text's source could be hardened:

- Serve the text on demand from a small Cloudflare Worker behind a Turnstile "I'm human" check. `Imprint.ts` would `fetch()` it where `loadModule()` is called today and render it with `html2canvas` exactly as now.
- The address would then never appear in the bundle or on `gh-pages`; the encryption code, the `imprint-gen.js` build dependency and the CI stub could be removed.
- Cost: a free Cloudflare account, roughly an hour of setup, and a small external service that has to keep running. Handle an unreachable service gracefully (the imprint must stay reachable) and keep the imprint available offline in the PWA if that matters.
- The address is still visible to any human who opens the imprint, which the legal requirement makes unavoidable; a c/o or imprint-service address is the only way to keep a home address off the web entirely.

### Animations

The creation animation is done (v0.10.0, see Completed).

**Not planned: morphing between datasets** (decided in v0.9.9). Most revisions between snapshots fluctuate more or less randomly by about ±0.01 °C, as the Diff charts show. A morph animation would hardly be visible on the helix and would not add insight; the Diff view already shows these revisions precisely.

## Maybe later

### Native settings panel (a 2.x candidate)

In progress on the branch `feature/native-settings`, following the mock (three artboards: desktop, phone, Advanced open), towards 2.0.0: step 1, the native panel with the app functions in its footer and lil-gui inside, is done (v1.2.0); step 2 replaces the lil-gui folders with native sections (Data, View, Animation, Screen capture); step 3 keeps lil-gui only for the geometry in a collapsed Advanced section. Decided with the mock: Advanced visible but collapsed, short region labels in the segmented control (Global / North / South), the snapshot buttons below the helix stay, and the footer shows the version and the changelog.

The settings panel is built with lil-gui (earlier dat.gui). That is still a sound choice (decided in v1.0.1): lil-gui is maintained, small, dependency-free, used by the three.js examples and binds directly to the `SETTINGS` object. Tweakpane would be the newer tweak panel with more polished controls, but switching would only exchange one developer panel for another at the cost of rewriting `Settings.ts` and the e2e selectors. Leva needs React; Theatre.js is for keyframed animation.

The panel has grown beyond tweaking parameters, though: it holds app functions for users (Restore defaults, Imprint, Check for updates) and remembered settings. That is where a developer panel starts to rub:

- lil-gui stops key events from propagating, so Escape needed a capture-phase listener (v0.9.4).
- Its look is its own and follows the theme only loosely.
- Accessibility and the phone layout are acceptable, not polished.
- The app already builds its own controls where they matter: the year range slider, the dataset buttons, the scene switcher.

If accessibility, a phone-friendly layout, localization or a consistent look become goals, replace the panel with native HTML settings (`<dialog>`, `<details>`, form controls, the theme's CSS variables):

- **User settings, native**: region and dataset, year range slider, legend, colors, theme, animation, navigation, screen capture, and the app functions Restore defaults, Imprint and Check for updates.
- **Developer settings, lil-gui**: the geometry parameters (radial and tubular segments, radius factor, mesh and faces) and possibly the tick and ring counts. Either embedded as a collapsed "Advanced" section of the native dialog (lil-gui accepts a `container`), or as a separate hidden panel opened by a key or a URL parameter. Decide by whether users should see these settings at all.
- **Unchanged**: the `Events` mechanism, `PersistentState` and the `SETTINGS` object; the native controls read and write the same fields.
- **A first step that is useful on its own**: move the app functions out of lil-gui into the native UI, for example into the info panel or a small menu.

### Localization: English and German

The app would be available in English and German, and ready for more languages. It does not depend on the native settings panel: lil-gui labels can be translated with `.name(t(...))`. Done on the branch `feature/localization` (v1.0.3 to v1.1.1).

#### What has to be translated or formatted

- **Settings** (`Settings.ts`): about 24 control labels and the folder titles.
- **Other UI strings** (about 40, spread over the modules): button titles and aria-labels (scene switcher, Play/Pause, version label, slider reset), the PWA update dialog and status messages (`PwaUpdate.ts`), the Restore defaults `confirm()`, chart titles and legends.
- **Info panels** (`info.html`, `chart-info.html`, `diff-info.html`, about 360 words): one HTML file per language rather than single strings.
- **Titles from the data**: the GISS CSV titles ("Land-Ocean: Global Means") are English source text; map them by region to translated titles.
- **Region names**: the `Showcase` values ('Global', 'Northern HS') serve as labels and as keys, and are stored in `PersistentState`. Keep them as keys and translate only for display.
- **Month abbreviations** in `chartMath.ts` and `ClimateAxes.ts` (canvas labels in the 3D scene), numbers (`+1,5 °C` in German) and dates ("August 2026"): take them from `Intl.DateTimeFormat` and `Intl.NumberFormat`.
- **Manifest and `<html lang>`**: the manifest name and description are fixed at build time; `<html lang>` follows the language.
- **Unchanged**: the imprint (German already), the README and the screenshots (English).
- **Open: the changelog and What's new.** German users would see English news. Start with English only; a German summary per version could follow, at the cost of extra work with every release.

#### Design

- **Catalogs**: `src/i18n/en.ts` and `de.ts`, plain TypeScript objects with the messages, the short and long month names and the `Intl` locale. `de` is typed as a `Catalog` (every key of `en`), which the editor checks; the build does not type-check (Vite only strips types, and the project has no `tsc`), so a unit test must check that every catalog has exactly the English keys and parameters. `t(key, params)` looks strings up (`src/i18n/index.ts`). No i18n library: `Intl.NumberFormat` formats numbers; month names come from the catalogs rather than `Intl.DateTimeFormat`, whose output differs between browsers ("Sep" or "Sept") and whose German abbreviations carry periods. Reconsider i18next or FormatJS only for a language with complex plural rules.
- **Choosing the language**: by default German if `navigator.languages` starts with `de`, otherwise English. A **Language** setting (Auto / English / Deutsch) in `PersistentState`. Changing it reloads the app, because many labels are fixed when things are built (lil-gui names, canvas text in the 3D scene, charts).
- **More languages later**: one catalog file and translated info panels, no code changes.

#### To check

- **Text length**: German is often about 30% longer. Check the wrapping title, buttons, the lil-gui label column and the chart legends at phone width.
- **Fonts**: Special Elite (canvas axis labels) and DejaVu Sans must show ä ö ü ß.
- **Tests**: e2e selectors that match English text (`getByRole(..., { name: 'Imprint' })`) need a fixed test language or stable IDs. Add an e2e smoke test with Playwright's `locale: 'de-DE'`.
- **Upkeep**: every later UI change needs both languages. Add that rule to `CLAUDE.md` and the `release` skill.
- **Translation**: drafts can be generated; the project owner reviews the German wording, especially the settings labels and the info panels.

#### Steps

Each step is its own version:

1. **Move the strings out, no visible change** (patch, done in v1.0.3): the English catalog and `t()`, number and month formatting, region names separated from the `Showcase` keys, chart series identified by an `id` instead of their label (the stored hidden series keep working), the helix title from the catalog by region instead of the CSV title, and the parser's end date as year and month. The info panels and `index.html` stay English until step 2. Snapshot dates stay ISO (`2026-09-16`) in both languages unless step 2 decides otherwise.
2. **German and the Language setting** (minor, done in v1.1.0): the `de` catalog, the language from the Language setting (Automatic, English, Deutsch; stored as `language` in `PersistentState`, a change reloads) or else from `navigator.languages` by primary tag, `<html lang>`, German info panels (`*.de.html`), a note that the changelog entries are English, and `e2e/german.spec.ts`. Unit tests and the English e2e tests pin English (`test/setup.ts`, `locale: 'en-US'`). The German wording uses the informal "du" in the info panels, and short helix titles ("Land und Ozean: Nordhalbkugel"). Snapshot dates stay ISO. The chart's left margin grew to fit "+0,05 °C" with its sign.
3. **Polish** (patch, done in v1.1.1): the icon buttons (Play/Pause, info, settings, theme, the overlays' X) became real buttons for assistive technology and the keyboard (`role`, `tabindex`, Enter and Space), named in both languages after their current state. Checked: the layout at phone width (the shorter German titles, the chart margin of v1.1.0) and the umlauts in both fonts. Decided against: a manifest per language (the name is a proper name; only the rarely shown description is English, and swapping the manifest link at runtime is unreliable for installation) and a German What's new (the changelog stays English).

## Delivery Notes

For each roadmap item, add or update the relevant manual checks and update this file when its status or design changes. At minimum, run `npm run build`, exercise affected interactions in both light and dark themes where relevant, check browser console errors, and verify PWA registration for build-related changes.
