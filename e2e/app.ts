import { readFileSync } from 'node:fs';
import { expect, type Page } from '@playwright/test';

/** The app version under test. */
export const APP_VERSION: string = JSON.parse(readFileSync('package.json', 'utf8')).version;

/**
 * Stores a state before the app starts, as a returning user would have it. It
 * includes the current version as seen, so What's new stays closed.
 */
export async function withStoredState(page: Page, state: object): Promise<void> {
    await page.addInitScript((value) => localStorage.setItem('climate-helix.state', value),
        JSON.stringify({ version: 1, lastSeenVersion: APP_VERSION, ...state }));
}

/**
 * Opens the app and collects page errors and console errors. WebGL driver
 * messages are console warnings, not errors, so they are not collected.
 */
export async function openApp(page: Page): Promise<string[]> {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
        if (message.type() === 'error') {
            errors.push(message.text());
        }
    });
    await page.goto('./');
    await expect(page.locator('.heading-div')).toContainText('Land-Ocean');
    return errors;
}

export type SceneName = 'Helix' | 'Charts' | 'Diff';

export async function switchScene(page: Page, scene: SceneName): Promise<void> {
    await page.getByRole('button', { name: `${scene} view` }).click();
    if (scene !== 'Helix') {
        await expect(page.locator('.full-scene.show')).toBeVisible();
    }
}

/** The year slider of the active scene: the Helix one sits in #dataset-controls, the chart ones in their scene. */
export function activeSlider(page: Page) {
    return page.locator('.full-scene.show .year-slider, .container-div:not(.scene-not-helix) #dataset-controls .year-slider').first();
}

export async function sliderYears(page: Page): Promise<string[]> {
    return activeSlider(page).locator('.year-slider-label').allTextContents();
}

/** Moves both handles like a user would; range inputs only fire `input` on real interaction, so it is dispatched here. */
export async function setSliderYears(page: Page, start: number, end: number): Promise<void> {
    const slider = activeSlider(page);
    for (const [position, year] of [['start', start], ['end', end]] as const) {
        await slider.locator(`.year-slider-input.${position}`).evaluate((input: HTMLInputElement, value) => {
            input.value = String(value);
            input.dispatchEvent(new Event('input'));
        }, year);
    }
}

/** Opens the settings panel; the button reacts after its click animation. */
export async function openSettings(page: Page): Promise<void> {
    await page.locator('.toggle-div.settings').click();
    await expect(page.locator('#gui')).toBeVisible();
}
