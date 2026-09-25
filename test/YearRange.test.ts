import { beforeEach, describe, expect, it } from 'vitest';
import { YearRange } from '../src/YearRange';

// All datasets cover 1880-2026; the active one (the newest) as well.
let range: YearRange;
beforeEach(() => {
    range = new YearRange(1880, 2026, 1880, 2026);
});

const helix = () => [range.firstYear, range.lastYear];

describe('YearRange', () => {
    it('starts with all years', () => {
        expect(helix()).toEqual([1880, 2026]);
        expect(range.requested).toEqual([1880, 2026]);
    });

    describe('the helix slider', () => {
        it('keeps the start at or before the end', () => {
            range.setEnd(2000);
            range.setStart(2010);
            expect(helix()).toEqual([2000, 2000]);
        });

        it('keeps the end at or after the start', () => {
            range.setStart(1950);
            range.setEnd(1900);
            expect(helix()).toEqual([1950, 1950]);
        });

        it('stays within the dataset years', () => {
            range.setStart(1700);
            range.setEnd(2100);
            expect(helix()).toEqual([1880, 2026]);
        });

        it('sets the shared range too', () => {
            range.setStart(1950);
            range.setEnd(2000);
            expect(range.requested).toEqual([1950, 2000]);
        });
    });

    describe('switching datasets', () => {
        it('clamps to a shorter dataset and restores the range when switching back (v0.9.0)', () => {
            range.setStart(1990);
            expect(range.setDataset(1880, 2023)).toBe(true);
            expect(helix()).toEqual([1990, 2023]);
            expect(range.setDataset(1880, 2026)).toBe(true);
            expect(helix()).toEqual([1990, 2026]);
        });

        it('reports no change when the range still fits', () => {
            range.setEnd(2000);
            expect(range.setDataset(1880, 2023)).toBe(false);
            expect(helix()).toEqual([1880, 2000]);
        });

        it('collapses to the dataset end when the whole range lies after it', () => {
            range.request(2025, 2026);
            range.setDataset(1880, 2023);
            expect(helix()).toEqual([2023, 2023]);
            expect(range.requested).toEqual([2025, 2026]);
        });
    });

    describe('a range chosen in a chart view', () => {
        it('is picked up by the helix when it becomes active', () => {
            range.request(1950, 2000);
            expect(helix()).toEqual([1880, 2026]);
            expect(range.clamp()).toBe(true);
            expect(helix()).toEqual([1950, 2000]);
        });

        it('is clamped for the helix without being lost', () => {
            range.setDataset(1880, 2023);
            range.request(1990, 2026);
            range.clamp();
            expect(helix()).toEqual([1990, 2023]);
            expect(range.requested).toEqual([1990, 2026]);
        });
    });

    describe('reset', () => {
        it('resets the shared range to all years', () => {
            range.request(1950, 2000);
            range.reset();
            expect(range.requested).toEqual([1880, 2026]);
        });

        it('from a chart view lets the helix see the change when it becomes active (v0.9.0 regression)', () => {
            range.setStart(1950);
            range.setEnd(2000);
            // Reset in a chart view: the helix is not redrawn yet ...
            range.reset();
            expect(helix()).toEqual([1950, 2000]);
            // ... so switching back must report a change, or the helix keeps showing 1950-2000.
            expect(range.clamp()).toBe(true);
            expect(helix()).toEqual([1880, 2026]);
        });

        it('limits the helix to the active dataset', () => {
            range.setDataset(1880, 2023);
            range.setStart(1950);
            range.reset();
            range.clamp();
            expect(helix()).toEqual([1880, 2023]);
            expect(range.requested).toEqual([1880, 2026]);
        });
    });
});
