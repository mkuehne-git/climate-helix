import type { ChartPoint } from './ChartControl';

const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * A centered moving average over `points` (already sorted by `x`): each
 * output point is the mean of up to `window` neighbors centered on it,
 * shrinking near the edges rather than padding with missing data.
 */
function movingAverage(points: ChartPoint[], window: number): ChartPoint[] {
    const half = Math.floor(window / 2);
    return points.map((point, index) => {
        const start = Math.max(0, index - half);
        const end = Math.min(points.length - 1, index + half);
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += points[i].y;
        }
        return { x: point.x, y: sum / (end - start + 1) };
    });
}

/** Formats a year+month-fraction x value (see `GISSParser.monthlySeries`) as e.g. "Feb 1990". */
function formatMonthYear(x: number): string {
    const month = Math.round((x % 1) * 12) % 12;
    const year = Math.round(x - month / 12);
    return `${MONTH_ABBR[month]} ${year}`;
}

/** How many decimal places a "nice" tick step needs to display distinct labels. */
function decimalsForStep(step: number): number {
    if (step <= 0 || step >= 1) {
        return 0;
    }
    return Math.ceil(-Math.log10(step));
}

/** Month-aligned ticks (every 1, 2, 3 or 6 months) covering [min, max]; January shows the year, other months their abbreviation. */
function monthTicks(min: number, max: number, count: number): { x: number, label: string }[] {
    const rawStepMonths = ((max - min) * 12) / count;
    const step = [1, 2, 3, 6].find((candidate) => candidate >= rawStepMonths) ?? 6;
    const first = Math.ceil(min * 12 - 1e-6);
    const last = Math.floor(max * 12 + 1e-6);
    const ticks: { x: number, label: string }[] = [];
    for (let k = Math.ceil(first / step) * step; k <= last; k += step) {
        const month = ((k % 12) + 12) % 12;
        ticks.push({ x: k / 12, label: month === 0 ? String(k / 12) : MONTH_ABBR[month] });
    }
    return ticks;
}

/** Generates ~`count` "nice" round tick values covering [min, max]. */
function niceTicks(min: number, max: number, count: number, minStep = 0): number[] {
    if (min === max) {
        return [min];
    }
    const span = max - min;
    const rawStep = span / count;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const residual = rawStep / magnitude;
    const step = Math.max((residual > 5 ? 10 : residual > 2 ? 5 : residual > 1 ? 2 : 1) * magnitude, minStep);
    const start = Math.ceil(min / step) * step;
    const ticks: number[] = [];
    for (let value = start; value <= max + step * 1e-6; value += step) {
        ticks.push(Math.round(value * 1e6) / 1e6);
    }
    return ticks;
}

export { decimalsForStep, formatMonthYear, monthTicks, movingAverage, niceTicks };
