// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SVGToggleButton } from '../src/ui/SVGToggleButton';

const icon = (id: string) => ({ id, svg: '<svg xmlns="http://www.w3.org/2000/svg"></svg>' });

let container: HTMLElement;
beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
});

const create = () => new SVGToggleButton({ container, icons: [icon('play'), icon('pause')], labels: ['Play', 'Pause'], classToken: 'test', event: 'test-clicked' });
const div = () => container.querySelector<HTMLElement>('.toggle-div')!;

describe('SVGToggleButton', () => {
    it('is a focusable button named after the icon shown', () => {
        const button = create();
        button.show(0);
        expect(div().getAttribute('role')).toBe('button');
        expect(div().tabIndex).toBe(0);
        expect(div().getAttribute('aria-label')).toBe('Play');
    });

    it('renames itself when the icon changes', () => {
        const button = create();
        button.show(0);
        button.toggle();
        expect(div().getAttribute('aria-label')).toBe('Pause');
        button.toggle();
        expect(div().getAttribute('aria-label')).toBe('Play');
        button.select(1);
        expect(div().getAttribute('aria-label')).toBe('Pause');
    });

    it('clicks on Enter and Space', () => {
        create().show(0);
        const click = vi.fn();
        div().addEventListener('click', click);
        div().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        div().dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
        div().dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
        expect(click).toHaveBeenCalledTimes(2);
    });

    it('has no name without labels', () => {
        new SVGToggleButton({ container, icons: [icon('x')], classToken: 'test', event: 'e' }).show(0);
        expect(div().hasAttribute('aria-label')).toBe(false);
    });
});
