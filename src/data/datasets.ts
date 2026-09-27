import { Showcase } from '../Enums';
import { GISSParser } from './GISSParser';

/** A data snapshot. `endMonth`: the last month with data, 0 (January) to 11. */
export type Dataset = { endMonth?: { year: number, month: number }, csv: Record<Showcase, string>, firstYear: number, lastYear: number };

/**
 * The bundled data snapshots, newest first: one folder per retrieval under
 * public/assets/csv/ (see the data-update skill).
 */
const datasetPaths: Record<string, { files: Record<Showcase, string> }> = {
    '2026-09-16': { files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
    '2024-10-22': { files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
    '2023-09-03': { files: { [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv', [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv', [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv' } },
};

/** The snapshot the app opens on: the newest. Changing it also resets the snapshot returning users had stored. */
export const DEFAULT_DATE = '2026-09-16';

/** Fetches every snapshot's three CSV files. */
export async function loadDatasets(): Promise<Record<string, Dataset>> {
    const entries = await Promise.all(Object.entries(datasetPaths).map(async ([date, definition]) => {
        const csvEntries = await Promise.all(Object.entries(definition.files).map(async ([showcase, file]) => {
            const url = `${import.meta.env.BASE_URL}assets/csv/${date}/${file}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Unable to load dataset: ${url}`);
            return [showcase, await response.text()] as const;
        }));
        const csv = Object.fromEntries(csvEntries) as Record<Showcase, string>;
        const years = Object.values(csv).flatMap((value) => value.split(/\r?\n/)
            .slice(2)
            .map((row) => row.split(',')[0].trim())
            .filter((year) => /^\d{4}$/.test(year))
            .map(Number));
        const endMonth = new GISSParser(csv[Showcase.GLOBAL]).lastValidMonth;
        return [date, { endMonth, csv, firstYear: Math.min(...years), lastYear: Math.max(...years) }] as const;
    }));
    return Object.fromEntries(entries);
}
