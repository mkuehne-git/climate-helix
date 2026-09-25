# Roadmap

This file describes the planned improvements to Climate Helix. Work through the priorities in order and keep each change focused on one user-visible capability.

## Priorities

1. **Creation animation.** Animate building the helix, only after the redraw lifecycle is stable. Prefer an explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Completed

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

- Create the ClimateHelix

Add this only after the dataset model and redraw lifecycle are stable.

**Not planned: morphing between datasets** (decided in v0.9.9). Most revisions between snapshots fluctuate more or less randomly by about ±0.01 °C, as the Diff charts show. A morph animation would hardly be visible on the helix and would not add insight; the Diff view already shows these revisions precisely. Prefer explicit animation state in the scene controller so animation does not race with settings events or theme changes.

## Delivery Notes

For each roadmap item, add or update the relevant manual checks and update this file when its status or design changes. At minimum, run `npm run build`, exercise affected interactions in both light and dark themes where relevant, check browser console errors, and verify PWA registration for build-related changes.
