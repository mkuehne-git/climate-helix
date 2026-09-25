# Testing

This file describes the planned automated tests for Climate Helix. Work through the phases in order; each phase is its own commit with a patch version bump (tests are not user-visible). Once a phase is done, mark it as such here and update the "Change Validation" section of `CLAUDE.md`.

## Tooling

| Layer | Tool | Runs |
| --- | --- | --- |
| Unit and component tests | [Vitest](https://vitest.dev/), with [happy-dom](https://github.com/capricorn86/happy-dom) for DOM tests | Locally and in CI |
| End-to-end tests | [Playwright](https://playwright.dev/) (Chromium and Firefox) against `vite preview` | Locally only, for now |

Vitest reuses `vite.config.ts`, so `?raw` imports, TypeScript and asset handling work in tests the same way as in the app. Firefox is part of the end-to-end runs because it is the owner's main browser and has shown rendering differences before.

Scripts:

```sh
npm test            # Vitest, single run
npm run test:watch  # Vitest in watch mode
npm run test:e2e    # Playwright against a production build (vite preview) - planned, phase 3
```

Vitest runs the files in `test/` (`test.include` in `vite.config.ts`); the end-to-end tests will live in `e2e/`. Vitest 5 needs Node 22.12+, 24 or 26+ (it also runs on Node 23 locally), so the CI workflow in phase 4 must not keep the Node 20 used by the dependency-check workflow.

`src/imprint-gen.js` is private and gitignored. Tests that load `Imprint.ts` mock it; CI keeps writing the same stub as the dependency-check workflow.

## Phase 1: Pure logic (done, v0.9.2)

No DOM needed. Two small refactors make the logic testable without changing behavior; the tests in this phase prove that.

1. **`GISSParser`**, against the real CSV snapshots in `public/assets/csv/`: every snapshot and every region (Global, NH, SH).
   - Title, first and last year, and `lastValidDate` match the file.
   - Missing values (`***`) are skipped, not read as numbers.
   - Monthly `x` values run from January = `.0` to December = `11/12`.
   - The annual series skips incomplete years.

   This automates the `CLAUDE.md` rule to check all three regions after data or parser changes, and catches a broken new snapshot.

2. **Chart math.** Refactor: move `niceTicks`, `monthTicks`, `movingAverage`, `decimalsForStep` and `formatMonthYear` from `ChartControl.ts` into an exported `chartMath.ts`.
   - Tick steps and labels for wide and narrow ranges.
   - Month-aligned ticks when zoomed in below about one tick per year (regression for v0.8.4).
   - Moving average at the series edges.

3. **Year range.** Refactor: extract the clamp, request and reset logic from the `Settings` singleton (which also builds lil-gui and fetches CSVs) into a small pure `YearRange` class that `Settings` delegates to.
   - Start never exceeds end, and both stay within the dataset's years.
   - Switching to a shorter dataset and back restores the wider range (v0.9.0).
   - A reset from a chart view resets the shared range, and the helix picks it up when it becomes active (regression for a bug found during v0.9.0).
   - A range chosen in a chart view is clamped for the helix without being lost.

## Phase 2: Components (done, v0.9.3)

Vitest with happy-dom (`// @vitest-environment happy-dom` at the top of a test file).

- **`YearRangeSlider`**
  - Labels show the start and end year at the right position.
  - `input` events call `setStart` / `setEnd`.
  - The reset button calls `reset` and is disabled at full range.
- **`ChartControl`**
  - `setXDomain` limits the x-axis ticks to the zoomed range.
  - The y-axis fits the years in view and, with auto-scale, only the checked series.
  - Legend toggles hide and show series.
- **`Imprint`** (mock `imprint-gen` and `html2canvas`)
  - The close button exists as soon as the imprint opens, before rendering finishes (regression for v0.8.6).
  - The close button and Escape both close it.
  - A burst of resize events causes a single redraw.
- **`ClimateHelix`** geometry. No refactor needed: the helix already takes its colors from the settings object, so the test passes a fake one and mocks the `Settings` module (which reads CSS custom properties on import).
  - The first selected point is at z = 0 and the last at the full configured height, for any selected range (regression for v0.8.6).
  - Tube radius depends on the dataset's year count, not the selected range.

## Phase 3: End-to-end

Playwright, run locally against `npm run build` + `vite preview`. The preview server uses the self-signed certificate, so the tests ignore HTTPS errors.

- The app loads without console errors, and the helix title matches the selected dataset and region.
- Dataset buttons and the region selector redraw the helix; the info panel's end date matches.
- Switching between Helix, Charts and Diff keeps the year range; the reset button works in each view.
- The imprint opens from the settings panel; the fixed X closes it at desktop and phone size, and after a burst of window resizes.
- The theme switcher changes the theme, and the info panel opens and closes.
- The service worker registers in the production build.

No screenshot comparisons of the helix: WebGL output varies too much between machines. Screenshot checks for the SVG charts can be added later if needed.

## Phase 4: CI

Add a workflow that runs on every push and pull request:

1. `npm ci` (Node 22 or 24)
2. Stub `src/imprint-gen.js`
3. `npm test`
4. `npm run build`

Playwright stays local for now. Adding it to CI later means installing only Chromium and Firefox (`npx playwright install --with-deps chromium firefox`), at roughly 1 to 2 extra minutes per run.
