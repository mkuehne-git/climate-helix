import { Scene, Showcase } from "../Enums";
import { Settings } from "../settings/Settings";
import { GISSParser } from "../data/GISSParser";
import { ChartControl } from "./ChartControl";
import { ChartScene } from "./ChartScene";
import { SceneSwitcher } from "../ui/SceneSwitcher";
import { persistentState } from "../settings/PersistentState";
import { CHART_COLOR_VARS } from "./chartColors";
import { regionName, t } from "../i18n";

/**
 * The Diff scene: a baseline-snapshot picker, then one chart per region
 * showing how each other snapshot differs from that baseline, for the years
 * they both cover - revealing revisions to historical data, not just newly
 * added months.
 */
class DiffChartsScene extends ChartScene {
    #diffChartsContainer: HTMLElement | undefined;
    #baselineDate: string | undefined;
    /** Newest monthly x value across all snapshots (e.g. 2026.58), so the full-range view doesn't end on an empty extra year. */
    #dataMaxX = 0;

    constructor(settings: Settings, sceneSwitcher: SceneSwitcher) {
        super(settings, sceneSwitcher, Scene.DIFF);
    }

    protected get heading(): string {
        return t('diff.heading');
    }

    protected buildContent(content: HTMLElement, controls: HTMLElement): void {
        this.#dataMaxX = Math.max(...this.settings.dateOptions.map((date) => {
            const series = new GISSParser(this.settings.datasets[date].csv[Showcase.GLOBAL]).monthlySeries;
            return series[series.length - 1]?.x ?? 0;
        }));

        const picker = document.createElement('div');
        picker.className = 'chart-baseline-picker';
        controls.appendChild(picker);

        const dates = this.settings.dateOptions;
        const storedBaseline = persistentState.state.diffBaseline;
        this.#baselineDate = this.#baselineDate
            ?? (storedBaseline !== undefined && dates.includes(storedBaseline) ? storedBaseline : dates[dates.length - 1]);
        const buttons = new Map<string, HTMLButtonElement>();
        dates.forEach((date) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'dataset-button';
            button.textContent = String(new Date(date).getFullYear());
            button.title = date;
            button.setAttribute('aria-label', date);
            button.classList.toggle('active', date === this.#baselineDate);
            button.setAttribute('aria-pressed', String(date === this.#baselineDate));
            button.addEventListener('click', () => {
                if (this.#baselineDate === date) {
                    return;
                }
                this.#baselineDate = date;
                persistentState.update({ diffBaseline: date });
                buttons.forEach((otherButton, otherDate) => {
                    otherButton.classList.toggle('active', otherDate === date);
                    otherButton.setAttribute('aria-pressed', String(otherDate === date));
                });
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
        this.charts.forEach((chart) => chart.dispose());
        this.charts = [];
        this.#diffChartsContainer.innerHTML = '';
        const baseline = this.#baselineDate;
        const dates = this.settings.dateOptions;

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
            // Per region, not per baseline: the options apply to whichever baseline is picked.
            const id = `diff:${showcase}`;
            this.charts.push(new ChartControl(block, {
                title: t('diff.title', { region: regionName(showcase), date: baseline }),
                series,
                xDomain: this.xDomain(),
                yZeroLine: true,
                autoScaleDefault: true,
                movingAverageVisible: true,
                movingAverageDefault: true,
                xResolution: 'month',
                state: persistentState.state.charts?.[id],
                onStateChange: (state) => persistentState.updateChart(id, state),
            }));
        }
    }

    /** The selected years are inclusive, so the axis runs to the end of the end year - capped at the newest data. */
    protected xDomain(): [number, number] {
        return [this.startYear, Math.min(this.endYear + 1, this.#dataMaxX)];
    }

    /** Monthly resolution (not the annual mean) so per-month revisions aren't averaged away. */
    private monthlyMap(date: string, showcase: Showcase): Map<number, number> {
        const series = new GISSParser(this.settings.datasets[date].csv[showcase]).monthlySeries;
        return new Map(series.map((entry) => [entry.x, entry.value]));
    }

    /** Each snapshot keeps its own color, oldest first, whichever one is the baseline. */
    private dateColorVar(date: string): string {
        return CHART_COLOR_VARS[this.settings.dateOptions.indexOf(date)];
    }
}

export { DiffChartsScene };
