import * as THREE from "three";
import { Showcase } from '../Enums';
import { DEFAULT_DATE } from '../data/datasets';

// Builds for the end-to-end tests (see playwright.config.ts) use a much
// lighter helix mesh: headless browsers render WebGL in software.
const E2E_BUILD = import.meta.env.VITE_E2E === 'true';

export type CaptureTarget = 'All' | 'Helix';
export type ColorName = 'cold' | 'zero' | 'warm';
export const COLOR_NAMES: ColorName[] = ['cold', 'zero', 'warm'];

type Limit = { min: number, max: number, step?: number };

/** The ranges of the numeric settings, for their sliders and for restoring stored values. */
export const LIMITS: Record<string, Limit> = {
    yearTickCount: { min: 2, max: 10, step: 1 },
    temperatureRingCount: { min: 2, max: 10, step: 1 },
    tubularSegments: { min: 1, max: 31, step: 1 },
    radialSegments: { min: 3, max: 32, step: 1 },
    radiusFactor: { min: 0.1, max: 2, step: 0.05 },
    duration: { min: 2, max: 60, step: 1 },
    rotateSpeed: { min: 0.5, max: 10, step: 0.5 },
};

export function styledColor(propertyName: string): THREE.Color {
    const style = window.getComputedStyle(document.body);
    return new THREE.Color(style.getPropertyValue(propertyName));
}

/** The theme's color of a helix temperature, `--cold-color` and so on. */
export function styledColorByTemp(name: ColorName): THREE.Color {
    return styledColor(`--${name}-color`);
}

function colorDescriptor(name: ColorName) {
    return { color: styledColorByTemp(name), modified: false };
}

/** The current settings: the defaults, then restored and changed by the user. */
export const SETTINGS = {
    showcaseCSV: undefined as string | undefined,
    radio: Showcase.GLOBAL,
    date: DEFAULT_DATE,
    view: {
        axes: {
            yearVisible: true,
            temperatureVisible: true,
            monthVisible: true,
            yearTickCount: 5,
            temperatureRingCount: 5,
            temperatureRingsColored: true,
        },
        navigation: {
            /** The helix keeps turning for a moment after a drag. */
            inertia: true,
            /** 1 is the trackball controls' own speed, about a fifth of the orbit controls used before v0.11.1. */
            rotateSpeed: 3,
        },
        geometry: {
            meshVisible: false,
            facesVisible: true,
            radialSegments: E2E_BUILD ? 3 : 8,
            radius: 1,
            radiusFactor: 0.9,
            tubularSegments: E2E_BUILD ? 1 : 30,
        },
        colors: {
            cold: colorDescriptor('cold'),
            zero: colorDescriptor('zero'),
            warm: colorDescriptor('warm'),
        },
    },
    animation: { duration: 10, loop: false, playOnStart: false },
    capture: 'All' as CaptureTarget,
};

/** The settings as shipped, to store only what the user changed - a changed default then still reaches everyone else. */
export const DEFAULTS = {
    radio: SETTINGS.radio,
    navigation: { ...SETTINGS.view.navigation },
    axes: { ...SETTINGS.view.axes },
    geometry: { ...SETTINGS.view.geometry },
    animation: { ...SETTINGS.animation },
};

/** The fields of `current` that differ from `defaults`; undefined when none do. */
export function changedFields<T extends object>(current: T, defaults: T): Partial<T> | undefined {
    const changed = Object.entries(current).filter(([key, value]) => value !== defaults[key]);
    return changed.length > 0 ? Object.fromEntries(changed) as Partial<T> : undefined;
}

/** Copies stored values onto the settings, keeping numbers within their slider's range. */
export function restoreFields<T extends object>(target: T, stored: Partial<T> | undefined): void {
    for (const [key, value] of Object.entries(stored ?? {})) {
        if (value === undefined || !(key in target)) {
            continue;
        }
        const limit = LIMITS[key];
        if (limit && typeof value === 'number') {
            const stepped = limit.step === undefined ? value : Math.round(value / limit.step) * limit.step;
            target[key] = Math.max(limit.min, Math.min(stepped, limit.max));
        } else {
            target[key] = value;
        }
    }
}
