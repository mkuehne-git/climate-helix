import { expect, test, type Page } from '@playwright/test';
import { APP_VERSION, openSettings } from './app';

// A browser set to German, with this version's news already seen.
test.use({ locale: 'de-DE' });

const heading = (page: Page) => page.locator('.heading-div');
const languageSelect = (page: Page, label: string) => page.locator('#gui .lil-controller', { hasText: label }).locator('select');

async function openGerman(page: Page): Promise<string[]> {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
    // Seeded once per page: a reload must see what the app stored (the chosen language).
    await page.addInitScript((value) => {
        if (sessionStorage.getItem('seeded') === null) {
            sessionStorage.setItem('seeded', '1');
            localStorage.setItem('climate-helix.state', value);
        }
    }, JSON.stringify({ version: 1, lastSeenVersion: APP_VERSION }));
    await page.goto('./');
    await expect(heading(page)).toContainText('Land und Ozean');
    return errors;
}

test('a German browser gets the app in German', async ({ page }) => {
    const errors = await openGerman(page);
    await expect(heading(page)).toHaveText('Land und Ozean: Global (August 2026)');
    expect(await page.evaluate(() => document.documentElement.lang)).toBe('de');
    await expect(page.getByRole('button', { name: 'Ansicht Diagramme' })).toBeVisible();

    await page.locator('.toggle-div.info-button').click();
    await expect(page.locator('#info-div')).toContainText('Jede Windung der Helix steht für ein Jahr');
    await expect(page.locator('#info-div #data-end-date')).toHaveText('August 2026');
    await page.locator('.toggle-div.info-button').click();

    await openSettings(page);
    const gui = page.locator('#gui');
    await expect(gui.getByRole('button', { name: 'Standardwerte wiederherstellen' })).toBeVisible();
    await expect(gui.locator('.lil-title', { hasText: /^Ansicht$/ })).toBeVisible();
    // lil-gui uses the option labels as the <select>'s values.
    await expect(languageSelect(page, 'Sprache')).toHaveValue('Automatisch');
    expect(errors).toEqual([]);
});

test('the charts use German numbers and region names', async ({ page }) => {
    await openGerman(page);
    await page.getByRole('button', { name: 'Ansicht Diagramme' }).click();
    const legend = page.locator('.full-scene.show .chart-legend').first();
    await expect(legend).toContainText('Nordhalbkugel');
    await expect(page.locator('.full-scene.show .chart-axis-label-y').first()).toHaveText(/^[+-]?\d+(,\d+)? °C$/);
});

test('the Language setting switches to English and back to automatic, remembered across reloads', async ({ page }) => {
    await openGerman(page);
    await openSettings(page);
    await Promise.all([page.waitForEvent('load'), languageSelect(page, 'Sprache').selectOption({ label: 'English' })]);
    await expect(heading(page)).toHaveText('Land-Ocean: Global Means (August 2026)');
    expect(await page.evaluate(() => document.documentElement.lang)).toBe('en');

    await page.reload();
    await expect(heading(page)).toHaveText('Land-Ocean: Global Means (August 2026)');

    await openSettings(page);
    await Promise.all([page.waitForEvent('load'), languageSelect(page, 'Language').selectOption({ label: 'Automatic' })]);
    await expect(heading(page)).toHaveText('Land und Ozean: Global (August 2026)');
});
