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
npm run test:watch # run the unit tests in watch mode
npm run test:e2e  # build and run the Playwright end-to-end tests (Chromium, Firefox)
```

The default development server uses HTTPS with a local self-signed certificate. If the browser cannot trust that certificate, use `npm run dev:http` and open `http://127.0.0.1:5173/` instead.

### Node.js version

Node.js needs updating to a stable LTS release; this is easy to forget. The local setup still runs Node 23 (an odd-numbered, short-lived release that is out of support); the CI workflow uses Node 24. Vitest 5 and the current npm already require Node 22.12+, 24 or 26+, and npm 11.4.1 on Node 23 crashed while installing Vitest (it was installed via `npx npm@latest` instead).

- Use the current Active LTS (Node 24 as of September 2026) locally, via nvm, and in `node-version` of every workflow in `.github/workflows/`. Keep them the same.
- When adding or upgrading a dev dependency, check its `engines` field against that version.
- Revisit this when a newer LTS starts (Node 26 in October 2026) and when the used one reaches end of life.

Unit tests live in `test/` and run with `npm test`; the test plan and its remaining phases are described in `TESTING.md`. There is no lint script. End-to-end tests live in `e2e/` and run locally with `npm run test:e2e` (not in CI); run them after UI changes. After changes, run `npm test` and `npm run build`, and manually verify the app in a browser. Check the helix, region selector, theme switcher, settings controls, info/imprint dialogs, and screen capture behavior when those areas are affected.

## Versioning

The app follows semantic versioning (`x.y.z`). Fixes and small improvements increase `z`; new features increase `y`. Increases to `x` are decided by the project owner.

Always update the version number before creating a commit. Record the new version in `package.json` and add a corresponding entry to `CHANGELOG.md`. The `release` skill (`.claude/skills/release/`) covers the full routine: version, changelog, validation and the approval before committing.

## Git Workflow

Always ask the project owner for approval before creating a commit. Do not commit changes without explicit approval.

## Source Layout

- `src/main.ts` initializes the DOM, Three.js scene, camera, renderer, controls, event listeners, and animation loop.
- `src/ClimateHelix.ts` converts parsed temperature data into colored Three.js geometry.
- `src/GISSParser.ts` parses the NASA GISS CSV format used by the app.
- `src/Settings.ts` owns the lil-gui controls and dispatches application events when settings change.
- `src/Enums.ts` contains shared event and showcase identifiers.
- `src/HelixGeometry.js` provides the custom tube geometry used for the helix.
- `src/ScreenCapture.ts`, `src/Imprint.ts`, `src/InfoButton.ts`, `src/SettingsButton.ts`, and `src/ThemesSwitcher.ts` implement the surrounding UI features.
- `src/css/style.css` contains theme variables and application styling; color values used by the helix are read from CSS custom properties.
- `public/assets/csv/` contains versioned NASA GISS data files. `Settings.ts` lists them in `datasetPaths` and fetches them at startup.
- `vite.config.ts` configures the production base path, HTTPS development support, PWA generation, and `APP_VERSION`.

## Data Updates

Keep each data snapshot in its own dated directory under `public/assets/csv/`, with the three expected files: `GLB.Ts+dSST.csv`, `NH.Ts+dSST.csv`, and `SH.Ts+dSST.csv`. Register each snapshot in `datasetPaths` in `src/Settings.ts` and set `SETTINGS.date` to the default one. The `data-update` skill (`.claude/skills/data-update/`) walks through adding a snapshot. Preserve the GISS file structure: title row, header row, monthly columns, and the trailing aggregate columns.

When changing parsing or data handling, check all three regions and confirm that the displayed title and date range match the selected CSV. Treat source-data changes as user-visible changes and mention the snapshot date in the changelog when appropriate.

## Roadmap

The current priorities and implementation notes are maintained separately in `ROADMAP.md`.

## Implementation Conventions

- Follow the existing TypeScript style and keep changes focused on the owning module.
- Use the existing `Events` mechanism for communication between settings, theme changes, and scene redraws.
- Reuse existing Three.js, lil-gui, and PWA dependencies rather than adding parallel abstractions.
- Keep static assets in `public/` and import them using the project’s existing Vite asset patterns.
- Preserve the PWA base path and offline behavior when modifying `vite.config.ts` or asset URLs.
- Do not edit generated output in `dist/` or `dev-dist/` as a source change; regenerate it with the build when needed.

## Deployment

`deploy.sh` builds the app and force-pushes the contents of `dist/` to the `gh-pages` branch of the configured GitHub repository. Review the generated build and remote configuration before running it. A production build sets the base path to `/climate-helix/`; local development uses `/`.

Dynamic imports of local modules must remain analyzable by Vite. Do not use `@vite-ignore` for modules that need to be bundled for GitHub Pages, and verify that production builds emit their chunks under the `/climate-helix/` base path.

## Change Validation

At minimum:

1. Run `npm test` and `npm run build`.
2. Run `npm run dev` and open the reported URL.
3. Exercise the affected interaction in both light and dark themes where relevant.
4. Check browser console errors and verify that the PWA/service worker still registers for build-related changes.
