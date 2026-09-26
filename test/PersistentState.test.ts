import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LEGACY_ANIMATION_KEY, PersistentState, STORAGE_KEY, parseState, storedDate } from '../src/PersistentState';
import { Scene, Showcase } from '../src/Enums';

/** A minimal in-memory Local Storage. */
function memoryStorage(entries: Record<string, string> = {}): Storage {
    const map = new Map(Object.entries(entries));
    return {
        get length() { return map.size; },
        key: (index) => [...map.keys()][index] ?? null,
        getItem: (key) => map.get(key) ?? null,
        setItem: (key, value) => { map.set(key, String(value)); },
        removeItem: (key) => { map.delete(key); },
        clear: () => map.clear(),
    };
}

const stored = (storage: Storage) => JSON.parse(storage.getItem(STORAGE_KEY)!);

describe('parseState', () => {
    it('returns nothing for a missing entry, broken JSON or another version', () => {
        expect(parseState(null)).toEqual({});
        expect(parseState('{broken')).toEqual({});
        expect(parseState('[1]')).toEqual({});
        expect(parseState(JSON.stringify({ version: 2, region: Showcase.GLOBAL }))).toEqual({});
    });

    it('keeps valid fields and drops the others', () => {
        const state = parseState(JSON.stringify({
            version: 1,
            region: 'Atlantis',
            scene: Scene.DIFF,
            theme: 'dark',
            yearRange: { first: 1950, last: '2000' },
            view: { navigation: { inertia: false, rotateSpeed: 'fast' }, axes: { yearVisible: false, yearTickCount: 'many' }, geometry: { radiusFactor: 1.5, radius: 3 } },
            colors: { cold: '#0000ff', warm: 'red' },
            animation: { duration: 20, loop: 'yes' },
            camera: { position: [1, 2, 3], target: [0, 0] },
            charts: { 'diff:Global': { hidden: ['2023-09-03', 7], movingAverage: false }, broken: 5 },
            unknown: true,
        }));
        expect(state).toEqual({
            scene: Scene.DIFF,
            theme: 'dark',
            yearRange: { first: 1950 },
            view: { navigation: { inertia: false }, axes: { yearVisible: false }, geometry: { radiusFactor: 1.5 } },
            colors: { cold: '#0000ff' },
            animation: { duration: 20 },
            charts: { 'diff:Global': { hidden: ['2023-09-03'], movingAverage: false } },
        });
    });

    it('drops a camera looking at its own position', () => {
        const camera = { position: [1, 1, 1], target: [1, 1, 1] };
        expect(parseState(JSON.stringify({ version: 1, camera }))).toEqual({});
        camera.target = [0, 0, 0];
        expect(parseState(JSON.stringify({ version: 1, camera }))).toEqual({ camera });
    });

    it('keeps the camera\'s up direction, unless it has no direction', () => {
        const camera = { position: [1, 2, 3], target: [0, 0, 0], up: [0, 0, 1] };
        expect(parseState(JSON.stringify({ version: 1, camera })).camera).toEqual(camera);
        camera.up = [0, 0, 0];
        expect(parseState(JSON.stringify({ version: 1, camera })).camera).toEqual({ position: [1, 2, 3], target: [0, 0, 0] });
    });
});

describe('storedDate', () => {
    const dates = ['2023-09-03', '2024-10-22', '2026-09-16'];

    it('keeps a stored snapshot while the default is unchanged', () => {
        expect(storedDate({ defaultDate: '2026-09-16', date: '2023-09-03' }, '2026-09-16', dates)).toBe('2023-09-03');
    });

    it('shows a new default snapshot instead of the stored one', () => {
        expect(storedDate({ defaultDate: '2024-10-22', date: '2023-09-03' }, '2026-09-16', dates)).toBe('2026-09-16');
    });

    it('ignores a snapshot that no longer exists', () => {
        expect(storedDate({ defaultDate: '2026-09-16', date: '2020-01-01' }, '2026-09-16', dates)).toBe('2026-09-16');
        expect(storedDate({}, '2026-09-16', dates)).toBe('2026-09-16');
    });
});

describe('PersistentState', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.useRealTimers();
    });

    it('loads the stored state', () => {
        const storage = memoryStorage({ [STORAGE_KEY]: JSON.stringify({ version: 1, scene: Scene.CHARTS }) });
        expect(new PersistentState(storage).state).toEqual({ scene: Scene.CHARTS });
    });

    it('takes over the Animation settings of v0.10.0 and removes their entry on the next save', () => {
        const storage = memoryStorage({ [LEGACY_ANIMATION_KEY]: JSON.stringify({ duration: 30, playOnStart: true, loop: 1 }) });
        const state = new PersistentState(storage);
        expect(state.state).toEqual({ animation: { duration: 30, playOnStart: true } });

        state.update({ theme: 'light' });
        state.flush();
        expect(storage.getItem(LEGACY_ANIMATION_KEY)).toBeNull();
        expect(stored(storage)).toEqual({ version: 1, animation: { duration: 30, playOnStart: true }, theme: 'light' });
    });

    it('groups changes into one delayed write', () => {
        const storage = memoryStorage();
        const setItem = vi.spyOn(storage, 'setItem');
        const state = new PersistentState(storage);
        state.update({ theme: 'dark' });
        state.update({ scene: Scene.DIFF });
        expect(setItem).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1000);
        expect(setItem).toHaveBeenCalledTimes(1);
        expect(stored(storage)).toEqual({ version: 1, theme: 'dark', scene: Scene.DIFF });
    });

    it('writes a pending change on flush, and only then', () => {
        const storage = memoryStorage();
        const setItem = vi.spyOn(storage, 'setItem');
        const state = new PersistentState(storage);
        state.flush();
        expect(setItem).not.toHaveBeenCalled();
        state.update({ theme: 'dark' });
        state.flush();
        expect(stored(storage).theme).toBe('dark');
    });

    it('keeps the state of each chart', () => {
        const storage = memoryStorage();
        const state = new PersistentState(storage);
        state.updateChart('diff:Global', { movingAverage: false });
        state.updateChart('charts:2026-09-16', { hidden: ['Global'] });
        state.flush();
        expect(stored(storage).charts).toEqual({ 'diff:Global': { movingAverage: false }, 'charts:2026-09-16': { hidden: ['Global'] } });
    });

    it('forgets everything on clear and stops saving', () => {
        const storage = memoryStorage({
            [STORAGE_KEY]: JSON.stringify({ version: 1, theme: 'dark' }),
            [LEGACY_ANIMATION_KEY]: '{}',
        });
        const state = new PersistentState(storage);
        state.update({ scene: Scene.DIFF });
        state.clear();
        state.update({ theme: 'light' });
        vi.advanceTimersByTime(1000);
        state.flush();
        expect(storage.length).toBe(0);
    });

    it('keeps only the last seen version on clear, so What\'s new is not shown again', () => {
        const storage = memoryStorage({ [STORAGE_KEY]: JSON.stringify({ version: 1, theme: 'dark', lastSeenVersion: '0.13.0' }) });
        const state = new PersistentState(storage);
        state.clear();
        expect(stored(storage)).toEqual({ version: 1, lastSeenVersion: '0.13.0' });
    });

    it('tells whether anything was stored before, even if unreadable', () => {
        expect(new PersistentState(memoryStorage()).hadStoredState).toBe(false);
        expect(new PersistentState(memoryStorage({ [STORAGE_KEY]: '{broken' })).hadStoredState).toBe(true);
        expect(new PersistentState(memoryStorage({ [LEGACY_ANIMATION_KEY]: '{}' })).hadStoredState).toBe(true);
    });

    it('works without storage, or with storage that throws', () => {
        const throwing = memoryStorage();
        throwing.getItem = () => { throw new Error('blocked'); };
        throwing.setItem = () => { throw new Error('quota'); };
        for (const storage of [undefined, throwing]) {
            const state = new PersistentState(storage);
            state.update({ theme: 'dark' });
            expect(() => state.flush()).not.toThrow();
            expect(state.state.theme).toBe('dark');
        }
    });
});
