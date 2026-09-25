/** How long a looping animation rests on the complete helix before it starts over. */
const LOOP_PAUSE_MS = 1000;

/**
 * The state of the helix creation animation: how much of the helix is drawn
 * (`progress`, 0 = nothing, 1 = complete) and whether it is growing.
 *
 * It lives outside the helix meshes on purpose: many things rebuild the
 * meshes (theme switches, settings, the year slider), and a rebuilt mesh
 * picks up the current progress from here instead of restarting. It has no
 * DOM or Three.js dependencies; `main.ts` advances it from the render loop
 * with {@link update} and applies it with {@link drawCount}.
 */
class HelixAnimation {
    /** Seconds for the whole selected year range; see {@link playSeconds}. */
    playSeconds = 10;
    loop = false;

    #progress = 1;
    #playing = false;
    /** A one-off run (play on start), which stops at the end even when looping. */
    #once = false;
    #lastTime: number | undefined;
    #holdUntil: number | undefined;
    #reducedMotion: () => boolean;

    constructor(reducedMotion: () => boolean = () => false) {
        this.#reducedMotion = reducedMotion;
    }

    get progress(): number {
        return this.#progress;
    }

    get playing(): boolean {
        return this.#playing;
    }

    get complete(): boolean {
        return this.#progress >= 1;
    }

    /**
     * Starts growing the helix: from the start when it is complete, otherwise
     * from where it was paused. With reduced motion, it completes at once.
     */
    play({ once = false }: { once?: boolean } = {}): void {
        if (this.#reducedMotion()) {
            this.finish();
            return;
        }
        if (this.complete) {
            this.#progress = 0;
        }
        this.#playing = true;
        this.#once = once;
        this.#lastTime = undefined;
        this.#holdUntil = undefined;
    }

    pause(): void {
        this.#playing = false;
        this.#holdUntil = undefined;
    }

    toggle(): void {
        if (this.#playing) {
            this.pause();
        } else {
            this.play();
        }
    }

    /** Stops and shows the complete helix, e.g. when the user changes what is shown. */
    finish(): void {
        this.#progress = 1;
        this.#playing = false;
        this.#once = false;
        this.#holdUntil = undefined;
    }

    /**
     * Advances the animation to `now` (milliseconds, e.g. `performance.now()`).
     * @returns whether the progress or the playing state changed
     */
    update(now: number): boolean {
        if (!this.#playing) {
            return false;
        }
        const last = this.#lastTime ?? now;
        this.#lastTime = now;
        if (this.#holdUntil !== undefined) {
            if (now < this.#holdUntil) {
                return false;
            }
            this.#holdUntil = undefined;
            this.#progress = 0;
            return true;
        }
        if (now === last) {
            return false;
        }
        this.#progress = Math.min(1, this.#progress + (now - last) / 1000 / this.playSeconds);
        if (this.complete) {
            if (this.loop && !this.#once) {
                this.#holdUntil = now + LOOP_PAUSE_MS;
            } else {
                this.#playing = false;
                this.#once = false;
            }
        }
        return true;
    }
}

/**
 * The seconds a run takes for the selected years: `duration` is the time for
 * the dataset's full year span, so a shorter selection plays proportionally shorter.
 */
function playSeconds(duration: number, selectedYears: number, datasetYears: number): number {
    return duration * selectedYears / Math.max(datasetYears, 1);
}

/**
 * The number of indices to draw for `progress`. `HelixGeometry` builds the
 * tube segment by segment along the curve, and each segment adds
 * `radialSegments` quads of 2 triangles, so drawing a prefix of the index
 * buffer shows the helix up to that point.
 */
function drawCount(progress: number, tubularSegments: number, radialSegments: number): number {
    const segments = progress >= 1 ? tubularSegments : Math.floor(progress * tubularSegments);
    return segments * radialSegments * 6;
}

/** The index of the curve point (one per month) the growing tip has reached. */
function tipIndex(progress: number, points: number): number {
    return Math.max(0, Math.min(points - 1, Math.floor(progress * (points - 1))));
}

export { HelixAnimation, drawCount, playSeconds, tipIndex };
