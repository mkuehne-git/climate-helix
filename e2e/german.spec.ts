import { expect, test, type Page } from '@playwright/test';
import { APP_VERSION, openSettings } from './app';

// A browser set to German, with this version's news already seen.
test.use({ locale: 'de-DE' });

const heading = (page: Page) => page.locator('.heading-div');
const languageSelect = (page: Page) => page.locator('#settings-language');

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
    await expect(page.getByRole('button', { name: 'Informationen anzeigen' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Abspielen' })).toBeVisible();

    await page.locator('.toggle-div.info-button').click();
    await expect(page.locator('#info-div')).toContainText('Jede Windung der Helix steht für ein Jahr');
    await expect(page.locator('#info-div #data-end-date')).toHaveText('August 2026');
    await page.locator('.toggle-div.info-button').click();

    await openSettings(page);
    const gui = page.locator('#gui');
    await expect(page.getByRole('heading', { name: 'Einstellungen' })).toBeVisible();
    await expect(page.locator('#settings-panel').getByRole('button', { name: 'Standardwerte wiederherstellen' })).toBeVisible();
    await expect(gui.locator('.lil-title', { hasText: /^Ansicht$/ })).toBeVisible();
    await expect(languageSelect(page)).toHaveValue('auto');
    await expect(page.getByLabel('Sprache')).toBeVisible();
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
    await Promise.all([page.waitForEvent('load'), languageSelect(page).selectOption('en')]);
    await expect(heading(page)).toHaveText('Land-Ocean: Global Means (August 2026)');
    expect(await page.evaluate(() => document.documentElement.lang)).toBe('en');

    await page.reload();
    await expect(heading(page)).toHaveText('Land-Ocean: Global Means (August 2026)');

    await openSettings(page);
    await Promise.all([page.waitForEvent('load'), languageSelect(page).selectOption('auto')]);
    await expect(heading(page)).toHaveText('Land und Ozean: Global (August 2026)');
});
