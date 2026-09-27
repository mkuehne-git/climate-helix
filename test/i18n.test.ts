import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { Showcase } from '../src/Enums';
import { formatMonthYear, formatNumber, formatTemperature, monthName, regionName, regionTitle, t } from '../src/i18n';
import { en } from '../src/i18n/en';

const CSV_DIR = new URL('../public/assets/csv/', import.meta.url);
const REGION_FILES: Record<Showcase, string> = {
    [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv',
    [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv',
    [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv',
};

describe('t', () => {
    it('fills in parameters and leaves unknown ones visible', () => {
        expect(t('settings.date', { date: '2026-09-16' })).toBe('Date: 2026-09-16');
        expect(t('helix.heading', { title: 'T' })).toBe('T ({date})');
        expect(t('settings.loop')).toBe('Loop');
    });

    it('writes parameters as {name}, without spaces or other characters', () => {
        for (const [key, message] of Object.entries(en.messages)) {
            expect(message, key).not.toMatch(/\{[^}]*[^\w}][^}]*\}/);
        }
    });
});

describe('regions', () => {
    it('shows the names the app used before localization (they are also the stored chart series ids)', () => {
        expect(Object.values(Showcase).map(regionName)).toEqual(['Global', 'Northern HS', 'Southern HS']);
    });

    it('has English titles equal to the titles of every snapshot\'s CSV files', () => {
        const snapshots = readdirSync(CSV_DIR).filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name));
        for (const snapshot of snapshots) {
            for (const showcase of Object.values(Showcase)) {
                const title = readFileSync(new URL(`${snapshot}/${REGION_FILES[showcase]}`, CSV_DIR), 'utf8').split(/\r?\n/)[0].trim();
                expect(regionTitle(showcase), `${snapshot} ${showcase}`).toBe(title);
            }
        }
    });
});

describe('months', () => {
    it('has short and long names for all twelve months', () => {
        expect(en.monthsShort).toHaveLength(12);
        expect(en.monthsLong).toHaveLength(12);
        expect(monthName(0)).toBe('Jan');
        expect(monthName(8, 'long')).toBe('September');
    });

    it('formats month and year', () => {
        expect(formatMonthYear(1990, 1)).toBe('Feb 1990');
        expect(formatMonthYear(2026, 7, 'long')).toBe('August 2026');
    });
});

describe('numbers and temperatures', () => {
    it('formats like the app did before localization', () => {
        expect(formatNumber(1.5, 2)).toBe('1.50');
        expect(formatNumber(-1, 1)).toBe('-1.0');
        expect(formatNumber(12345.6, 1)).toBe('12345.6');
        expect(formatTemperature(1.5, 1)).toBe('+1.5°C');
        expect(formatTemperature(-1, 1)).toBe('-1.0°C');
        expect(formatTemperature(0, 0)).toBe('0°C');
        expect(formatTemperature(0, 2, 'always')).toBe('+0.00°C');
        expect(formatTemperature(0.25, 2, 'always')).toBe('+0.25°C');
    });

    it('shows no sign for a value that rounds to zero', () => {
        expect(formatTemperature(-0.001, 2)).toBe('0.00°C');
    });
});
