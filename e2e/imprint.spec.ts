import { expect, test, type Page } from '@playwright/test';
import { openApp, openSettings } from './app';

// Needs the private src/imprint-gen.js; with the CI stub there is no imprint to show.

async function openImprint(page: Page): Promise<void> {
    await openSettings(page);
    await page.locator('#gui').getByRole('button', { name: 'Imprint' }).click();
    await expect(page.locator('.imprint')).toBeVisible();
}

const closeButton = (page: Page) => page.locator('.imprint div.imprint-close');

/** The close button is on top: a click at its center reaches it rather than a button underneath (v0.8.6). */
async function expectCloseButtonOnTop(page: Page): Promise<void> {
    await expect(closeButton(page)).toBeVisible();
    const box = (await closeButton(page).boundingBox())!;
    const onTop = await page.evaluate(({ x, y }) => !!document.elementFromPoint(x, y)?.closest('.imprint-close'), { x: box.x + box.width / 2, y: box.y + box.height / 3 });
    expect(onTop).toBe(true);
}

for (const [name, viewport] of [['desktop', { width: 1280, height: 800 }], ['phone', { width: 390, height: 780 }]] as const) {
    test(`the X button closes the imprint (${name})`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await openApp(page);
        await openImprint(page);
        await expectCloseButtonOnTop(page);
        await closeButton(page).click();
        await expect(page.locator('.imprint')).toHaveCount(0);
        await expect(page.locator('.toggle-div.info-button')).toBeVisible();
    });
}

test('the imprint covers the info button and scene switcher (v0.8.6)', async ({ page }) => {
    await openApp(page);
    await openImprint(page);
    const info = (await page.locator('.toggle-div.info-button').boundingBox())!;
    const hit = await page.evaluate(({ x, y }) => document.elementFromPoint(x, y)?.closest('.imprint') !== null, { x: info.x + info.width / 2, y: info.y + 4 });
    expect(hit).toBe(true);
});

test('Escape closes the imprint, even with the focus still on the Imprint button', async ({ page }) => {
    await openApp(page);
    await openImprint(page);
    await page.keyboard.press('Escape');
    await expect(page.locator('.imprint')).toHaveCount(0);
});

test('the X button survives a burst of window resizes (v0.8.6)', async ({ page }) => {
    await openApp(page);
    await openImprint(page);
    for (let width = 1200; width >= 700; width -= 50) {
        await page.setViewportSize({ width, height: 600 });
    }
    // Let the debounced redraw (250 ms after the last resize) replace the
    // overlay first; a click during it is lost with the old overlay.
    await page.waitForTimeout(400);
    await expect(page.locator('.imprint')).toHaveCount(1);
    await expect(page.locator('.imprint canvas')).toBeVisible();
    await expectCloseButtonOnTop(page);
    await closeButton(page).click();
    await expect(page.locator('.imprint')).toHaveCount(0);
});
