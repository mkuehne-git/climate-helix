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
 * The Charts scene's content (Section A: one time-series chart per dataset
 * snapshot, all three regions overlaid). Built lazily on first activation and
 * then just shown/hidden on later scene switches, so CSV parsing and SVG
 * rendering happen once, not on every toggle - the same caching approach
 * {@link Imprint} already uses for its own content.
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
        container.className = 'chart-scene';
        parentDiv.appendChild(container);
        this.#container = container;

        const heading = document.createElement('h2');
        heading.className = 'chart-scene-heading';
        heading.textContent = 'Temperature anomaly per dataset snapshot';
        container.appendChild(heading);

        const xDomain: [number, number] = [this.#settings.globalFirstYear, this.#settings.globalLastYear];
        const datesNewestFirst = [...this.#settings.dateOptions].reverse();
        for (const date of datesNewestFirst) {
            const dataset = this.#settings.datasets[date];
            const block = document.createElement('div');
            container.appendChild(block);
            const series = Object.values(Showcase).map((showcase) => ({
                label: showcase,
                color: REGION_COLOR_VARS[showcase],
                points: new GISSParser(dataset.csv[showcase]).annualSeries.map((entry) => ({ x: entry.year, y: entry.value })),
            }));
            new ChartControl(block, {
                title: `${date} snapshot (through ${dataset.endDate})`,
                series,
                xDomain,
            });
        }
    }
}

export { ChartsScene };
