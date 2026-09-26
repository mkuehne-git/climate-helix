/**
 * The year range state behind the year sliders. It keeps two ranges:
 *
 * - the *requested* range, last chosen on any view's slider and shared by
 *   all views, within the years of all datasets;
 * - the helix's range, which is the requested range clamped to the active
 *   dataset's years.
 *
 * Keeping the request unclamped lets a wider range come back after
 * switching to a shorter dataset (or a chart view) and back.
 */
class YearRange {
    readonly globalFirstYear: number;
    readonly globalLastYear: number;
    #datasetFirstYear: number;
    #datasetLastYear: number;
    #firstYear: number;
    #lastYear: number;
    #requestedFirstYear: number;
    #requestedLastYear: number;

    constructor(globalFirstYear: number, globalLastYear: number, datasetFirstYear: number, datasetLastYear: number) {
        this.globalFirstYear = globalFirstYear;
        this.globalLastYear = globalLastYear;
        this.#datasetFirstYear = datasetFirstYear;
        this.#datasetLastYear = datasetLastYear;
        this.#firstYear = datasetFirstYear;
        this.#lastYear = datasetLastYear;
        this.#requestedFirstYear = globalFirstYear;
        this.#requestedLastYear = globalLastYear;
    }

    get firstYear(): number {
        return this.#firstYear;
    }

    get lastYear(): number {
        return this.#lastYear;
    }

    get datasetFirstYear(): number {
        return this.#datasetFirstYear;
    }

    get datasetLastYear(): number {
        return this.#datasetLastYear;
    }

    /** The shared year range, as last chosen on any view's year slider. */
    get requested(): [number, number] {
        return [this.#requestedFirstYear, this.#requestedLastYear];
    }

    /**
     * Switches to another dataset's years and clamps the requested range to them.
     * @returns whether the helix's year range changed
     */
    setDataset(datasetFirstYear: number, datasetLastYear: number): boolean {
        this.#datasetFirstYear = datasetFirstYear;
        this.#datasetLastYear = datasetLastYear;
        return this.clamp();
    }

    /**
     * Clamps the requested range to the active dataset.
     * @returns whether the helix's year range changed
     */
    clamp(): boolean {
        const previous = [this.#firstYear, this.#lastYear];
        this.#firstYear = Math.max(this.#datasetFirstYear, Math.min(this.#requestedFirstYear, this.#datasetLastYear));
        this.#lastYear = Math.max(this.#firstYear, Math.min(this.#requestedLastYear, this.#datasetLastYear));
        return previous[0] !== this.#firstYear || previous[1] !== this.#lastYear;
    }

    /** Sets the helix's start year from its slider; it also becomes the requested start. */
    setStart(year: number): void {
        this.#firstYear = Math.max(this.#datasetFirstYear, Math.min(year, this.#lastYear));
        this.#requestedFirstYear = this.#firstYear;
    }

    /** Sets the helix's end year from its slider; it also becomes the requested end. */
    setEnd(year: number): void {
        this.#lastYear = Math.min(this.#datasetLastYear, Math.max(year, this.#firstYear));
        this.#requestedLastYear = this.#lastYear;
    }

    /** Records a year range chosen on a chart view's slider, for the other views to pick up when they become active. */
    request(firstYear: number, lastYear: number): void {
        this.#requestedFirstYear = firstYear;
        this.#requestedLastYear = lastYear;
    }

    /** Resets the requested range to all years. The helix picks it up via {@link clamp}. */
    reset(): void {
        this.request(this.globalFirstYear, this.globalLastYear);
    }

    /**
     * The requested range for storage. An end at the limit of all datasets is
     * left out, so a range running to the newest year still does once a newer
     * snapshot adds years.
     */
    get stored(): { first?: number, last?: number } {
        return {
            first: this.#requestedFirstYear > this.globalFirstYear ? this.#requestedFirstYear : undefined,
            last: this.#requestedLastYear < this.globalLastYear ? this.#requestedLastYear : undefined,
        };
    }

    /** Requests a stored range, see {@link stored}, within the years of all datasets. The helix picks it up via {@link clamp}. */
    restore(stored: { first?: number, last?: number }): void {
        const limit = (year: number | undefined, fallback: number) =>
            Math.max(this.globalFirstYear, Math.min(Math.round(year ?? fallback), this.globalLastYear));
        const first = limit(stored.first, this.globalFirstYear);
        this.request(first, Math.max(first, limit(stored.last, this.globalLastYear)));
    }
}

export { YearRange };
