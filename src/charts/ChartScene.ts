import { Events, Scene } from "../Enums";
import { Settings } from "../settings/Settings";
import { ChartControl } from "./ChartControl";
import { SceneSwitcher } from "../ui/SceneSwitcher";
import { YearRangeSlider } from "../ui/YearRangeSlider";

/**
 * A full-page chart view (Charts, Diff): its heading, the year range slider
 * it shares with the other views, and its charts below. Built lazily on
 * first activation and then just shown/hidden on later scene switches, so
 * CSV parsing and SVG rendering happen once, not on every toggle.
 */
abstract class ChartScene {
    protected readonly settings: Settings;
    protected charts: ChartControl[] = [];
    /** The selected years, inclusive. */
    protected startYear = 0;
    protected endYear = 0;
    #scene: Scene;
    #sceneSwitcher: SceneSwitcher;
    #container: HTMLElement | undefined;
    #yearRangeSlider: YearRangeSlider | undefined;

    constructor(settings: Settings, sceneSwitcher: SceneSwitcher, scene: Scene) {
        this.settings = settings;
        this.#sceneSwitcher = sceneSwitcher;
        this.#scene = scene;
        document.body.addEventListener(Events.SCENE_CHANGED.toString(), () => this.onSceneChanged());
    }

    protected abstract get heading(): string;

    /** Adds the scene's own controls (next to the year slider) and its charts (to `content`). */
    protected abstract buildContent(content: HTMLElement, controls: HTMLElement): void;

    /** The x-axis for the selected years. */
    protected abstract xDomain(): [number, number];

    protected applyXDomain(): void {
        const domain = this.xDomain();
        this.charts.forEach((chart) => chart.setXDomain(domain));
    }

    private onSceneChanged(): void {
        const active = this.#sceneSwitcher.scene === this.#scene;
        if (active && !this.#container) {
            this.build();
        } else if (active) {
            this.adoptYearRange();
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
        // fully hiding the helix canvas behind it.
        const content = document.createElement('div');
        content.className = 'full-scene-content';
        container.appendChild(content);

        const heading = document.createElement('h2');
        heading.className = 'chart-scene-heading';
        heading.textContent = this.heading;
        content.appendChild(heading);

        const controls = document.createElement('div');
        controls.className = 'chart-scene-controls';
        content.appendChild(controls);

        [this.startYear, this.endYear] = this.settings.requestedYearRange;
        const settings = this.settings;
        const scene = this;
        this.#yearRangeSlider = new YearRangeSlider(controls, {
            min: settings.globalFirstYear,
            max: settings.globalLastYear,
            get start() { return scene.startYear; },
            get end() { return scene.endYear; },
            setStart: (year) => {
                this.startYear = Math.max(settings.globalFirstYear, Math.min(year, this.endYear));
                settings.requestYearRange(this.startYear, this.endYear);
                this.applyXDomain();
            },
            setEnd: (year) => {
                this.endYear = Math.min(settings.globalLastYear, Math.max(year, this.startYear));
                settings.requestYearRange(this.startYear, this.endYear);
                this.applyXDomain();
            },
            reset: () => {
                settings.resetYearRange();
                [this.startYear, this.endYear] = settings.requestedYearRange;
                this.applyXDomain();
            },
        });

        this.buildContent(content, controls);
    }

    /** Picks up the year range last chosen on another view's slider. */
    private adoptYearRange(): void {
        const [start, end] = this.settings.requestedYearRange;
        if (start === this.startYear && end === this.endYear) {
            return;
        }
        this.startYear = start;
        this.endYear = end;
        this.#yearRangeSlider?.refresh();
        this.applyXDomain();
    }
}

export { ChartScene };
