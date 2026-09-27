/**
 * The categorical chart colors (CSS variables in style.css, one set per
 * theme), in their validated order: colorblind-safe neighbors, distinct
 * for normal vision. A color follows its entity and is never reused, so
 * there can be no more snapshots than colors (test/chartColors.test.ts).
 */
export const CHART_COLOR_VARS = [
    'var(--chart-color-1)',
    'var(--chart-color-2)',
    'var(--chart-color-3)',
    'var(--chart-color-4)',
    'var(--chart-color-5)',
] as const;
