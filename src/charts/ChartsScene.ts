import { Scene, Showcase } from "../Enums";
import { Settings } from "../settings/Settings";
import { GISSParser } from "../data/GISSParser";
import { ChartControl } from "./ChartControl";
import { ChartScene } from "./ChartScene";
import { SceneSwitcher } from "../ui/SceneSwitcher";
import { persistentState } from "../settings/PersistentState";
import { CHART_COLOR_VARS } from "./chartColors";
import { regionName, t } from "../i18n";

/** Each region keeps its color, in the regions' order. */
const REGION_COLOR_VARS = Object.fromEntries(Object.values(Showcase).map((showcase, index) => [showcase, CHART_COLOR_VARS[index]])) as Record<Showcase, string>;

/** The Charts scene: one time-series chart per dataset snapshot, all three regions overlaid. */
class ChartsScene extends ChartScene {
    constructor(settings: Settings, sceneSwitcher: SceneSwitcher) {
        super(settings, sceneSwitcher, Scene.CHARTS);
    }

    protected get heading(): string {
        return t('charts.heading');
    }

    protected buildContent(content: HTMLElement): void {
        const datesNewestFirst = [...this.settings.dateOptions].reverse();
        for (const date of datesNewestFirst) {
            const dataset = this.settings.datasets[date];
            const block = document.createElement('div');
            content.appendChild(block);
            const series = Object.values(Showcase).map((showcase) => ({
                id: showcase,
                label: regionName(showcase),
                color: REGION_COLOR_VARS[showcase],
                points: new GISSParser(dataset.csv[showcase]).annualSeries.map((entry) => ({ x: entry.year, y: entry.value })),
            }));
            const id = `charts:${date}`;
            this.charts.push(new ChartControl(block, {
                title: t('charts.title', { date }),
                series,
                xDomain: this.xDomain(),
                state: persistentState.state.charts?.[id],
                onStateChange: (state) => persistentState.updateChart(id, state),
            }));
        }
    }

    /** Annual points sit on whole years, so the selected (inclusive) years map directly onto the axis. */
    protected xDomain(): [number, number] {
        return [this.startYear, this.endYear];
    }
}

export { ChartsScene };
