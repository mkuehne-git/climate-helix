// @vitest-environment happy-dom
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { Showcase } from '../src/Enums';
import { formatMonthYear, formatNumber, formatTemperature, language, monthName, regionName, regionTitle, resolveLanguage, setLanguage, t } from '../src/i18n';
import { de } from '../src/i18n/de';
import { en } from '../src/i18n/en';

const CSV_DIR = join(__dirname, '../public/assets/csv');
const REGION_FILES: Record<Showcase, string> = {
    [Showcase.GLOBAL]: 'GLB.Ts+dSST.csv',
    [Showcase.NORTHERN_HEMISPHERE]: 'NH.Ts+dSST.csv',
    [Showcase.SOUTHERN_HEMISPHERE]: 'SH.Ts+dSST.csv',
};

describe('t', () => {
    it('fills in parameters and leaves unknown ones visible', () => {
        expect(t('charts.title', { date: '2026-09-16' })).toBe('2026-09-16 snapshot');
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
                const title = readFileSync(join(CSV_DIR, snapshot, REGION_FILES[showcase]), 'utf8').split(/\r?\n/)[0].trim();
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

/** The `{name}` parameters of a message, sorted. */
const params = (message: string) => [...message.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort();

describe.each([['de', de]] as const)('the %s catalog', (_, catalog) => {
    it('translates exactly the English keys (the build does not type-check)', () => {
        expect(Object.keys(catalog.messages).sort()).toEqual(Object.keys(en.messages).sort());
    });

    it('uses the same parameters as English in every message', () => {
        for (const [key, message] of Object.entries(en.messages)) {
            expect(params(catalog.messages[key]), key).toEqual(params(message));
        }
    });

    it('leaves no message empty that English fills', () => {
        for (const [key, message] of Object.entries(en.messages)) {
            if (message !== '') {
                expect(catalog.messages[key], key).not.toBe('');
            }
        }
    });

    it('names all twelve months', () => {
        expect(catalog.monthsShort).toHaveLength(12);
        expect(catalog.monthsLong).toHaveLength(12);
    });
});

describe('German', () => {
    afterEach(() => setLanguage('en'));

    it('formats numbers, temperatures and months the German way', () => {
        setLanguage('de');
        expect(language()).toBe('de');
        expect(formatTemperature(1.5, 2)).toBe('+1,50 °C');
        expect(formatTemperature(-1, 1)).toBe('-1,0 °C');
        expect(formatNumber(12345.6, 1)).toBe('12345,6');
        expect(formatMonthYear(2026, 7, 'long')).toBe('August 2026');
        expect(formatMonthYear(1990, 2)).toBe('Mär 1990');
    });

    it('translates titles and region names', () => {
        setLanguage('de');
        expect(t('helix.heading', { title: regionTitle(Showcase.NORTHERN_HEMISPHERE), date: 'März 2026' }))
            .toBe('Land und Ozean: Nordhalbkugel (März 2026)');
        expect(regionName(Showcase.SOUTHERN_HEMISPHERE)).toBe('Südhalbkugel');
    });

    it('sets the page language', () => {
        setLanguage('de');
        expect(document.documentElement.lang).toBe('de');
    });
});

describe('resolveLanguage', () => {
    it('prefers the chosen language', () => {
        expect(resolveLanguage('en', ['de-DE'])).toBe('en');
        expect(resolveLanguage('de', [])).toBe('de');
    });

    it('otherwise takes the first browser language the app has, by its primary tag', () => {
        expect(resolveLanguage(undefined, ['de-AT', 'en'])).toBe('de');
        expect(resolveLanguage(undefined, ['fr-FR', 'DE', 'en'])).toBe('de');
        expect(resolveLanguage(undefined, ['en-GB', 'de'])).toBe('en');
    });

    it('falls back to English', () => {
        expect(resolveLanguage(undefined, ['fr', 'es'])).toBe('en');
        expect(resolveLanguage(undefined, [])).toBe('en');
    });
});
