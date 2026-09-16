# Roadmap

This file describes the planned improvements to Climate Helix. Work through the priorities in order and keep each change focused on one user-visible capability.

## Priorities

1. **Dataset selection (implemented).** `src/Settings.ts` now uses a registry for the three dated snapshots and exposes a top-level `Date` control. Region selection remains separate, and both controls use the existing `Events` redraw flow. This provides the data model needed for later comparisons and morphing.
2. **PWA update prompt.** Build on the existing `vite-plugin-pwa` registration and auto-update behavior. Detect a waiting service worker, present an explicit update decision to the user, and reload only after confirmation. Test first-install, update-available, offline, and declined-update states.
3. **Automated deployment.** Move the commands in `deploy.sh` into a GitHub Actions workflow that installs dependencies, builds with the production base path, and publishes `dist/` to GitHub Pages. Keep deployment credentials and repository settings in GitHub configuration rather than source files. Retain `deploy.sh` until the workflow is proven.
4. **Dependency maintenance (in progress).** Configure Dependabot or an equivalent scheduled update workflow, with build validation required for dependency pull requests. Review major Vite, Three.js, and PWA-plugin upgrades for behavioral changes instead of blindly accepting them. This repo now includes a weekly npm Dependabot policy and a GitHub Actions build gate for dependency-only pull requests.
5. **Configurable axes.** Add axes as a scene/UI feature after dataset selection, reusing the existing settings and theme CSS variables. Keep axis visibility independent from helix geometry settings.
6. **Animations.** Add creation and dataset-morph animations only after the dataset model and redraw lifecycle are stable. Prefer an explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Infrastructure

- I want to have an automated way to update the packages to their latest save version.
  I am getting Dependabot emails on a weekly base. Most of the time they are related to `vite`.
  Perhaps it is possible to create skill that let's Claude do that.
  A repo-level Dependabot schedule for npm updates is now configured, with grouped runtime and tooling updates and a CI build gate for dependency pull requests.
- I am using a simple `deploy.sh` to deploy the app to Github pages. Perhaps there is a better way to do this
  with Github actions.
- The app is a PWA. Upon startup the app shall check if a new version is available on Github pages, ask the user to update and do it
  according to the answer.

The PWA update work should use the existing `vite-plugin-pwa` registration and auto-update configuration. An update prompt should appear only when a new service worker is waiting, and the app should reload only after the user confirms. Validate first-install, update-available, offline, and declined-update states.

Deployment should move the commands in `deploy.sh` into GitHub Actions after the workflow can install dependencies, build with the production base path, and publish `dist/` to GitHub Pages. Keep `deploy.sh` until the replacement is proven, and keep credentials and repository settings in GitHub configuration.

Dependency updates should use Dependabot or an equivalent scheduled workflow, with build validation required for dependency pull requests. Review major Vite, Three.js, and PWA-plugin upgrades for behavioral changes.

## Showing new data

- I have downloaded the newest climate data, but I have to have change `Settings.ts` manually,
  pointing to the folder with the data. It shall be possible to select the data set being displayed.

Keep each snapshot in its own dated directory under `public/assets/csv/`, with `GLB.Ts+dSST.csv`, `NH.Ts+dSST.csv`, and `SH.Ts+dSST.csv`. Preserve the GISS title row, header row, monthly columns, and trailing aggregate columns. When adding selection, validate that all three files exist and keep dataset-version selection separate from region selection. Check the displayed title and date range for all three regions.

## UI

- I want to show x/y axis. Showing axis shall be configurable.

Add axes as a scene/UI feature after dataset selection, reusing the existing settings and theme CSS variables. Axis visibility should remain independent from helix geometry settings.

### Animations

- Create the ClimateHelix
- Morph between the different datasets

Add these only after the dataset model and redraw lifecycle are stable. Prefer explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Delivery Notes

For each roadmap item, add or update the relevant manual checks and update this file when its status or design changes. At minimum, run `npm run build`, exercise affected interactions in both light and dark themes where relevant, check browser console errors, and verify PWA registration for build-related changes.
