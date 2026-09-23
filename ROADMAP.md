# Roadmap

This file describes the planned improvements to Climate Helix. Work through the priorities in order and keep each change focused on one user-visible capability.

## Priorities

1. **Animations.** Add creation and dataset-morph animations only after the redraw lifecycle is stable. Prefer an explicit animation state in the scene controller so animation does not race with settings events or theme changes.
2. **Automated deployment.** Move the commands in `deploy.sh` into a GitHub Actions workflow that installs dependencies, builds with the production base path, and publishes `dist/` to GitHub Pages. Keep deployment credentials and repository settings in GitHub configuration rather than source files. Retain `deploy.sh` until the workflow is proven.

## Completed

### Charts (v0.7.0)

Helix, Charts, and Diff are equal peer scenes, reachable via icon-buttons at the lower-left; the info button's content and the helix-only controls (snapshot/year picker) adapt to whichever scene is active.

- **Charts** scene (`src/ChartsScene.ts`): one time-series chart per dataset snapshot, all three regions (Global, Northern HS, Southern HS) overlaid, annual-mean resolution.
- **Diff** scene (`src/DiffChartsScene.ts`): a baseline-snapshot picker (year-only buttons, like the Helix dataset selector) and a year range slider that zooms the x-axis of every chart, then one chart per region showing how each other snapshot differs from that baseline - monthly resolution, so per-month revisions aren't averaged away like they would be in an annual mean. Each chart has a per-instance auto-scale toggle (rescales the y-axis to whichever legend series are checked) and a moving-average toggle (a centered 12-month trend line that dims the raw noisy series).
- **ChartControl** (`src/ChartControl.ts`): the reusable, dependency-free SVG line chart - gridlines, legend checkboxes to show/hide series, a hover crosshair/tooltip, and a viewBox that tracks the container's real pixel width via `ResizeObserver` so wider charts show more axis detail instead of just scaling up.

## Infrastructure

- I am using a simple `deploy.sh` to deploy the app to Github pages. Perhaps there is a better way to do this
  with Github actions.

Deployment should move the commands in `deploy.sh` into GitHub Actions after the workflow can install dependencies, build with the production base path, and publish `dist/` to GitHub Pages. Keep `deploy.sh` until the replacement is proven, and keep credentials and repository settings in GitHub configuration.

### Animations

- Create the ClimateHelix
- Morph between the different datasets
  - The z-axis (years) already scales against the longest available dataset's span rather than the active dataset's own span (`Settings.globalFirstYear`/`globalLastYear`, `ClimateHelix.yearHeight`, since v0.6.5), so a given year lands at the same z position no matter which dataset is active. What morphing still needs: each dataset's mesh is centered on its own centroid (`createMesh()`'s `geometry.translate(-cog...)`), so two datasets' meshes are each shifted by a different constant offset even though their per-year spacing now matches. Morphing needs a shared centering reference instead, so a shared year has zero positional jump between datasets.

Add these only after the dataset model and redraw lifecycle are stable. Prefer explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Delivery Notes

For each roadmap item, add or update the relevant manual checks and update this file when its status or design changes. At minimum, run `npm run build`, exercise affected interactions in both light and dark themes where relevant, check browser console errors, and verify PWA registration for build-related changes.
