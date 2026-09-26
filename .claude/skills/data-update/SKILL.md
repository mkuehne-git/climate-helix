---
name: data-update
description: Add a new NASA GISS temperature data snapshot to Climate Helix - download the three CSV files into a dated folder, register it in Settings.ts, make it the default, and update the tests, README and changelog that name the newest snapshot. Use when asked to update, refresh or add GISS/GISTEMP data or a new snapshot.
---

# Data update

A snapshot is one download of the GISS Surface Temperature Analysis (GISTEMP v4) tables. The app keeps every snapshot so the Diff view can show how NASA revised historical data between them.

## 1. Download

Create `public/assets/csv/YYYY-MM-DD/`, named after today's download date (not the last month with data), and download the three files into it unchanged:

```sh
DIR=public/assets/csv/$(date +%F)
mkdir -p "$DIR"
for f in GLB NH SH; do
  curl -fsSL -o "$DIR/$f.Ts+dSST.csv" "https://data.giss.nasa.gov/gistemp/tabledata_v4/$f.Ts+dSST.csv"
done
```

Check each file before going on: first line is the title (`Land-Ocean: Global Means`, `... Northern Hemispheric Means`, `... Southern Hemispheric Means`), second line the header `Year,Jan,...,Dec,J-D,D-N,DJF,MAM,JJA,SON`, data from 1880, and the current year's missing months as `***`. Do not edit the files; the parser relies on this exact structure.

If the newest existing snapshot is from the same year, ask the project owner whether to replace it or keep both: the dataset buttons show only the year, so two snapshots from one year get identical buttons.

## 2. Register the snapshot

In `src/Settings.ts`:

- Add an entry to `datasetPaths` (newest first), with the same three file names as the other entries.
- Set `DEFAULT_DATE` to the new folder name, so the app opens on the newest snapshot. Changing it also resets the snapshot that returning users had stored (see `storedDate` in `src/PersistentState.ts`), so everyone sees the new data.

Nothing else in the app lists snapshots: the dataset buttons, the settings panel's Date folder, the Charts and Diff views and the year ranges all derive from `datasetPaths`.

## 3. Update what names the newest snapshot

Find the places with the previous newest date and its last month, e.g.:

```sh
grep -rn --exclude-dir={node_modules,dist,dev-dist,test-results} --exclude={package-lock.json,CHANGELOG.md} -E "OLD-FOLDER-DATE|OLD-MONTH OLD-YEAR" .
```

Expect at least:

- `e2e/app.spec.ts` and `e2e/year-range.spec.ts`: the expected default heading (`Land-Ocean: Global Means (Month YYYY)`), the dataset button years and the slider's last year. The unit tests in `test/` pick up new snapshot folders on their own; only `test/ClimateHelix.test.ts` reads a fixed snapshot, which can stay.
- `README.md`: the list of bundled snapshots and the stated time range. Name each snapshot by the last month with data, consistently.

The end date shown in the app comes from the data (`GISSParser.lastValidDate`), not from a constant.

## 4. Validate

Use the `release` skill's validation, including `npm run test:e2e`. Also check in the app:

- all three regions show the new snapshot's title and end date (`CLAUDE.md`, "Data Updates");
- the Diff view shows the new snapshot as a line against the older ones, and as a baseline button;
- the Charts view shows a chart for it.

## 5. Changelog

Data changes are user-visible: a patch version, with the snapshot's download date and the last month it contains, for example "Add the GISS snapshot of 2027-03-14 (data through February 2027) and make it the default."
