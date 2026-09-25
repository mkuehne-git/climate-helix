import { expect, test } from '@playwright/test';
import { openApp, openSettings } from './app';

test('loads without errors and shows the newest global dataset', async ({ page }) => {
    const errors = await openApp(page);
    await expect(page.locator('.heading-div')).toHaveText('Land-Ocean: Global Means (August 2026)');
    await expect(page.locator('canvas').first()).toBeVisible();
    await expect(page.locator('#version-info')).toHaveText(/^v\d+\.\d+\.\d+$/);
    expect(errors).toEqual([]);
});

test('dataset buttons switch the snapshot', async ({ page }) => {
    await openApp(page);
    const heading = page.locator('.heading-div');
    await page.locator('#dataset-buttons').getByRole('button', { name: '2023' }).click();
    await expect(heading).toHaveText('Land-Ocean: Global Means (March 2023)');
    await page.locator('#dataset-buttons').getByRole('button', { name: '2024' }).click();
    await expect(heading).toHaveText('Land-Ocean: Global Means (September 2024)');
});

test('the region selector switches between the three regions', async ({ page }) => {
    await openApp(page);
    await openSettings(page);
    const heading = page.locator('.heading-div');
    for (const [region, title] of [
        ['Northern HS', 'Land-Ocean: Northern Hemispheric Means'],
        ['Southern HS', 'Land-Ocean: Southern Hemispheric Means'],
        ['Global', 'Land-Ocean: Global Means'],
    ]) {
        await page.locator('#gui').getByRole('button', { name: /Region: / }).click();
        await page.locator('#gui').getByRole('checkbox', { name: region, exact: true }).check();
        await expect(heading).toHaveText(`${title} (August 2026)`);
    }
});

test('the theme switcher toggles light and dark', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await openApp(page);
    const body = page.locator('body');
    await expect(body).toHaveClass(/\blight\b/);
    await page.locator('.toggle-div.themes').click();
    await expect(body).toHaveClass(/\bdark\b/);
    await page.locator('.toggle-div.themes').click();
    await expect(body).toHaveClass(/\blight\b/);
});

test('the info panel opens with the end date and closes again', async ({ page }) => {
    await openApp(page);
    const info = page.locator('#info-div');
    await page.locator('.toggle-div.info-button').click();
    await expect(info).toBeVisible();
    await expect(info.locator('#data-end-date')).toHaveText('August 2026');
    await expect(page.locator('.scene-switcher')).toBeHidden();
    await page.locator('.toggle-div.info-button').click();
    await expect(info).toBeHidden();
    await expect(page.locator('.scene-switcher')).toBeVisible();
});

test('the service worker registers', async ({ page }) => {
    await openApp(page);
    const scope = await page.evaluate(async () => (await navigator.serviceWorker.ready).scope);
    expect(scope).toMatch(/\/climate-helix\/$/);
});
