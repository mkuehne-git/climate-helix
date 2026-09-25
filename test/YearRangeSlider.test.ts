// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { YearRangeSlider, type YearRange } from '../src/YearRangeSlider';

function createRange(start = 1880, end = 2026): YearRange & { start: number, end: number } {
    const range = {
        min: 1880,
        max: 2026,
        start,
        end,
        setStart: vi.fn((year: number) => { range.start = year; }),
        setEnd: vi.fn((year: number) => { range.end = year; }),
        reset: vi.fn(() => { range.start = range.min; range.end = range.max; }),
    };
    return range;
}

let container: HTMLElement;
beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
});

const query = <T extends Element>(selector: string) => container.querySelector(selector) as T;
const labels = () => [...container.querySelectorAll('.year-slider-label')].map((label) => label.textContent);

function slide(position: 'start' | 'end', year: number): void {
    const input = query<HTMLInputElement>(`.year-slider-input.${position}`);
    input.value = String(year);
    input.dispatchEvent(new Event('input'));
}

describe('YearRangeSlider', () => {
    it('shows the start and end year at their position on the track', () => {
        new YearRangeSlider(container, createRange(1953, 1990));
        expect(labels()).toEqual(['1953', '1990']);
        expect(query<HTMLElement>('.year-slider-label.start').style.left).toBe(`${(73 / 146) * 100}%`);
        expect(query<HTMLElement>('.year-slider-label.end').style.left).toBe(`${(110 / 146) * 100}%`);
    });

    it('limits both handles to the range bounds', () => {
        new YearRangeSlider(container, createRange());
        for (const position of ['start', 'end']) {
            const input = query<HTMLInputElement>(`.year-slider-input.${position}`);
            expect([input.min, input.max]).toEqual(['1880', '2026']);
        }
    });

    it('passes handle moves on and updates the labels', () => {
        const range = createRange();
        new YearRangeSlider(container, range);
        slide('start', 1950);
        slide('end', 2000);
        expect(range.setStart).toHaveBeenCalledWith(1950);
        expect(range.setEnd).toHaveBeenCalledWith(2000);
        expect(labels()).toEqual(['1950', '2000']);
    });

    it('disables the reset button while all years are shown', () => {
        new YearRangeSlider(container, createRange());
        expect(query<HTMLButtonElement>('.year-slider-reset').disabled).toBe(true);
        slide('start', 1950);
        expect(query<HTMLButtonElement>('.year-slider-reset').disabled).toBe(false);
    });

    it('resets through the range and shows all years again', () => {
        const range = createRange(1950, 2000);
        new YearRangeSlider(container, range);
        query<HTMLButtonElement>('.year-slider-reset').click();
        expect(range.reset).toHaveBeenCalledOnce();
        expect(labels()).toEqual(['1880', '2026']);
        expect(query<HTMLButtonElement>('.year-slider-reset').disabled).toBe(true);
    });

    it('replaces an existing slider in the same container', () => {
        new YearRangeSlider(container, createRange());
        new YearRangeSlider(container, createRange());
        expect(container.querySelectorAll('.year-slider')).toHaveLength(1);
    });
});
