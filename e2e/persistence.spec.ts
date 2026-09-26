import { expect, test } from '@playwright/test';
import { openApp, openSettings, setSliderYears, sliderYears, switchScene } from './app';

const heading = (page) => page.locator('.heading-div');

test('settings and state are restored after a reload', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    const errors = await openApp(page);
    await openSettings(page);
    const gui = page.locator('#gui');
    await gui.getByRole('button', { name: /Region: / }).click();
    await gui.getByRole('checkbox', { name: 'Northern HS', exact: true }).check();
    await page.locator('#dataset-buttons').getByRole('button', { name: '2024' }).click();
    await setSliderYears(page, 1950, 2000);
    await page.locator('.toggle-div.themes').click();
    await expect(page.locator('body')).toHaveClass(/\bdark\b/);

    await page.reload();
    await expect(heading(page)).toHaveText('Land-Ocean: Northern Hemispheric Means (September 2024)');
    expect(await sliderYears(page)).toEqual(['1950', '2000']);
    await expect(page.locator('body')).toHaveClass(/\bdark\b/);
    await expect(page.locator('body')).not.toHaveClass(/\blight\b/);
    await openSettings(page);
    await expect(gui.getByRole('button', { name: 'Region: Northern HS' })).toBeVisible();
    expect(errors).toEqual([]);
});

test('the view, Diff baseline and chart options are restored after a reload', async ({ page }) => {
    await openApp(page);
    await switchScene(page, 'Diff');
    const scene = page.locator('.full-scene.show');
    await scene.locator('.chart-baseline-picker').getByRole('button', { name: '2023' }).click();
    const movingAverage = scene.locator('.chart-block').first().getByRole('checkbox', { name: 'Moving average' });
    await movingAverage.uncheck();
    const legend = scene.locator('.chart-block').first().locator('.chart-legend-checkbox').first();
    await legend.uncheck();

    await page.reload();
    await expect(page.locator('.full-scene.show')).toBeVisible();
    await expect(scene.locator('.chart-baseline-picker .dataset-button.active')).toHaveText('2023');
    await expect(movingAverage).not.toBeChecked();
    await expect(legend).not.toBeChecked();
    await expect(page.getByRole('button', { name: 'Diff view' })).toHaveClass(/\bactive\b/);
});

test('Restore defaults forgets everything', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await openApp(page);
    await page.locator('#dataset-buttons').getByRole('button', { name: '2023' }).click();
    await setSliderYears(page, 1950, 2000);
    await page.locator('.toggle-div.themes').click();
    await switchScene(page, 'Charts');

    await openSettings(page);
    page.once('dialog', (dialog) => dialog.accept());
    await Promise.all([
        page.waitForEvent('load'),
        page.locator('#gui').getByRole('button', { name: 'Restore defaults' }).click(),
    ]);
    await expect(heading(page)).toHaveText('Land-Ocean: Global Means (August 2026)');
    await expect(page.locator('.full-scene.show')).toHaveCount(0);
    expect(await sliderYears(page)).toEqual(['1880', '2026']);
    await expect(page.locator('body')).toHaveClass(/\blight\b/);
    expect(await page.evaluate(() => localStorage.getItem('climate-helix.state'))).toBeNull();
});

test('a cancelled Restore defaults keeps the settings', async ({ page }) => {
    await openApp(page);
    await page.locator('#dataset-buttons').getByRole('button', { name: '2023' }).click();
    await openSettings(page);
    page.once('dialog', (dialog) => dialog.dismiss());
    await page.locator('#gui').getByRole('button', { name: 'Restore defaults' }).click();
    await page.reload();
    await expect(heading(page)).toHaveText('Land-Ocean: Global Means (March 2023)');
});
