import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { GISSParser } from '../src/GISSParser';

const CSV_DIR = join(__dirname, '..', 'public', 'assets', 'csv');
const REGIONS = {
    'GLB.Ts+dSST.csv': 'Land-Ocean: Global Means',
    'NH.Ts+dSST.csv': 'Land-Ocean: Northern Hemispheric Means',
    'SH.Ts+dSST.csv': 'Land-Ocean: Southern Hemispheric Means',
};
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const snapshots = readdirSync(CSV_DIR).filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name)).sort();

describe('GISSParser with the bundled snapshots', () => {
    it('finds the snapshot directories', () => {
        expect(snapshots.length).toBeGreaterThan(0);
    });

    describe.each(snapshots)('snapshot %s', (snapshot) => {
        it('has exactly the three region files', () => {
            expect(readdirSync(join(CSV_DIR, snapshot)).sort()).toEqual(Object.keys(REGIONS).sort());
        });

        describe.each(Object.entries(REGIONS))('%s', (file, title) => {
            const parser = new GISSParser(readFileSync(join(CSV_DIR, snapshot, file), 'utf8'));
            const lastRowYear = parseInt(parser.rows[parser.rows.length - 1].split(',')[0], 10);

            it('reads the title and header rows', () => {
                expect(parser.title).toBe(title);
                expect(parser.header.slice(0, 13)).toEqual(['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
                expect(parser.header).toContain('J-D');
            });

            it('starts in 1880 and ends with the snapshot year', () => {
                expect(parser.getNumber(1, 0)).toBe(1880);
                expect(lastRowYear).toBe(parseInt(snapshot.slice(0, 4), 10));
            });

            it('has a monthly series with one strictly increasing point per month', () => {
                const series = parser.monthlySeries;
                expect(series[0].x).toBe(1880);
                series.forEach((point, index) => {
                    expect(Number.isFinite(point.value)).toBe(true);
                    const month = (point.x - Math.floor(point.x)) * 12;
                    expect(month).toBeCloseTo(Math.round(month), 9);
                    if (index > 0) {
                        expect(point.x).toBeGreaterThan(series[index - 1].x);
                    }
                });
            });

            it('reports the last month with a value as the end date', () => {
                const last = parser.monthlySeries[parser.monthlySeries.length - 1];
                const month = Math.round((last.x - Math.floor(last.x)) * 12);
                expect(parser.lastValidDate).toBe(`${MONTHS[month]} ${Math.floor(last.x)}`);
                // Snapshots are taken mid-year, so the last row is still incomplete.
                expect(Math.floor(last.x)).toBe(lastRowYear);
                expect(month).toBeLessThan(11);
            });

            it('has an annual series of complete years only', () => {
                const series = parser.annualSeries;
                expect(series[0].year).toBe(1880);
                expect(series[series.length - 1].year).toBe(lastRowYear - 1);
                series.forEach((point) => expect(Number.isFinite(point.value)).toBe(true));
            });
        });
    });
});

describe('GISSParser with inline data', () => {
    const csv = [
        'Land-Ocean: Global Means',
        'Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON',
        '2000,.1,.2,.3,.4,.5,.6,.7,.8,.9,1.0,1.1,1.2,.65,***,***,.4,.7,1.0',
        '2001,-.1,-.2,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***,***',
        '',
    ].join('\r\n');
    const parser = new GISSParser(csv);

    it('handles CRLF line endings and the trailing empty line', () => {
        expect(parser.title).toBe('Land-Ocean: Global Means');
        expect(parser.rowCount).toBe(3);
    });

    it('skips *** placeholders instead of reading them as numbers', () => {
        expect(parser.monthlySeries.map((point) => point.value)).toEqual([.1, .2, .3, .4, .5, .6, .7, .8, .9, 1.0, 1.1, 1.2, -.1, -.2]);
        expect(parser.annualSeries).toEqual([{ year: 2000, value: .65 }]);
    });

    it('places months at year + (month - 1) / 12', () => {
        const xs = parser.monthlySeries.map((point) => point.x);
        expect(xs[0]).toBe(2000);
        expect(xs[11]).toBeCloseTo(2000 + 11 / 12, 12);
        expect(xs[13]).toBeCloseTo(2001 + 1 / 12, 12);
    });

    it('reports the last month with a value as the end date', () => {
        expect(parser.lastValidDate).toBe('February 2001');
    });

    it('returns empty results for missing data', () => {
        const empty = new GISSParser(undefined);
        expect(empty.title).toBe('');
        expect(empty.monthlySeries).toEqual([]);
        expect(empty.annualSeries).toEqual([]);
        expect(empty.lastValidDate).toBeUndefined();
    });
});
