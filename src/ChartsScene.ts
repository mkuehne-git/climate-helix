import { Events, Scene, Showcase } from "./Enums";
import { Settings } from "./Settings";
import { GISSParser } from "./GISSParser";
import { ChartControl } from "./ChartControl";
import { SceneSwitcher } from "./SceneSwitcher";

const REGION_COLOR_VARS: Record<Showcase, string> = {
    [Showcase.GLOBAL]: 'var(--chart-color-1)',
    [Showcase.NORTHERN_HEMISPHERE]: 'var(--chart-color-2)',
    [Showcase.SOUTHERN_HEMISPHERE]: 'var(--chart-color-3)',
};

/**
 * The Charts scene's content: one time-series chart per dataset snapshot,
 * all three regions overlaid. Built lazily on first activation and then just
 * shown/hidden on later scene switches, so CSV parsing and SVG rendering
 * happen once, not on every toggle - the same caching approach {@link
 * Imprint} already uses for its own content.
 */
class ChartsScene {
    #settings: Settings;
    #sceneSwitcher: SceneSwitcher;
    #container: HTMLElement | undefined;

    constructor(settings: Settings, sceneSwitcher: SceneSwitcher) {
        this.#settings = settings;
        this.#sceneSwitcher = sceneSwitcher;
        document.body.addEventListener(Events.SCENE_CHANGED.toString(), () => this.onSceneChanged());
    }

    private onSceneChanged(): void {
        const active = this.#sceneSwitcher.scene === Scene.CHARTS;
        if (active && !this.#container) {
            this.build();
        }
        this.#container?.classList.toggle('show', active);
    }

    private build(): void {
        const parentDiv = document.querySelector('.container-div') || document.body;
        const container = document.createElement('div');
        container.className = 'full-scene';
        parentDiv.appendChild(container);
        this.#container = container;

        // The info panel dims this inner wrapper, not `container` itself -
        // `container`'s own background must stay fully opaque so it keeps
        // fully hiding the (always-rendering) helix canvas behind it.
        const content = document.createElement('div');
        content.className = 'full-scene-content';
        container.appendChild(content);

        const heading = document.createElement('h2');
        heading.className = 'chart-scene-heading';
        heading.textContent = 'Temperature anomaly per dataset snapshot';
        content.appendChild(heading);

        const xDomain: [number, number] = [this.#settings.globalFirstYear, this.#settings.globalLastYear];
        const datesNewestFirst = [...this.#settings.dateOptions].reverse();
        for (const date of datesNewestFirst) {
            const dataset = this.#settings.datasets[date];
            const block = document.createElement('div');
            content.appendChild(block);
            const series = Object.values(Showcase).map((showcase) => ({
                label: showcase,
                color: REGION_COLOR_VARS[showcase],
                points: new GISSParser(dataset.csv[showcase]).annualSeries.map((entry) => ({ x: entry.year, y: entry.value })),
            }));
            new ChartControl(block, {
                title: `${date} snapshot`,
                series,
                xDomain,
            });
        }
    }
}

export { ChartsScene };
