// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest';
import { ChartControl, type ChartConfig } from '../src/ChartControl';

let container: HTMLElement;
beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
});

const xLabels = () => [...container.querySelectorAll('.chart-axis-label-x')].map((label) => label.textContent);
const yValues = () => [...container.querySelectorAll('.chart-axis-label-y')].map((label) => parseFloat(label.textContent!.replace('°C', '')));
const seriesPaths = () => [...container.querySelectorAll('path.chart-series-line')] as SVGPathElement[];

/** One point per year, 1880-2026, rising from 0 to about 1.5. */
const annual = (offset = 0) => Array.from({ length: 147 }, (_, index) => ({ x: 1880 + index, y: index / 100 + offset }));

function annualChart(extra: Partial<ChartConfig> = {}): ChartControl {
    return new ChartControl(container, {
        title: 'Test',
        series: [{ label: 'A', color: 'red', points: annual() }],
        xDomain: [1880, 2026],
        ...extra,
    });
}

describe('ChartControl', () => {
    it('renders the title, one line per series and a legend entry per series', () => {
        annualChart({ series: [{ label: 'A', color: 'red', points: annual() }, { label: 'B', color: 'blue', points: annual(0.1) }] });
        expect(container.querySelector('.chart-title')!.textContent).toBe('Test');
        expect(seriesPaths()).toHaveLength(2);
        expect([...container.querySelectorAll('.chart-legend-item')].map((item) => item.textContent)).toEqual(['A', 'B']);
    });

    it('uses whole-year ticks over the full range', () => {
        annualChart();
        const years = xLabels().map(Number);
        expect(years.length).toBeGreaterThan(2);
        years.forEach((year) => expect(year).toBeGreaterThanOrEqual(1880));
        years.forEach((year) => expect(year).toBeLessThanOrEqual(2026));
    });

    it('limits the x-axis ticks to the zoomed range', () => {
        const chart = annualChart();
        chart.setXDomain([1990, 2010]);
        const years = xLabels().map(Number);
        expect(years[0]).toBe(1990);
        expect(years[years.length - 1]).toBe(2010);
    });

    it('fits the y-axis to the years in view', () => {
        const chart = annualChart();
        const fullMax = Math.max(...yValues());
        chart.setXDomain([1880, 1900]);
        // 1880-1900 only reaches y = 0.2, far below the 1.46 of the full range.
        expect(Math.max(...yValues())).toBeLessThan(0.5);
        expect(fullMax).toBeGreaterThan(1);
    });

    it('switches a zoomed-in monthly chart to month ticks (v0.8.4)', () => {
        const monthly = Array.from({ length: 36 }, (_, index) => ({ x: 2019 + index / 12, y: index / 36 }));
        const chart = new ChartControl(container, { title: 'Monthly', series: [{ label: 'M', color: 'red', points: monthly }], xDomain: [2019, 2022], xResolution: 'month' });
        chart.setXDomain([2020, 2021]);
        expect(xLabels()).toContain('2020');
        expect(xLabels()).toContain('Jul');
    });

    it('hides a series when its legend entry is unchecked', () => {
        annualChart({ series: [{ label: 'A', color: 'red', points: annual() }, { label: 'B', color: 'blue', points: annual(0.1) }] });
        const checkbox = container.querySelectorAll<HTMLInputElement>('.chart-legend-checkbox')[1];
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
        expect(seriesPaths()[1].style.display).toBe('none');
        expect(seriesPaths()[0].style.display).toBe('');
    });

    it('with auto-scale, fits the y-axis to the checked series only', () => {
        annualChart({
            autoScaleDefault: true,
            series: [{ label: 'Small', color: 'red', points: annual() }, { label: 'Large', color: 'blue', points: annual(10) }],
        });
        expect(Math.max(...yValues())).toBeGreaterThan(5);
        const large = container.querySelectorAll<HTMLInputElement>('.chart-legend-checkbox')[1];
        large.checked = false;
        large.dispatchEvent(new Event('change'));
        expect(Math.max(...yValues())).toBeLessThan(2);
    });

    it('without auto-scale, keeps the y-axis when a series is hidden', () => {
        annualChart({ series: [{ label: 'Small', color: 'red', points: annual() }, { label: 'Large', color: 'blue', points: annual(10) }] });
        const before = yValues();
        const large = container.querySelectorAll<HTMLInputElement>('.chart-legend-checkbox')[1];
        large.checked = false;
        large.dispatchEvent(new Event('change'));
        expect(yValues()).toEqual(before);
    });

    it('draws a zero line when asked to', () => {
        annualChart({ yZeroLine: true });
        expect(container.querySelector('.chart-zero-line')).not.toBeNull();
    });
});
