import { describe, expect, it } from 'vitest';
import { HelixAnimation, drawCount, playSeconds, tipIndex } from '../src/HelixAnimation';

/** An animation taking 10 s, started at t = 0 (the first update only sets the clock). */
function playing(options: { loop?: boolean, once?: boolean } = {}): HelixAnimation {
    const animation = new HelixAnimation();
    animation.playSeconds = 10;
    animation.loop = options.loop ?? false;
    animation.play({ once: options.once });
    animation.update(0);
    return animation;
}

describe('HelixAnimation', () => {
    it('starts complete and idle', () => {
        const animation = new HelixAnimation();
        expect(animation.progress).toBe(1);
        expect(animation.complete).toBe(true);
        expect(animation.playing).toBe(false);
    });

    it('grows from the start over playSeconds', () => {
        const animation = playing();
        expect(animation.progress).toBe(0);
        animation.update(2500);
        expect(animation.progress).toBeCloseTo(0.25, 9);
        animation.update(5000);
        expect(animation.progress).toBeCloseTo(0.5, 9);
    });

    it('stops with the complete helix at the end', () => {
        const animation = playing();
        expect(animation.update(12_000)).toBe(true);
        expect(animation.progress).toBe(1);
        expect(animation.playing).toBe(false);
        expect(animation.update(13_000)).toBe(false);
    });

    it('holds its place while paused and continues from there', () => {
        const animation = playing();
        animation.update(3000);
        animation.pause();
        expect(animation.update(8000)).toBe(false);
        expect(animation.progress).toBeCloseTo(0.3, 9);
        animation.play();
        animation.update(20_000);
        animation.update(21_000);
        // Paused time does not count: 0.3 + 1 s of 10 s.
        expect(animation.progress).toBeCloseTo(0.4, 9);
    });

    it('toggles between playing and paused', () => {
        const animation = playing();
        animation.toggle();
        expect(animation.playing).toBe(false);
        animation.toggle();
        expect(animation.playing).toBe(true);
    });

    it('starts over when played again after completing', () => {
        const animation = playing();
        animation.update(10_000);
        animation.play();
        expect(animation.progress).toBe(0);
        expect(animation.playing).toBe(true);
    });

    it('finish() shows the complete helix and stops (user interaction)', () => {
        const animation = playing();
        animation.update(3000);
        animation.finish();
        expect(animation.progress).toBe(1);
        expect(animation.playing).toBe(false);
    });

    it('with loop, rests on the complete helix for a second and starts over', () => {
        const animation = playing({ loop: true });
        animation.update(10_000);
        expect(animation.progress).toBe(1);
        expect(animation.playing).toBe(true);
        expect(animation.update(10_500)).toBe(false);
        expect(animation.update(11_000)).toBe(true);
        expect(animation.progress).toBe(0);
        animation.update(13_500);
        expect(animation.progress).toBeCloseTo(0.25, 9);
    });

    it('a one-off run (play on start) stops at the end even with loop on', () => {
        const animation = playing({ loop: true, once: true });
        animation.update(10_000);
        expect(animation.playing).toBe(false);
        // A later run by the Play button loops again.
        animation.play();
        animation.update(20_000);
        animation.update(30_000);
        expect(animation.playing).toBe(true);
    });

    it('picks up a changed duration without restarting', () => {
        const animation = playing();
        animation.update(5000);
        animation.playSeconds = 20;
        animation.update(10_000);
        expect(animation.progress).toBeCloseTo(0.75, 9);
    });

    it('completes at once with reduced motion', () => {
        const animation = new HelixAnimation(() => true);
        animation.play();
        expect(animation.progress).toBe(1);
        expect(animation.playing).toBe(false);
    });
});

describe('playSeconds', () => {
    it('plays a shorter selection proportionally shorter', () => {
        expect(playSeconds(10, 147, 147)).toBe(10);
        expect(playSeconds(10, 11, 147)).toBeCloseTo(10 * 11 / 147, 9);
    });
});

describe('drawCount', () => {
    // 3 radial segments: each tubular segment adds 3 quads = 18 indices.
    it('draws whole tube segments up to the progress', () => {
        expect(drawCount(0, 100, 3)).toBe(0);
        expect(drawCount(0.5, 100, 3)).toBe(50 * 18);
        expect(drawCount(0.504, 100, 3)).toBe(50 * 18);
        expect(drawCount(1, 100, 3)).toBe(100 * 18);
    });
});

describe('tipIndex', () => {
    it('maps the progress to the curve point (month) the tip has reached', () => {
        expect(tipIndex(0, 121)).toBe(0);
        expect(tipIndex(0.5, 121)).toBe(60);
        expect(tipIndex(1, 121)).toBe(120);
        expect(tipIndex(0.999, 121)).toBe(119);
    });
});
