---
name: release
description: Prepare a Climate Helix version for commit - pick the version bump, update package.json and CHANGELOG.md, run the unit tests, build and (for UI changes) the end-to-end tests, check the working tree, then ask the project owner before committing. Use whenever work is ready to be committed, or when asked to "release", "bump the version" or "commit".
---

# Release

Every commit in this repository is a release: `CLAUDE.md` requires a version bump and a changelog entry before *every* commit, including test-only and docs-only commits, and the project owner must approve each commit.

## 1. Pick the version

Read the current version from `package.json` and the top entry of `CHANGELOG.md`.

- **Patch (`z`)**: fixes, small improvements, tests, docs, refactors without behavior change.
- **Minor (`y`)**: new user-visible features (a new control, view or option).
- **Major (`x`)**: never on your own - only the project owner decides.

If the previous version was never committed (it is still in the working tree), extend its changelog entry instead of adding a new version, and do not add a commit to it.

## 2. Update version and changelog

- `package.json`: the `"version"` field only. Do not reformat the file.
- `CHANGELOG.md`: a new `## vX.Y.Z · YYYY-MM-DD` section at the top (today's date), one bullet per change. The app shows this file in its changelog view, so keep it user-facing.
- Add the commit to the previous entry, which is the version committed at `HEAD`: `## vA.B.C · YYYY-MM-DD · [abc1234](https://github.com/mkuehne-git/climate-helix/commit/abc1234)`, with `git rev-parse --short=7 HEAD`. A commit cannot contain its own hash, so the new entry stays without one; the build adds it to the deployed app's copy (`changelogCommit` in `vite.config.ts`). `test/changelogFormat.test.ts` checks the format. Write for users of the app: what changed and why it matters, not which functions moved. Name fixed bugs by their symptom. Mention a new data snapshot by its date. Say "No functional change." for test, docs and refactor-only versions.

## 3. Validate

Run in this order and report failures with their output - do not commit around them:

1. `npm test` (Vitest unit and component tests).
2. `npm run build`. The two pre-existing warnings are expected: the `configLoader: 'native'` notice about `vite.config.ts`, and Node's `ExperimentalWarning`.
3. `npm run test:e2e` when the change touches the UI, `main.ts`, `Settings.ts`, a scene, CSS, the service worker or `vite.config.ts`. It builds with `VITE_E2E=true` (lighter helix mesh), so **run `npm run build` again afterwards** - otherwise `dist/` holds the test build, and `deploy.sh` could publish it if it ever stops rebuilding.
4. For visible UI changes, retake the README screenshots (the `screenshots` skill) if they show the changed part.
5. For visual changes, say what still needs a manual look in a real browser (light and dark theme, phone width, Firefox), as `CLAUDE.md` asks.

## 4. Check the working tree

- `git status --short`: every changed and new file must belong to this change. Watch for leftovers such as `test-results/`, scratch files, or a stray `package-lock.json` change.
- Never stage `src/imprint-gen.js` (private, gitignored) or `dist/`.
- If a dependency was added: check its `engines` field against the Node version in `.nvmrc` (see "Node.js version" in `CLAUDE.md`), and check that the lockfile only gained the new packages.

## 5. Ask, then commit

Summarize what the commit contains and ask the project owner for approval. Only after an explicit yes:

- Stage the files by name (no `git add -A`).
- Message: `type: summary (vX.Y.Z)` with `type` one of `feat`, `fix`, `test`, `docs`, `refactor`, `chore`; then a body explaining what and why; then the co-author trailer from the current session's instructions.
- Do not push, tag or deploy unless asked. `deploy.sh` force-pushes to GitHub Pages.

## 6. GitHub release (major and minor versions only)

A GitHub release is a page on GitHub attached to a git tag, with release notes and source archives. It deploys nothing: the site comes from the `gh-pages` branch that `deploy.sh` pushes. Every commit here is a version, so releases are made only for major and minor versions (`x.0.0`, `x.y.0`), never for patches.

Creating a release is public, so offer it after the commit and ask the project owner each time. Only after an explicit yes, in this order:

1. **Push** `main` (`git push`). The changelog links to commits on GitHub, and those links return 404 until the commits are pushed.
2. **Deploy**, if the owner wants the release to match the live site: `deploy.sh`, as described in `CLAUDE.md` - only when asked.
3. **Release notes**: the version's `CHANGELOG.md` entry without its heading, written to a scratchpad file.
4. **Create** the tag and the release in one step, on the pushed commit:
   `gh release create vX.Y.Z --target main --title "Climate Helix X.Y.Z" --notes-file <notes>`
   This creates the tag `vX.Y.Z` on GitHub; run `git fetch --tags` afterwards to have it locally.
5. Report the release URL that `gh` prints.

If `gh` is not installed or not logged in (`gh auth status`), say so and give the owner the command instead of working around it.
