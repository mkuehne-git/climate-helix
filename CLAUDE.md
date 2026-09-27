# Climate Helix

## Overview

Climate Helix is a Vite-powered TypeScript and Three.js web app that renders NASA GISS temperature anomalies as an interactive 3D helix. It is also installable as a PWA and is deployed to GitHub Pages at `/climate-helix/`.

## Development Commands

Run these commands from the repository root:

```sh
npm install       # install dependencies
npm run dev       # start the Vite development server
npm run dev:http   # start Vite over HTTP when the local HTTPS certificate is rejected
npm run build     # create a production build in dist/
npm run serve     # preview the production build
npm test          # run the unit tests (Vitest)
npm run typecheck # check the TypeScript types (tsc; the build does not)
npm run test:watch # run the unit tests in watch mode
npm run test:e2e  # build and run the Playwright end-to-end tests (Chromium, Firefox)
npm run screenshots # retake the README screenshots in docs/images/ (light theme)
```

The default development server uses HTTPS with a local self-signed certificate. If the browser cannot trust that certificate, use `npm run dev:http` and open `http://127.0.0.1:5173/` instead.

### Node.js version

The project uses the current Active LTS release of Node.js: Node 24 (24.21.0 locally as of September 2026). Keeping it current is easy to forget - the project ran on the out-of-support Node 23 until v0.9.8, where npm 11.4.1 crashed while installing Vitest.

- `.nvmrc` selects Node 24 for `nvm use`; `engines` in `package.json` states the minimum (Vitest 5 needs 22.12+).
- The CI workflow's `node-version` (`.github/workflows/ci.yml`) must match `.nvmrc`.
- When adding or upgrading a dev dependency, check its `engines` field against that version.
- Revisit this when a newer LTS starts (Node 26 in October 2026) and when the used one reaches end of life: update `.nvmrc`, the workflow and, if needed, `engines` together.

Unit tests live in `test/` and run with `npm test`; the test plan and its remaining phases are described in `TESTING.md`. There is no lint script. End-to-end tests live in `e2e/` and run locally with `npm run test:e2e` (not in CI); run them after UI changes. After visible UI changes, retake the README screenshots with the `screenshots` skill (`.claude/skills/screenshots/`). After changes, run `npm run typecheck`, `npm test` and `npm run build`, and manually verify the app in a browser. Check the helix, region selector, theme switcher, settings controls, info/imprint dialogs, and screen capture behavior when those areas are affected.

## Versioning

The app follows semantic versioning (`x.y.z`). Fixes and small improvements increase `z`; new features increase `y`. Increases to `x` are decided by the project owner.

Always update the version number before creating a commit. Record the new version in `package.json` and add a corresponding entry to `CHANGELOG.md`, headed `## vX.Y.Z · YYYY-MM-DD`; the previous entry gets its commit's short hash as a link. The app shows the changelog to users, so write it for them. The `release` skill (`.claude/skills/release/`) covers the full routine: version, changelog, validation and the approval before committing.

## Git Workflow

Always ask the project owner for approval before creating a commit. Do not commit changes without explicit approval.

## Source Layout

`src/` is grouped by area: `data/` (parsing and year ranges), `helix/` (the 3D helix), `charts/` (the Charts and Diff views), `settings/` (settings, their panel and persistence), `ui/` (buttons, overlays, sliders, screen capture, PWA updates), `changelog/`, `imprint/`, `i18n/` (catalogs and the info panels), plus `icons/` and `css/`. `main.ts` and `Enums.ts` stay at the top. The README screenshots are in `docs/images/`, not in `src/`. The private `src/imprint-gen.js` stays at the top of `src/`: CI and `deploy.sh` expect it there.

- `src/main.ts` sets up the app: the settings, theme, scene switcher, chart views, info panel, screen capture and startup (What's new, Play on start).
- `src/helix/HelixScene.ts` is the 3D view: renderer, camera, trackball controls and render loop, the helix meshes and axes (freeing the old ones on every rebuild, `disposeMesh`), the creation animation with its Play/Pause button, the title, and the snapshot buttons and year slider below the helix. Its render loop draws only when something changed (`#needsRender`) and not while a chart view covers the helix: set the flag when adding anything that changes the picture.
- `src/helix/ClimateHelix.ts` converts parsed temperature data into colored Three.js geometry.
- `src/charts/ChartScene.ts` is the base of the Charts and Diff views: built on first use, a heading, the shared year slider and the x-axis of their charts; `ChartsScene.ts` and `DiffChartsScene.ts` add their charts (`ChartControl.ts`).
- `src/charts/chartColors.ts` lists the validated categorical chart colors (`--chart-color-1` to `-5` in `src/css/base.css`); each Diff snapshot keeps its own, so there can be no more snapshots than colors.
- `src/data/GISSParser.ts` parses the NASA GISS CSV format used by the app.
- `src/settings/Settings.ts` owns the settings and the loaded snapshots: it restores and saves them, answers the other modules' questions (getters), and dispatches application events when settings change. The values, their defaults and slider limits are in `settingsValues.ts`; `settingsSections.ts` builds the panel's sections and footer. `src/settings/SettingsPanel.ts` is the native settings panel (the gear button, `src/settings/SettingsButton.ts`, opens it; `h` and Escape too): a scrolling body for the settings and a fixed footer for Language, Check for updates, Imprint, Restore defaults and the changelog. The body holds native sections (Data, View, Animation, Screen capture), built from `src/settings/settingsControls.ts` (section, checkbox, range, segmented buttons, color, button; each control's `update()` shows a value that changed elsewhere), and a collapsed Advanced section with the helix's geometry. The icon buttons' styles are in `src/css/toggle-buttons.css`.
- `src/Enums.ts` contains shared event and showcase identifiers.
- `src/helix/HelixGeometry.ts` provides the custom tube geometry used for the helix, with a vertex color per ring.
- `src/settings/PersistentState.ts` keeps the settings and application state across reloads in one Local Storage entry (`climate-helix.state`). Modules read their part on startup and report changes with `persistentState.update()`; "Restore defaults" in the settings clears it and reloads.
- `src/helix/HelixAnimation.ts` holds the creation animation's state (progress, playing, loop); `main.ts` advances it from the render loop and applies it to the helix meshes with `setDrawRange`.
- `src/ui/OverlayPage.ts` is the full-page overlay used by the imprint and the changelog: it closes with the X button at the info button's position or with Escape.
- `src/changelog/Changelog.ts` shows `CHANGELOG.md` when the version label is clicked; `src/changelog/changelogFormat.ts` parses and renders it. The file is loaded on demand (`CHANGELOG.md?raw`), and the build adds the newest entry's commit hash (`changelogCommit` in `vite.config.ts`).
- `src/changelog/WhatsNew.ts` shows the changelog entries since the version used last, once per version (`lastSeenVersion` in the persistent state, kept by Restore defaults). Entries marked "No functional change." are left out.
- `src/i18n/` holds the user-visible text: `en.ts` (English, the source) and `de.ts` (German) are the message catalogs, `index.ts` chooses the language at startup and has `t(key, params)` and the number, temperature and month formatting. New UI text goes into both catalogs, not into the modules; `test/i18n.test.ts` fails when a German key or parameter is missing. The info panels exist per language in `src/i18n/info/` (`info.html`, `info.de.html`, and the same for `chart-info` and `diff-info`); change both. The changelog stays English.
- `src/ui/ScreenCapture.ts`, `src/imprint/Imprint.ts`, `src/ui/InfoButton.ts`, `src/settings/SettingsButton.ts`, and `src/ui/ThemesSwitcher.ts` implement the surrounding UI features.
- `src/css/` holds the styles, one file per area: `base.css` (theme variables for light and dark, the page), `helix.css`, `year-slider.css`, `dataset-controls.css`, `overlays.css`, `info.css`, `pwa.css`, `scenes.css`, `charts.css`, `settings.css`, and `toggle-buttons.css` (imported by `SVGToggleButton.ts`). `style.css` imports them in cascade order and is imported first thing in `main.ts`, not linked from `index.html`: Vite resolves the `@import`s only for CSS imported from code. Color values used by the helix are read from CSS custom properties.
- `public/assets/csv/` contains versioned NASA GISS data files. `src/data/datasets.ts` lists them in `datasetPaths` and fetches them at startup.
- `vite.config.ts` configures the production base path, HTTPS development support, PWA generation, and `APP_VERSION`.

## Data Updates

Keep each data snapshot in its own dated directory under `public/assets/csv/`, with the three expected files: `GLB.Ts+dSST.csv`, `NH.Ts+dSST.csv`, and `SH.Ts+dSST.csv`. Register each snapshot in `datasetPaths` in `src/data/datasets.ts` and set `DEFAULT_DATE` to the default one. The `data-update` skill (`.claude/skills/data-update/`) walks through adding a snapshot. Preserve the GISS file structure: title row, header row, monthly columns, and the trailing aggregate columns.

When changing parsing or data handling, check all three regions and confirm that the displayed title and date range match the selected CSV. Treat source-data changes as user-visible changes and mention the snapshot date in the changelog when appropriate.

## Roadmap

The current priorities and implementation notes are maintained separately in `ROADMAP.md`.

## Implementation Conventions

- Follow the existing TypeScript style and keep changes focused on the owning module.
- Use the existing `Events` mechanism for communication between settings, theme changes, and scene redraws.
- Reuse existing Three.js and PWA dependencies and the settings controls in `src/settings/settingsControls.ts` rather than adding parallel abstractions.
- Keep static assets in `public/` and import them using the project’s existing Vite asset patterns.
- Preserve the PWA base path and offline behavior when modifying `vite.config.ts` or asset URLs.
- Do not edit generated output in `dist/` or `dev-dist/` as a source change; regenerate it with the build when needed.

## Deployment

`deploy.sh` builds the app and force-pushes the contents of `dist/` to the `gh-pages` branch of the configured GitHub repository. Review the generated build and remote configuration before running it. A production build sets the base path to `/climate-helix/`; local development uses `/`.

Dynamic imports of local modules must remain analyzable by Vite. Do not use `@vite-ignore` for modules that need to be bundled for GitHub Pages, and verify that production builds emit their chunks under the `/climate-helix/` base path.

## Change Validation

At minimum:

1. Run `npm run typecheck`, `npm test` and `npm run build`.
2. Run `npm run dev` and open the reported URL.
3. Exercise the affected interaction in both light and dark themes where relevant.
4. Check browser console errors and verify that the PWA/service worker still registers for build-related changes.
