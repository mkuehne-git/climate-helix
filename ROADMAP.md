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

## Delivery Notes

For each roadmap item, add or update the relevant manual checks and update this file when its status or design changes. At minimum, run `npm run build`, exercise affected interactions in both light and dark themes where relevant, check browser console errors, and verify PWA registration for build-related changes.
