import { expect, test, type Page } from '@playwright/test';
import { openApp } from './app';

const overlay = (page: Page) => page.locator('.overlay-page.changelog');
const closeButton = (page: Page) => page.locator('.changelog div.overlay-close');

async function openChangelog(page: Page): Promise<void> {
    await page.locator('#version-info').click();
    await expect(overlay(page)).toBeVisible();
}

for (const [name, viewport] of [['desktop', { width: 1280, height: 800 }], ['phone', { width: 390, height: 780 }]] as const) {
    test(`the version label opens the changelog, the X button closes it (${name})`, async ({ page }) => {
        await page.setViewportSize(viewport);
        const errors = await openApp(page);
        const version = (await page.locator('#version-info').textContent())!;
        await openChangelog(page);
        await expect(overlay(page).locator('h2').first()).toContainText(version);
        const box = (await closeButton(page).boundingBox())!;
        const onTop = await page.evaluate(({ x, y }) => !!document.elementFromPoint(x, y)?.closest('.overlay-close'), { x: box.x + box.width / 2, y: box.y + box.height / 3 });
        expect(onTop).toBe(true);
        await closeButton(page).click();
        await expect(overlay(page)).toHaveCount(0);
        await expect(page.locator('#version-info')).toBeVisible();
        expect(errors).toEqual([]);
    });
}

test('Escape closes the changelog', async ({ page }) => {
    await openApp(page);
    await openChangelog(page);
    await page.keyboard.press('Escape');
    await expect(overlay(page)).toHaveCount(0);
});

test('older entries link their commit', async ({ page }) => {
    await openApp(page);
    await openChangelog(page);
    await expect(overlay(page).locator('h2', { hasText: 'v0.11.1' }).locator('a')).toHaveAttribute('href', /\/commit\/133fc63$/);
});
