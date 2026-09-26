---
name: screenshots
description: Retake the Climate Helix README screenshots in src/images/ with Playwright (npm run screenshots), review them and update the README if a view was added or renamed. Use after visible UI changes, before a major or minor release, or when asked to update, refresh or retake screenshots.
---

# Screenshots

The README shows five screenshots in `src/images/`. `npm run screenshots` retakes them all with Playwright (`playwright.screenshots.config.ts`, specs in `screenshots/readme.spec.ts`), always in the light theme.

| Image | Shows | Viewport |
| --- | --- | --- |
| `climate-helix.png` | Helix view, default settings | 390 x 844 |
| `climate-helix-legend.png` | Helix with the settings panel open at View > Legend | 1200 x 700 |
| `climate-helix-charts.png` | Charts view | 390 x 844 |
| `climate-helix-diff.png` | Diff view | 390 x 844 |
| `climate-helix-whats-new.png` | What's new, as seen when updating from v0.11.1 | 390 x 844 |

## 1. When

- A visible change to a view, control or dialog that a screenshot shows.
- A version bump that the screenshots should show: the version label is in most images. Retake them **after** updating `package.json`.
- Not for every patch release: an outdated version label alone is no reason.

## 2. Take

1. Update `package.json` first if the version changes in this commit.
2. `npm run screenshots`. It builds a production build (full helix mesh, unlike the e2e tests' `VITE_E2E` build), serves it on port 4181 and writes the images over the committed ones. The build leaves `dist/` as a normal production build.
3. Headless Chromium renders WebGL in software; a run takes about half a minute.

## 3. Review

Open every changed image (the Read tool shows images) and check:

- No tooltip, hover highlight, animation frame or half-drawn chart.
- What's new shows the current version on top.
- The version label shows the new version.

`git status` shows which images changed. Revert images that changed only by rendering noise, unless the version label differs.

## 4. Adjust

- **A new view or dialog to show**: add a test to `screenshots/readme.spec.ts`, reference the image in `README.md`, and add it to the table above.
- **A step fails** (a selector changed): fix the spec with the same selectors as the e2e tests in `e2e/app.ts`.
- **Dark theme screenshots** are not taken; the owner chose the light theme.

Commit the images with the change, following the `release` skill.
