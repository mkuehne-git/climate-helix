import { expect, test } from '@playwright/test';
import { activeSlider, openApp, setSliderYears, sliderYears, switchScene } from './app';

test.beforeEach(async ({ page }) => {
    await openApp(page);
});

test('each view has a year slider showing all years', async ({ page }) => {
    for (const scene of ['Helix', 'Charts', 'Diff'] as const) {
        await switchScene(page, scene);
        expect(await sliderYears(page)).toEqual(['1880', '2026']);
        await expect(activeSlider(page).locator('.year-slider-reset')).toBeDisabled();
    }
});

test('the year range is shared between views (v0.9.0)', async ({ page }) => {
    await setSliderYears(page, 1950, 2000);
    await switchScene(page, 'Charts');
    expect(await sliderYears(page)).toEqual(['1950', '2000']);

    await setSliderYears(page, 1990, 2026);
    await switchScene(page, 'Diff');
    expect(await sliderYears(page)).toEqual(['1990', '2026']);

    await setSliderYears(page, 2000, 2010);
    await switchScene(page, 'Charts');
    expect(await sliderYears(page)).toEqual(['2000', '2010']);
    await switchScene(page, 'Helix');
    expect(await sliderYears(page)).toEqual(['2000', '2010']);
});

test('the charts zoom to the selected years', async ({ page }) => {
    await switchScene(page, 'Charts');
    await setSliderYears(page, 1990, 2010);
    const firstChart = page.locator('.full-scene.show .chart-svg').first();
    const years = (await firstChart.locator('.chart-axis-label-x').allTextContents()).map(Number);
    expect(years[0]).toBe(1990);
    expect(years[years.length - 1]).toBe(2010);
});

test('the reset button shows all years again, in every view', async ({ page }) => {
    for (const scene of ['Helix', 'Charts', 'Diff'] as const) {
        await switchScene(page, scene);
        await setSliderYears(page, 1950, 2000);
        const reset = activeSlider(page).locator('.year-slider-reset');
        await expect(reset).toBeEnabled();
        await reset.click();
        expect(await sliderYears(page)).toEqual(['1880', '2026']);
        await expect(reset).toBeDisabled();
    }
});

test('a reset in a chart view also resets the helix (v0.9.0)', async ({ page }) => {
    await setSliderYears(page, 1950, 2000);
    await switchScene(page, 'Diff');
    await activeSlider(page).locator('.year-slider-reset').click();
    await switchScene(page, 'Helix');
    expect(await sliderYears(page)).toEqual(['1880', '2026']);
});

test('switching to a shorter dataset and back restores the range (v0.9.0)', async ({ page }) => {
    await setSliderYears(page, 1990, 2026);
    await page.locator('#dataset-buttons').getByRole('button', { name: '2023' }).click();
    await expect(page.locator('.heading-div')).toContainText('March 2023');
    expect(await sliderYears(page)).toEqual(['1990', '2023']);
    await page.locator('#dataset-buttons').getByRole('button', { name: '2026' }).click();
    await expect(page.locator('.heading-div')).toContainText('August 2026');
    expect(await sliderYears(page)).toEqual(['1990', '2026']);
});
