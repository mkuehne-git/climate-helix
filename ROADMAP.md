# Roadmap

This file describes the planned improvements to Climate Helix. Work through the priorities in order and keep each change focused on one user-visible capability.

## Priorities

1. **Automated deployment.** Move the commands in `deploy.sh` into a GitHub Actions workflow that installs dependencies, builds with the production base path, and publishes `dist/` to GitHub Pages. Keep deployment credentials and repository settings in GitHub configuration rather than source files. Retain `deploy.sh` until the workflow is proven.
2. **Configurable axes.** Add axes as a scene/UI feature, reusing the existing settings and theme CSS variables. Keep axis visibility independent from helix geometry settings.
3. **Animations.** Add creation and dataset-morph animations only after the redraw lifecycle is stable. Prefer an explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Infrastructure

- I am using a simple `deploy.sh` to deploy the app to Github pages. Perhaps there is a better way to do this
  with Github actions.

Deployment should move the commands in `deploy.sh` into GitHub Actions after the workflow can install dependencies, build with the production base path, and publish `dist/` to GitHub Pages. Keep `deploy.sh` until the replacement is proven, and keep credentials and repository settings in GitHub configuration.

## UI

Add axes as a scene/UI feature after dataset selection, reusing the existing settings and theme CSS variables. Axis visibility should remain independent from helix geometry settings.

Add a horizontal slider below the title and above the helix. The slider should be a simple line with a two movable knobs. The left knob shall indicate the start year of the helix rendering and the right knob the end year. The actual years shall be written underneath each knob. A knob-value change shall trigger a live update of the helix.

### Animations

- Create the ClimateHelix
- Morph between the different datasets

Add these only after the dataset model and redraw lifecycle are stable. Prefer explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Delivery Notes

For each roadmap item, add or update the relevant manual checks and update this file when its status or design changes. At minimum, run `npm run build`, exercise affected interactions in both light and dark themes where relevant, check browser console errors, and verify PWA registration for build-related changes.
