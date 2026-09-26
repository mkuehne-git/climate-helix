// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../CHANGELOG.md?raw', () => ({
    default: [
        '# Changelog',
        '## v0.13.0 · 2026-10-02', '* What\'s new.',
        '## v0.12.1 · 2026-10-01 · [bbbbbbb](https://github.com/x/y/commit/bbbbbbb)', '* Tests. No functional change.',
        '## v0.12.0 · 2026-09-30 · [aaaaaaa](https://github.com/x/y/commit/aaaaaaa)', '* Changelog view.',
        '## v0.11.1 · 2026-09-26 · [133fc63](https://github.com/x/y/commit/133fc63)', '* Trackball.',
    ].join('\n'),
}));

import { Changelog } from '../src/Changelog';
import { PersistentState, STORAGE_KEY } from '../src/PersistentState';
import { showWhatsNewOnce, versionSeenBefore } from '../src/WhatsNew';

const changelog = new Changelog();
const overlay = () => document.querySelector('.overlay-page.changelog');
const headings = () => [...overlay()!.querySelectorAll('h2')].map((h) => h.textContent!.split(' ')[0]);

function stateWith(stored?: object): PersistentState {
    const map = new Map<string, string>(stored ? [[STORAGE_KEY, JSON.stringify({ version: 1, ...stored })]] : []);
    return new PersistentState({
        get length() { return map.size; },
        key: (index) => [...map.keys()][index] ?? null,
        getItem: (key) => map.get(key) ?? null,
        setItem: (key, value) => { map.set(key, String(value)); },
        removeItem: (key) => { map.delete(key); },
        clear: () => map.clear(),
    });
}

/** Starts showWhatsNewOnce and tells whether it is still waiting for the page to close. */
async function start(state: PersistentState): Promise<{ done: Promise<void>, waiting: () => boolean }> {
    let finished = false;
    const done = showWhatsNewOnce(changelog, state, '0.13.0').then(() => { finished = true; });
    await new Promise((resolve) => setTimeout(resolve, 0));
    return { done, waiting: () => !finished };
}

afterEach(() => changelog.hide());

describe('versionSeenBefore', () => {
    it('is the stored version, the one before What\'s new for earlier users, and nothing for new visitors', () => {
        expect(versionSeenBefore('0.12.0', true)).toBe('0.12.0');
        expect(versionSeenBefore(undefined, true)).toBe('0.11.1');
        expect(versionSeenBefore(undefined, false)).toBeUndefined();
    });
});

describe('showWhatsNewOnce', () => {
    it('shows the news since the last seen version, without non-functional ones, until closed', async () => {
        const state = stateWith({ lastSeenVersion: '0.11.1' });
        const { done, waiting } = await start(state);
        await vi.waitFor(() => expect(overlay()).not.toBeNull());
        expect(overlay()!.querySelector('h1')!.textContent).toBe("What's new");
        expect(headings()).toEqual(['v0.13.0', 'v0.12.0']);
        expect(waiting()).toBe(true);
        expect(state.state.lastSeenVersion).toBe('0.13.0');
        changelog.hide();
        await done;
    });

    it('shows the news to someone who used the app before What\'s new', async () => {
        await start(stateWith({ region: 'Global' }));
        await vi.waitFor(() => expect(headings()).toEqual(['v0.13.0', 'v0.12.0']));
    });

    it('shows nothing to a new visitor, but remembers the version', async () => {
        const state = stateWith();
        const { done } = await start(state);
        await done;
        expect(overlay()).toBeNull();
        expect(state.state.lastSeenVersion).toBe('0.13.0');
    });

    it('shows nothing the second time', async () => {
        const { done } = await start(stateWith({ lastSeenVersion: '0.13.0' }));
        await done;
        expect(overlay()).toBeNull();
    });

    it('switches to the full changelog without counting as closed', async () => {
        const { done, waiting } = await start(stateWith({ lastSeenVersion: '0.12.0' }));
        await vi.waitFor(() => expect(overlay()).not.toBeNull());
        overlay()!.querySelector<HTMLElement>('.changelog-full')!.click();
        expect(overlay()!.querySelector('h1')!.textContent).toBe('Changelog');
        expect(headings()).toEqual(['v0.13.0', 'v0.12.1', 'v0.12.0', 'v0.11.1']);
        expect(waiting()).toBe(true);
        overlay()!.querySelector<HTMLElement>('div.overlay-close')!.click();
        await done;
    });
});
