import { expect, test } from '@playwright/test';
import { openApp, openSection, openSettings, pickRegion } from './app';

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
        await pickRegion(page, region);
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

test('the icon buttons have names that follow their state', async ({ page }) => {
    await openApp(page);
    await expect(page.getByRole('button', { name: 'Show information' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open settings' })).toBeVisible();
    await expect(page.getByRole('button', { name: /^Switch to (light|dark) theme$/ })).toBeVisible();
    await page.getByRole('button', { name: 'Play' }).click();
    await expect(page.getByRole('button', { name: 'Pause' })).toBeVisible();
    await page.getByRole('button', { name: 'Open settings' }).click();
    await expect(page.getByRole('button', { name: 'Close settings' })).toBeVisible();
});

test('the info panel opens and closes with the keyboard', async ({ page }) => {
    await openApp(page);
    await page.getByRole('button', { name: 'Show information' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#info-div')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close information' })).toBeVisible();
});

test('the settings panel opens and closes with the gear, Escape and the h key', async ({ page }) => {
    await openApp(page);
    const panel = page.locator('#settings-panel');
    await page.getByRole('button', { name: 'Open settings' }).click();
    await expect(panel).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(panel).toBeHidden();
    await expect(page.getByRole('button', { name: 'Open settings' })).toBeVisible();
    await page.keyboard.press('h');
    await expect(panel).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close settings' })).toBeVisible();
    await page.getByRole('button', { name: 'Close settings' }).click();
    await expect(panel).toBeHidden();
});

test('the settings panel keeps the theme and gear buttons usable, and shows the changelog', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await openApp(page);
    await openSettings(page);
    await page.locator('.toggle-div.themes').click();
    await expect(page.locator('body')).toHaveClass(/\bdark\b/);
    await page.locator('#settings-panel').getByRole('button', { name: /^v\d+\.\d+\.\d+ · Changelog$/ }).click();
    await expect(page.locator('.overlay-page.changelog')).toBeVisible();
    // Escape closes the changelog first; the panel stays open underneath.
    await page.keyboard.press('Escape');
    await expect(page.locator('.overlay-page.changelog')).toHaveCount(0);
    await expect(page.locator('#settings-panel')).toBeVisible();
});

test('the settings panel follows the dataset buttons below the helix', async ({ page }) => {
    await openApp(page);
    await openSettings(page);
    const panel = page.locator('#settings-panel');
    await page.locator('#dataset-buttons').getByRole('button', { name: '2023' }).click();
    await expect(panel.getByRole('button', { name: '2023-09-03' })).toHaveAttribute('aria-pressed', 'true');
    await panel.getByRole('button', { name: '2024-10-22' }).click();
    await expect(page.locator('.heading-div')).toHaveText('Land-Ocean: Global Means (September 2024)');
});

test('the view settings redraw the helix and are remembered', async ({ page }) => {
    await openApp(page);
    await openSettings(page);
    await openSection(page, 'View');
    const panel = page.locator('#settings-panel');
    await panel.getByRole('checkbox', { name: 'Month axis' }).uncheck();
    await panel.getByRole('slider', { name: 'Year ticks' }).fill('8');
    await expect(panel.getByRole('slider', { name: 'Year ticks' }).locator('xpath=following-sibling::output')).toHaveText('8');
    await page.waitForTimeout(400);
    await page.reload();
    await openSettings(page);
    await openSection(page, 'View');
    await expect(panel.getByRole('checkbox', { name: 'Month axis' })).not.toBeChecked();
    await expect(panel.getByRole('slider', { name: 'Year ticks' })).toHaveValue('8');
});

test('Advanced holds the geometry, remembered across reloads', async ({ page }) => {
    await openApp(page);
    await openSettings(page);
    await openSection(page, 'Advanced');
    const panel = page.locator('#settings-panel');
    await expect(panel.getByRole('checkbox', { name: 'Wireframe' })).not.toBeChecked();
    await expect(panel.getByRole('checkbox', { name: 'Faces' })).toBeChecked();
    await expect(panel.getByRole('checkbox', { name: 'Inertia' })).toBeChecked();
    await expect(panel.getByRole('slider', { name: 'Rotation speed' })).toHaveValue('3');
    await panel.getByRole('checkbox', { name: 'Wireframe' }).check();
    await panel.getByRole('slider', { name: 'Radius factor' }).fill('1.5');
    await expect(panel.getByRole('slider', { name: 'Radius factor' }).locator('xpath=following-sibling::output')).toHaveText('1.50');
    await page.waitForTimeout(400);
    await page.reload();
    await openSettings(page);
    await openSection(page, 'Advanced');
    await expect(panel.getByRole('checkbox', { name: 'Wireframe' })).toBeChecked();
    await expect(panel.getByRole('slider', { name: 'Radius factor' })).toHaveValue('1.5');
});
