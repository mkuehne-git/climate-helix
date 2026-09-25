import { describe, expect, it } from 'vitest';
import { decimalsForStep, formatMonthYear, monthTicks, movingAverage, niceTicks } from '../src/chartMath';

describe('niceTicks', () => {
    it('uses 1, 2 or 5 times a power of ten as the step', () => {
        expect(niceTicks(0, 10, 5)).toEqual([0, 2, 4, 6, 8, 10]);
        expect(niceTicks(-0.6, 1.2, 5)).toEqual([-0.5, 0, 0.5, 1]);
        expect(niceTicks(1880, 2026, 8)).toEqual([1880, 1900, 1920, 1940, 1960, 1980, 2000, 2020]);
    });

    it('rounds away floating point noise', () => {
        expect(niceTicks(0, 0.3, 3)).toEqual([0, 0.1, 0.2, 0.3]);
    });

    it('respects the minimum step (whole years on the x-axis)', () => {
        expect(niceTicks(2000, 2002, 10, 1)).toEqual([2000, 2001, 2002]);
    });

    it('returns a single tick for an empty range', () => {
        expect(niceTicks(1990, 1990, 5)).toEqual([1990]);
    });
});

describe('decimalsForStep', () => {
    it('returns the decimals a tick step needs', () => {
        expect(decimalsForStep(5)).toBe(0);
        expect(decimalsForStep(1)).toBe(0);
        expect(decimalsForStep(0.5)).toBe(1);
        expect(decimalsForStep(0.2)).toBe(1);
        expect(decimalsForStep(0.05)).toBe(2);
        expect(decimalsForStep(0)).toBe(0);
    });
});

describe('formatMonthYear', () => {
    it('formats year + month fractions', () => {
        expect(formatMonthYear(1990)).toBe('Jan 1990');
        expect(formatMonthYear(1990 + 1 / 12)).toBe('Feb 1990');
        expect(formatMonthYear(1990 + 11 / 12)).toBe('Dec 1990');
        expect(formatMonthYear(2026 + 7 / 12)).toBe('Aug 2026');
    });
});

describe('monthTicks (month-aligned ticks when zoomed in, v0.8.4)', () => {
    it('picks a 2-month step for one year and ~6 ticks', () => {
        const ticks = monthTicks(2000, 2001, 6);
        expect(ticks.map((tick) => tick.label)).toEqual(['2000', 'Mar', 'May', 'Jul', 'Sep', 'Nov', '2001']);
        ticks.forEach((tick) => expect(tick.x * 12).toBeCloseTo(Math.round(tick.x * 12), 9));
    });

    it('picks a 1-month step for half a year', () => {
        expect(monthTicks(2000, 2000.5, 6).map((tick) => tick.label)).toEqual(['2000', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']);
    });

    it('never uses more than a 6-month step', () => {
        expect(monthTicks(2000, 2003, 2).map((tick) => tick.label)).toEqual(['2000', 'Jul', '2001', 'Jul', '2002', 'Jul', '2003']);
    });

    it('starts at the first whole month inside the range', () => {
        const ticks = monthTicks(2000 + 0.5 / 12, 2000 + 3 / 12, 3);
        expect(ticks.map((tick) => tick.label)).toEqual(['Feb', 'Mar', 'Apr']);
    });
});

describe('movingAverage', () => {
    const points = [1, 2, 3, 4, 5].map((y, x) => ({ x, y }));

    it('averages a centered window and keeps x', () => {
        expect(movingAverage(points, 3)).toEqual([
            { x: 0, y: 1.5 },
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 4 },
            { x: 4, y: 4.5 },
        ]);
    });

    it('shrinks the window at the edges instead of padding', () => {
        const [first, , middle, , last] = movingAverage(points, 5);
        expect(first.y).toBe(2);
        expect(middle.y).toBe(3);
        expect(last.y).toBe(4);
    });

    it('returns an empty result for no points', () => {
        expect(movingAverage([], 12)).toEqual([]);
    });
});
