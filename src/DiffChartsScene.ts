import { Events, Scene, Showcase } from "./Enums";
import { Settings } from "./Settings";
import { GISSParser } from "./GISSParser";
import { ChartControl } from "./ChartControl";
import { SceneSwitcher } from "./SceneSwitcher";
import { YearRangeSlider } from "./YearRangeSlider";

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
    #charts: ChartControl[] = [];
    #startYear = 0;
    #endYear = 0;
    /** Newest monthly x value across all snapshots (e.g. 2026.58), so the full-range view doesn't end on an empty extra year. */
    #dataMaxX = 0;

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
        this.#startYear = this.#settings.globalFirstYear;
        this.#endYear = this.#settings.globalLastYear;
        this.#dataMaxX = Math.max(...this.#settings.dateOptions.map((date) => {
            const series = new GISSParser(this.#settings.datasets[date].csv[Showcase.GLOBAL]).monthlySeries;
            return series[series.length - 1]?.x ?? 0;
        }));

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

        const controls = document.createElement('div');
        controls.className = 'chart-scene-controls';
        content.appendChild(controls);

        const scene = this;
        new YearRangeSlider(controls, {
            min: this.#settings.globalFirstYear,
            max: this.#settings.globalLastYear,
            get start() { return scene.#startYear; },
            get end() { return scene.#endYear; },
            setStart: (year) => {
                this.#startYear = Math.max(this.#settings.globalFirstYear, Math.min(year, this.#endYear));
                this.applyXDomain();
            },
            setEnd: (year) => {
                this.#endYear = Math.min(this.#settings.globalLastYear, Math.max(year, this.#startYear));
                this.applyXDomain();
            },
        });

        const picker = document.createElement('div');
        picker.className = 'chart-baseline-picker';
        controls.appendChild(picker);

        const dates = this.#settings.dateOptions;
        this.#baselineDate = this.#baselineDate ?? dates[dates.length - 1];
        const buttons = new Map<string, HTMLButtonElement>();
        dates.forEach((date) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'dataset-button';
            button.textContent = String(new Date(date).getFullYear());
            button.title = date;
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
        this.#charts.forEach((chart) => chart.dispose());
        this.#charts = [];
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
            this.#charts.push(new ChartControl(block, {
                title: `${showcase} - baseline ${baseline}`,
                series,
                xDomain: this.xDomain(),
                yZeroLine: true,
                autoScaleDefault: true,
                movingAverageVisible: true,
                movingAverageDefault: true,
                xResolution: 'month',
            }));
        }
    }

    /** The selected years are inclusive, so the axis runs to the end of the end year - capped at the newest data. */
    private xDomain(): [number, number] {
        return [this.#startYear, Math.min(this.#endYear + 1, this.#dataMaxX)];
    }

    private applyXDomain(): void {
        const domain = this.xDomain();
        this.#charts.forEach((chart) => chart.setXDomain(domain));
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
