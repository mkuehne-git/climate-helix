# Climate Helix

## Overview

Climate Helix is a Vite-powered TypeScript and Three.js web app that renders NASA GISS temperature anomalies as an interactive 3D helix. It is also installable as a PWA and is deployed to GitHub Pages at `/climate-helix/`.

## Development Commands

Run these commands from the repository root:

```sh
npm install       # install dependencies
npm run dev       # start the Vite development server
npm run build     # create a production build in dist/
npm run serve     # preview the production build
```

There is currently no automated test or lint script. After changes, run `npm run build` and manually verify the app in a browser. Check the helix, region selector, theme switcher, settings controls, info/imprint dialogs, and screen capture behavior when those areas are affected.

## Versioning

The app follows semantic versioning (`x.y.z`). Fixes and small improvements increase `z`; new features increase `y`. Increases to `x` are decided by the project owner.

Always update the version number before creating a commit. Record the new version in `package.json` and add a corresponding entry to `CHANGELOG.md`.

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
- `public/assets/csv/` contains versioned NASA GISS data files. `Settings.ts` imports the selected dataset directly from this directory.
- `vite.config.ts` configures the production base path, HTTPS development support, PWA generation, and `APP_VERSION`.

## Data Updates

Keep each data snapshot in its own dated directory under `public/assets/csv/`, with the three expected files: `GLB.Ts+dSST.csv`, `NH.Ts+dSST.csv`, and `SH.Ts+dSST.csv`. Update the imports in `src/Settings.ts` when changing the active snapshot. Preserve the GISS file structure: title row, header row, monthly columns, and the trailing aggregate columns.

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

1. Run `npm run build`.
2. Run `npm run dev` and open the reported URL.
3. Exercise the affected interaction in both light and dark themes where relevant.
4. Check browser console errors and verify that the PWA/service worker still registers for build-related changes.
