import { expect, test, type Page } from '@playwright/test';
import { openApp, openSettings, setSliderYears, switchScene } from './app';

const playButton = (page: Page) => page.locator('.toggle-div.animation-button');
const label = (page: Page) => page.locator('.animation-label');
const shownIcon = (page: Page) => playButton(page).locator('.show');

/** Remembered Animation settings, as the settings panel would store them. */
async function withAnimationSettings(page: Page, animation: { duration?: number, loop?: boolean, playOnStart?: boolean }): Promise<void> {
    await page.addInitScript((value) => localStorage.setItem('climate-helix.state', value), JSON.stringify({ version: 1, animation }));
}

async function labelYear(page: Page): Promise<number> {
    return Number((await label(page).textContent())!.slice(-4));
}

test('the Play/Pause button is only shown in the Helix view', async ({ page }) => {
    await openApp(page);
    await expect(playButton(page)).toBeVisible();
    await switchScene(page, 'Charts');
    await expect(playButton(page)).toBeHidden();
    await switchScene(page, 'Diff');
    await expect(playButton(page)).toBeHidden();
    await switchScene(page, 'Helix');
    await expect(playButton(page)).toBeVisible();
});

test('Play grows the helix with a year label, Pause holds it', async ({ page }) => {
    // 60 s for 1880-2026: about 2.5 years per second.
    await withAnimationSettings(page, { duration: 60 });
    await openApp(page);
    await expect(label(page)).toBeHidden();
    await expect(shownIcon(page)).toHaveId('play-icon');

    await playButton(page).click();
    await expect(shownIcon(page)).toHaveId('pause-icon');
    await expect(label(page)).toHaveText(/^[A-Z][a-z]{2} 18\d\d$/);
    await expect.poll(() => labelYear(page)).toBeGreaterThan(1882);

    await playButton(page).click();
    await expect(shownIcon(page)).toHaveId('play-icon');
    const paused = await label(page).textContent();
    await page.waitForTimeout(1000);
    await expect(label(page)).toHaveText(paused!);
});

test('the animation stops with the complete helix at the end', async ({ page }) => {
    await withAnimationSettings(page, { duration: 2 });
    await openApp(page);
    await playButton(page).click();
    await expect(label(page)).toBeVisible();
    await expect(label(page)).toBeHidden({ timeout: 10_000 });
    await expect(shownIcon(page)).toHaveId('play-icon');
});

test('changing the year range while playing shows the complete helix', async ({ page }) => {
    await withAnimationSettings(page, { duration: 60 });
    await openApp(page);
    await playButton(page).click();
    await expect(label(page)).toBeVisible();
    await setSliderYears(page, 1950, 2000);
    await expect(label(page)).toBeHidden();
    await expect(shownIcon(page)).toHaveId('play-icon');
});

test('a theme switch does not interrupt the animation', async ({ page }) => {
    await withAnimationSettings(page, { duration: 60 });
    await openApp(page);
    await playButton(page).click();
    await expect(label(page)).toBeVisible();
    await page.locator('.toggle-div.themes').click();
    await page.waitForTimeout(500);
    await expect(label(page)).toBeVisible();
    await expect(shownIcon(page)).toHaveId('pause-icon');
});

test('leaving the Helix view pauses the animation', async ({ page }) => {
    await withAnimationSettings(page, { duration: 60 });
    await openApp(page);
    await playButton(page).click();
    await expect(label(page)).toBeVisible();
    await switchScene(page, 'Charts');
    await switchScene(page, 'Helix');
    await expect(shownIcon(page)).toHaveId('play-icon');
    await expect(label(page)).toBeVisible();
});

test('Play on start runs once and is remembered across reloads', async ({ page }) => {
    await openApp(page);
    await openSettings(page);
    const gui = page.locator('#gui');
    await gui.getByRole('button', { name: /Animation/ }).click();
    await expect(gui.getByText('Duration (s)')).toBeVisible();
    await expect(gui.getByRole('checkbox', { name: 'Loop' })).not.toBeChecked();
    await gui.getByRole('checkbox', { name: 'Play on start' }).check();

    await page.reload();
    await expect(label(page)).toBeVisible();
    await expect(shownIcon(page)).toHaveId('pause-icon');
    await openSettings(page);
    await gui.getByRole('button', { name: /Animation/ }).click();
    await expect(gui.getByRole('checkbox', { name: 'Play on start' })).toBeChecked();
});

test('Play on start stops at the end even with loop on', async ({ page }) => {
    await withAnimationSettings(page, { duration: 2, loop: true, playOnStart: true });
    await page.goto('./');
    await expect(label(page)).toBeVisible();
    await expect(label(page)).toBeHidden({ timeout: 10_000 });
    await page.waitForTimeout(2000);
    await expect(label(page)).toBeHidden();
    await expect(shownIcon(page)).toHaveId('play-icon');
});
