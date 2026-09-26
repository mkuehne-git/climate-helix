import { expect, test, type Page } from '@playwright/test';
import { APP_VERSION, openApp, openSettings, switchScene, withStoredState } from '../e2e/app';

// The README screenshots, see playwright.screenshots.config.ts. A phone-sized
// viewport, like the app is mostly used; the legend one is wider for the
// settings panel.
const PHONE = { width: 390, height: 844 };
const IMAGES = 'src/images';

/** Lets the helix and the charts finish drawing, with the pointer out of the way (no tooltips). */
async function settle(page: Page): Promise<void> {
    await page.mouse.move(0, 0);
    await page.waitForTimeout(1000);
}

async function shoot(page: Page, name: string): Promise<void> {
    await settle(page);
    await page.screenshot({ path: `${IMAGES}/${name}.png` });
}

test.beforeEach(async ({ page }) => {
    // A returning user who has seen this version, so What's new stays closed.
    await withStoredState(page, {});
});

test('helix', async ({ page }) => {
    await page.setViewportSize(PHONE);
    await openApp(page);
    await shoot(page, 'climate-helix');
});

test('legend settings', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 700 });
    await openApp(page);
    await openSettings(page);
    const gui = page.locator('#gui');
    await gui.locator('.lil-title', { hasText: /^View$/ }).click();
    await gui.locator('.lil-title', { hasText: /^Legend$/ }).click();
    await shoot(page, 'climate-helix-legend');
});

test('charts', async ({ page }) => {
    await page.setViewportSize(PHONE);
    await openApp(page);
    await switchScene(page, 'Charts');
    await shoot(page, 'climate-helix-charts');
});

test('diff', async ({ page }) => {
    await page.setViewportSize(PHONE);
    await openApp(page);
    await switchScene(page, 'Diff');
    await shoot(page, 'climate-helix-diff');
});

test('what\'s new', async ({ page }) => {
    await page.setViewportSize(PHONE);
    // Overrides the version seen: someone updating from v0.11.1.
    await page.addInitScript(() => localStorage.setItem('climate-helix.state', JSON.stringify({ version: 1, lastSeenVersion: '0.11.1' })));
    await openApp(page);
    await expect(page.locator('.changelog h2').first()).toContainText(`v${APP_VERSION}`);
    await shoot(page, 'climate-helix-whats-new');
});
