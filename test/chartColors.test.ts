import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CHART_COLOR_VARS } from '../src/charts/chartColors';

const snapshots = readdirSync(join(__dirname, '..', 'public', 'assets', 'csv')).filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name));
const css = readFileSync(join(__dirname, '..', 'src', 'css', 'style.css'), 'utf8');

describe('chart colors', () => {
    it('give every snapshot its own color in the Diff charts - add a validated color before a snapshot too many', () => {
        expect(snapshots.length).toBeLessThanOrEqual(CHART_COLOR_VARS.length);
    });

    it('are defined for the light and the dark theme', () => {
        for (const [index] of CHART_COLOR_VARS.entries()) {
            expect(css.match(new RegExp(`--chart-color-${index + 1}:`, 'g')), `--chart-color-${index + 1}`).toHaveLength(2);
        }
    });
});
