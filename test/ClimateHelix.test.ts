import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';

// Settings builds lil-gui and reads CSS custom properties on import; the helix only needs its static color lookup.
vi.mock('../src/Settings', () => ({ Settings: { styledColor: () => new THREE.Color('white') } }));

import { ClimateHelix, temperatureColor } from '../src/ClimateHelix';

const csv = readFileSync(join(__dirname, '..', 'public', 'assets', 'csv', '2026-09-16', 'GLB.Ts+dSST.csv'), 'utf8');
const HEIGHT = 2.5;
const cold = new THREE.Color('blue');
const zero = new THREE.Color('white');
const warm = new THREE.Color('red');

/** The part of Settings that ClimateHelix reads. */
function fakeSettings(firstYear: number, lastYear: number, datasetFirstYear = 1880, datasetLastYear = 2026) {
    return {
        showcaseCSV: csv,
        firstYear,
        lastYear,
        datasetFirstYear,
        datasetLastYear,
        radiusFactor: 0.9,
        tubularSegments: 4,
        radialSegments: 4,
        cold,
        zero,
        warm,
    } as any;
}

function zExtent(firstYear: number, lastYear: number): { size: number, tubeRadius: number } {
    const helix = new ClimateHelix(fakeSettings(firstYear, lastYear), -1.0, 1.5, 0.4, 1.0, HEIGHT);
    const geometry = helix.createMesh().geometry as THREE.BufferGeometry;
    geometry.computeBoundingBox();
    const box = geometry.boundingBox!;
    return { size: box.max.z - box.min.z, tubeRadius: 0.9 * HEIGHT / (2026 - 1880 + 1) };
}

describe('ClimateHelix', () => {
    it('spans the full configured height for all years', () => {
        const { size, tubeRadius } = zExtent(1880, 2026);
        expect(size).toBeCloseTo(HEIGHT + 2 * tubeRadius, 2);
    });

    it('stretches a selected year range to the full height (v0.8.6)', () => {
        const { size, tubeRadius } = zExtent(1990, 2010);
        expect(size).toBeCloseTo(HEIGHT + 2 * tubeRadius, 2);
    });

    it('builds one curve point per month with data in the selected years', () => {
        const helix = new ClimateHelix(fakeSettings(2025, 2026), -1.0, 1.5, 0.4, 1.0, HEIGHT);
        helix.createMesh();
        // 12 months of 2025 plus January to August 2026.
        expect(helix.curve).toHaveLength(20);
        expect(helix.length).toBeCloseTo(20 / 12, 9);
    });

    it('maps temperatures to radii between the configured bounds', () => {
        const helix = new ClimateHelix(fakeSettings(1880, 2026), -1.0, 1.5, 0.4, 1.0, HEIGHT);
        helix.createMesh();
        const radii = helix.curve.map((point) => point.radius);
        expect(Math.min(...radii)).toBeGreaterThanOrEqual(0.4 - 0.2);
        expect(Math.max(...radii)).toBeLessThanOrEqual(1.0 + 0.2);
    });
});

describe('temperatureColor', () => {
    it('uses the zero color at 0 and blends towards cold and warm', () => {
        expect(temperatureColor(0, cold, zero, warm).equals(zero)).toBe(true);
        const hot = temperatureColor(1.5, cold, zero, warm);
        const chilly = temperatureColor(-1, cold, zero, warm);
        expect(hot.r).toBeGreaterThan(hot.b);
        expect(chilly.b).toBeGreaterThan(chilly.r);
    });
});
