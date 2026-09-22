import { Events, Scene, Showcase } from "./Enums";
import { Settings } from "./Settings";
import { GISSParser } from "./GISSParser";
import { ChartControl } from "./ChartControl";
import { SceneSwitcher } from "./SceneSwitcher";

/** The three validated categorical chart colors, assigned positionally. */
const CHART_COLOR_VARS = ['var(--chart-color-1)', 'var(--chart-color-2)', 'var(--chart-color-3)'];

/**
 * The Diff scene's content: a baseline-snapshot picker, then one chart per
 * region showing how each other snapshot differs from that baseline, for the
 * years they both cover - revealing revisions to historical data, not just
 * newly added months. Built lazily on first activation and then just
 * shown/hidden on later scene switches, the same caching approach {@link
 * Imprint} already uses for its own content.
 */
class DiffChartsScene {
    #settings: Settings;
    #sceneSwitcher: SceneSwitcher;
    #container: HTMLElement | undefined;
    #diffChartsContainer: HTMLElement | undefined;
    #baselineDate: string | undefined;
    #xDomain: [number, number] = [0, 1];

    constructor(settings: Settings, sceneSwitcher: SceneSwitcher) {
        this.#settings = settings;
        this.#sceneSwitcher = sceneSwitcher;
        document.body.addEventListener(Events.SCENE_CHANGED.toString(), () => this.onSceneChanged());
    }

    private onSceneChanged(): void {
        const active = this.#sceneSwitcher.scene === Scene.DIFF;
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
        this.#xDomain = [this.#settings.globalFirstYear, this.#settings.globalLastYear];

        // The info panel dims this inner wrapper, not `container` itself -
        // `container`'s own background must stay fully opaque so it keeps
        // fully hiding the (always-rendering) helix canvas behind it.
        const content = document.createElement('div');
        content.className = 'full-scene-content';
        container.appendChild(content);

        const heading = document.createElement('h2');
        heading.className = 'chart-scene-heading';
        heading.textContent = 'Differences between dataset snapshots';
        content.appendChild(heading);

        const picker = document.createElement('div');
        picker.className = 'chart-baseline-picker';
        content.appendChild(picker);

        const dates = this.#settings.dateOptions;
        this.#baselineDate = this.#baselineDate ?? dates[dates.length - 1];
        const buttons = new Map<string, HTMLButtonElement>();
        dates.forEach((date) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'dataset-button';
            button.textContent = date;
            button.classList.toggle('active', date === this.#baselineDate);
            button.addEventListener('click', () => {
                if (this.#baselineDate === date) {
                    return;
                }
                this.#baselineDate = date;
                buttons.forEach((otherButton, otherDate) => otherButton.classList.toggle('active', otherDate === date));
                this.renderDiffCharts();
            });
            buttons.set(date, button);
            picker.appendChild(button);
        });

        this.#diffChartsContainer = document.createElement('div');
        content.appendChild(this.#diffChartsContainer);
        this.renderDiffCharts();
    }

    private renderDiffCharts(): void {
        if (!this.#diffChartsContainer || !this.#baselineDate) {
            return;
        }
        this.#diffChartsContainer.innerHTML = '';
        const baseline = this.#baselineDate;
        const dates = this.#settings.dateOptions;

        for (const showcase of Object.values(Showcase)) {
            const baselineMap = this.monthlyMap(baseline, showcase);
            const series = dates
                .filter((date) => date !== baseline)
                .map((date) => {
                    const otherMap = this.monthlyMap(date, showcase);
                    const points = [...otherMap.entries()]
                        .filter(([x]) => baselineMap.has(x))
                        .map(([x, value]) => ({ x, y: value - baselineMap.get(x)! }));
                    return { label: date, color: this.dateColorVar(date), points };
                });

            const block = document.createElement('div');
            this.#diffChartsContainer.appendChild(block);
            new ChartControl(block, {
                title: `${showcase} - relative to the ${baseline} baseline`,
                series,
                xDomain: this.#xDomain,
                yZeroLine: true,
                autoScaleVisible: true,
                autoScaleDefault: true,
                movingAverageVisible: true,
                movingAverageDefault: true,
                xResolution: 'month',
            });
        }
    }

    /** Monthly resolution (not the annual mean) so per-month revisions aren't averaged away. */
    private monthlyMap(date: string, showcase: Showcase): Map<number, number> {
        const series = new GISSParser(this.#settings.datasets[date].csv[showcase]).monthlySeries;
        return new Map(series.map((entry) => [entry.x, entry.value]));
    }

    /** Each snapshot keeps the same color regardless of which one is picked as baseline. */
    private dateColorVar(date: string): string {
        const index = this.#settings.dateOptions.indexOf(date);
        return CHART_COLOR_VARS[index % CHART_COLOR_VARS.length];
    }
}

export { DiffChartsScene };
