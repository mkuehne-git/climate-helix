// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { checkbox, color, range, section, segmented } from '../src/settingsControls';

let parent: HTMLElement;
beforeEach(() => {
    document.body.innerHTML = '';
    parent = document.createElement('div');
    document.body.appendChild(parent);
});

describe('section', () => {
    it('is a <details> with its title and hint, closed unless asked', () => {
        const content = section(parent, 'Advanced', { hint: 'Geometry' });
        const details = parent.querySelector('details')!;
        expect(details.open).toBe(false);
        expect(details.querySelector('summary')!.textContent).toBe('AdvancedGeometry');
        expect(content.parentElement).toBe(details);
        expect(section(parent, 'Data', { open: true }).parentElement!.hasAttribute('open')).toBe(true);
    });
});

describe('checkbox', () => {
    it('is labelled, writes changes and shows values changed elsewhere', () => {
        let value = true;
        const set = vi.fn((checked: boolean) => { value = checked; });
        const control = checkbox(parent, 'Loop', () => value, set);
        const input = parent.querySelector<HTMLInputElement>('input')!;
        expect(parent.querySelector('label')!.htmlFor).toBe(input.id);
        expect(input.checked).toBe(true);
        input.click();
        expect(set).toHaveBeenCalledWith(false);
        value = true;
        control.update();
        expect(input.checked).toBe(true);
    });
});

describe('range', () => {
    it('shows the formatted value next to the slider', () => {
        let value = 10;
        range(parent, 'Duration', { min: 2, max: 60, step: 1 }, () => value, (v) => { value = v; }, (v) => `${v} s`);
        const input = parent.querySelector<HTMLInputElement>('input')!;
        expect(parent.querySelector('output')!.textContent).toBe('10 s');
        input.value = '20';
        input.dispatchEvent(new Event('input'));
        expect(value).toBe(20);
        expect(parent.querySelector('output')!.textContent).toBe('20 s');
    });
});

describe('segmented', () => {
    it('presses the current option, named by its long title', () => {
        let value = 'a';
        const control = segmented(parent, 'Region', [{ value: 'a', label: 'North', title: 'Northern HS' }, { value: 'b', label: 'South' }], () => value, (v) => { value = v; });
        const buttons = parent.querySelectorAll('button');
        expect(buttons[0].getAttribute('aria-label')).toBe('Northern HS');
        expect([...buttons].map((b) => b.getAttribute('aria-pressed'))).toEqual(['true', 'false']);
        buttons[1].click();
        expect(value).toBe('b');
        expect([...buttons].map((b) => b.getAttribute('aria-pressed'))).toEqual(['false', 'true']);
        value = 'a';
        control.update();
        expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    });
});

describe('color', () => {
    it('writes the picked color', () => {
        let value = '#0000ff';
        color(parent, '-1.0°C', () => value, (v) => { value = v; });
        const input = parent.querySelector<HTMLInputElement>('input')!;
        expect(input.value).toBe('#0000ff');
        input.value = '#ff0000';
        input.dispatchEvent(new Event('input'));
        expect(value).toBe('#ff0000');
    });
});
