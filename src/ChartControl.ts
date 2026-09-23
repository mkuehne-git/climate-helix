const SVG_NS = 'http://www.w3.org/2000/svg';

// The viewBox width tracks the actual rendered pixel width (see the
// ResizeObserver in render()), so 1 viewBox unit is 1 real CSS pixel -
// stroke widths and font sizes stay visually constant instead of scaling up
// with the container, and a wider chart gets genuinely more x-axis detail
// (more ticks, more resolvable space between points) rather than just a
// bigger version of the same layout. DEFAULT_WIDTH is only the pre-measurement
// fallback for the very first paint.
const DEFAULT_WIDTH = 800;
const HEIGHT = 320;
const MARGIN = { top: 16, right: 16, bottom: 34, left: 52 };
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
let nextClipId = 0;

type ChartPoint = { x: number, y: number };
type ChartSeries = { label: string, color: string, points: ChartPoint[] };
type ChartConfig = {
    title: string,
    series: ChartSeries[],
    /** Draws a heavier reference line at y=0 (used by the diff charts). */
    yZeroLine?: boolean,
    /** Overrides the x-domain instead of deriving it from the series data (used to keep year gridlines aligned across stacked charts). */
    xDomain?: [number, number],
    /** Shows the "Auto-scale" checkbox above the y-axis, letting the viewer rescale it to only the currently-checked legend series. */
    autoScaleVisible?: boolean,
    /** The auto-scale checkbox's initial state. Only meaningful when `autoScaleVisible` is set. */
    autoScaleDefault?: boolean,
    /** Shows the "Moving average" checkbox, overlaying a smoothed trend line per visible series and dimming the raw (noisy) lines. */
    movingAverageVisible?: boolean,
    /** The moving-average checkbox's initial state. Only meaningful when `movingAverageVisible` is set. */
    movingAverageDefault?: boolean,
    /** The moving average's centered window, in data points. Defaults to 12 (a trailing+leading year of monthly points). */
    movingAverageWindow?: number,
    /** Whether each series point's `x` is a whole year or a year+month fraction (Jan = .0 .. Dec = 11/12) - only affects the hover tooltip's title. Defaults to 'year'. */
    xResolution?: 'year' | 'month',
};

const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * A reusable, dependency-free SVG line chart: gridlines, axis ticks, one
 * stroked path per series, a legend, and a hover crosshair/tooltip. Colors
 * and chrome are inline `var(--...)` references, so light/dark theming and
 * resizing both fall out of CSS - no redraw is needed for either.
 */
class ChartControl {
    #container: HTMLElement;
    #svg: SVGSVGElement;
    #tooltip: HTMLDivElement;
    #legend: HTMLDivElement;
    #crosshair: SVGLineElement;
    #markers: SVGCircleElement[] = [];
    #seriesPaths: (SVGPathElement | undefined)[] = [];
    #averagePaths: (SVGPathElement | undefined)[] = [];
    #visible: boolean[] = [];
    #autoScale = false;
    #movingAverage = false;
    #config: ChartConfig;
    #xValues: number[] = [];
    #xDomain: [number, number] = [0, 1];
    #yDomain: [number, number] = [0, 1];
    #width = DEFAULT_WIDTH;
    #resizeObserver: ResizeObserver;
    #clipId = `chart-clip-${nextClipId++}`;
    #pointerMoveHandler = (event: PointerEvent) => this.handlePointerMove(event);
    #pointerLeaveHandler = () => this.hideHover();

    private get plotWidth(): number {
        return this.#width - MARGIN.left - MARGIN.right;
    }

    constructor(container: HTMLElement, config: ChartConfig) {
        this.#container = container;
        this.#container.classList.add('chart-block');
        this.render(config);
    }

    update(config: ChartConfig): void {
        this.#container.innerHTML = '';
        this.render(config);
    }

    /** Zooms the x-axis, keeping the legend, toggles and hover wiring as they are. */
    setXDomain(xDomain: [number, number]): void {
        this.#config = { ...this.#config, xDomain };
        this.redrawPlot();
    }

    dispose(): void {
        this.#resizeObserver?.disconnect();
        this.#svg.removeEventListener('pointermove', this.#pointerMoveHandler);
        this.#svg.removeEventListener('pointerleave', this.#pointerLeaveHandler);
        this.#container.innerHTML = '';
    }

    private render(config: ChartConfig): void {
        this.#config = config;
        this.#visible = config.series.map(() => true);
        this.#autoScale = config.autoScaleVisible ? (config.autoScaleDefault ?? false) : false;
        this.#movingAverage = config.movingAverageVisible ? (config.movingAverageDefault ?? false) : false;

        const title = document.createElement('div');
        title.className = 'chart-title';
        title.textContent = config.title;
        this.#container.appendChild(title);

        const wrapper = document.createElement('div');
        wrapper.className = 'chart-plot-wrapper';
        this.#container.appendChild(wrapper);

        // The wrapper starts at 0 width whenever its scene is still
        // display:none (built lazily before its first activation), so the
        // real width only arrives once it's shown - and again on every
        // later resize (including e.g. a browser window resize).
        this.#resizeObserver?.disconnect();
        this.#resizeObserver = new ResizeObserver((entries) => {
            const width = Math.round(entries[0].contentRect.width);
            if (width > 0 && width !== Math.round(this.#width)) {
                this.#width = width;
                this.#svg.setAttribute('viewBox', `0 0 ${this.#width} ${HEIGHT}`);
                this.redrawPlot();
            }
        });
        this.#resizeObserver.observe(wrapper);

        if (config.autoScaleVisible || config.movingAverageVisible) {
            const options = document.createElement('div');
            options.className = 'chart-options';
            wrapper.appendChild(options);

            if (config.autoScaleVisible) {
                options.appendChild(this.createOptionToggle('Auto-scale', this.#autoScale, (checked) => {
                    this.#autoScale = checked;
                    this.redrawPlot();
                }));
            }
            if (config.movingAverageVisible) {
                options.appendChild(this.createOptionToggle('Moving average', this.#movingAverage, (checked) => {
                    this.#movingAverage = checked;
                    this.redrawPlot();
                }));
            }
        }

        const svg = document.createElementNS(SVG_NS, 'svg') as SVGSVGElement;
        svg.setAttribute('viewBox', `0 0 ${this.#width} ${HEIGHT}`);
        svg.setAttribute('class', 'chart-svg');
        wrapper.appendChild(svg);
        this.#svg = svg;

        const tooltip = document.createElement('div');
        tooltip.className = 'chart-tooltip';
        tooltip.hidden = true;
        wrapper.appendChild(tooltip);
        this.#tooltip = tooltip;

        this.redrawPlot();

        const legend = document.createElement('div');
        legend.className = 'chart-legend';
        config.series.forEach((series, index) => {
            const item = document.createElement('label');
            item.className = 'chart-legend-item';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = true;
            checkbox.className = 'chart-legend-checkbox';
            checkbox.style.accentColor = series.color;
            checkbox.setAttribute('aria-label', `Show ${series.label}`);
            checkbox.addEventListener('change', () => this.setSeriesVisible(index, checkbox.checked));
            item.appendChild(checkbox);
            item.appendChild(document.createTextNode(series.label));
            legend.appendChild(item);
        });
        this.#container.appendChild(legend);
        this.#legend = legend;

        svg.addEventListener('pointermove', this.#pointerMoveHandler);
        svg.addEventListener('pointerleave', this.#pointerLeaveHandler);
    }

    private createOptionToggle(label: string, checked: boolean, onChange: (checked: boolean) => void): HTMLLabelElement {
        const toggle = document.createElement('label');
        toggle.className = 'chart-option-toggle';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = checked;
        checkbox.addEventListener('change', () => onChange(checkbox.checked));
        toggle.appendChild(checkbox);
        toggle.appendChild(document.createTextNode(label));
        return toggle;
    }

    /** (Re)computes the domains and redraws the grid, series and hover layer - everything that depends on the y-scale. Leaves the title/legend/tooltip DOM untouched. */
    private redrawPlot(): void {
        this.computeDomains();
        this.#svg.innerHTML = '';

        // An explicit x-domain can be narrower than the data (zoomed), so
        // lines must not spill over the axis labels. Padded by 2px so a line
        // running exactly to the plot edge keeps its full stroke width.
        const clip = document.createElementNS(SVG_NS, 'clipPath');
        clip.setAttribute('id', this.#clipId);
        const clipRect = document.createElementNS(SVG_NS, 'rect');
        clipRect.setAttribute('x', String(MARGIN.left - 2));
        clipRect.setAttribute('y', String(MARGIN.top));
        clipRect.setAttribute('width', String(this.plotWidth + 4));
        clipRect.setAttribute('height', String(PLOT_HEIGHT));
        clip.appendChild(clipRect);
        this.#svg.appendChild(clip);

        this.drawGrid(this.#svg);
        if (this.#config.yZeroLine) {
            this.drawZeroLine(this.#svg);
        }
        this.#seriesPaths = this.#config.series.map((series) => this.drawSeries(this.#svg, series));
        this.#seriesPaths.forEach((path, index) => {
            if (path && !this.#visible[index]) {
                path.style.display = 'none';
            }
        });

        this.#svg.classList.toggle('showing-average', this.#movingAverage);
        this.#averagePaths = this.#movingAverage
            ? this.#config.series.map((series) => this.drawSeriesAverage(this.#svg, series))
            : [];
        this.#averagePaths.forEach((path, index) => {
            if (path && !this.#visible[index]) {
                path.style.display = 'none';
            }
        });

        this.drawHoverLayer(this.#svg);
        this.hideHover();
    }

    private computeDomains(): void {
        const xValueSet = new Set<number>();
        const explicitDomain = this.#config.xDomain;
        let yMin = Infinity;
        let yMax = -Infinity;
        this.#config.series.forEach((series, index) => {
            const includeInYRange = !this.#autoScale || this.#visible[index];
            for (const point of series.points) {
                if (explicitDomain && (point.x < explicitDomain[0] || point.x > explicitDomain[1])) {
                    continue;
                }
                xValueSet.add(point.x);
                if (includeInYRange) {
                    yMin = Math.min(yMin, point.y);
                    yMax = Math.max(yMax, point.y);
                }
            }
        });
        if (this.#config.yZeroLine) {
            yMin = Math.min(yMin, 0);
            yMax = Math.max(yMax, 0);
        }
        this.#xValues = Array.from(xValueSet).sort((a, b) => a - b);
        if (this.#config.xDomain) {
            this.#xDomain = this.#config.xDomain;
        } else {
            const xMin = this.#xValues[0] ?? 0;
            const xMax = this.#xValues[this.#xValues.length - 1] ?? 1;
            this.#xDomain = [xMin, xMax];
        }

        if (!Number.isFinite(yMin) || !Number.isFinite(yMax)) {
            yMin = -1;
            yMax = 1;
        }
        // The 0.02°C floor only guards the degenerate flat-line case (a
        // single value repeated, or yZeroLine with an all-zero series) - it
        // must stay far below the diff charts' real span (hundredths of a
        // degree) or it would swamp them the way a helix-scaled 0.1°C floor
        // did, making auto-scale a no-op regardless of which series show.
        const padding = Math.max((yMax - yMin) * 0.1, 0.02);
        this.#yDomain = [yMin - padding, yMax + padding];
    }

    private scaleX(x: number): number {
        const [min, max] = this.#xDomain;
        return MARGIN.left + (max === min ? 0.5 : (x - min) / (max - min)) * this.plotWidth;
    }

    private scaleY(y: number): number {
        const [min, max] = this.#yDomain;
        return MARGIN.top + (1 - (max === min ? 0.5 : (y - min) / (max - min))) * PLOT_HEIGHT;
    }

    private drawGrid(svg: SVGSVGElement): void {
        const yTicks = niceTicks(this.#yDomain[0], this.#yDomain[1], 5);
        const yDecimals = decimalsForStep(yTicks.length > 1 ? yTicks[1] - yTicks[0] : 1);
        for (const tick of yTicks) {
            const y = this.scaleY(tick);
            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('x1', String(MARGIN.left));
            line.setAttribute('x2', String(this.#width - MARGIN.right));
            line.setAttribute('y1', String(y));
            line.setAttribute('y2', String(y));
            line.setAttribute('class', 'chart-gridline');
            svg.appendChild(line);

            const label = document.createElementNS(SVG_NS, 'text');
            label.setAttribute('x', String(MARGIN.left - 8));
            label.setAttribute('y', String(y));
            label.setAttribute('class', 'chart-axis-label chart-axis-label-y');
            label.textContent = `${tick > 0 ? '+' : ''}${tick.toFixed(yDecimals)}°C`;
            svg.appendChild(label);
        }

        // More width -> more x ticks, so a wider chart shows genuinely more
        // detail (finer year gridlines) instead of just a bigger version of
        // the same handful of labels.
        const xTickCount = Math.max(6, Math.round(this.plotWidth / 150));
        const xTicks = niceTicks(this.#xDomain[0], this.#xDomain[1], xTickCount, 1);
        for (const tick of xTicks) {
            const x = this.scaleX(tick);
            const label = document.createElementNS(SVG_NS, 'text');
            label.setAttribute('x', String(x));
            label.setAttribute('y', String(HEIGHT - MARGIN.bottom + 18));
            label.setAttribute('class', 'chart-axis-label chart-axis-label-x');
            label.textContent = String(Math.round(tick));
            svg.appendChild(label);
        }

        const axis = document.createElementNS(SVG_NS, 'line');
        axis.setAttribute('x1', String(MARGIN.left));
        axis.setAttribute('x2', String(this.#width - MARGIN.right));
        axis.setAttribute('y1', String(HEIGHT - MARGIN.bottom));
        axis.setAttribute('y2', String(HEIGHT - MARGIN.bottom));
        axis.setAttribute('class', 'chart-axis');
        svg.appendChild(axis);
    }

    private drawZeroLine(svg: SVGSVGElement): void {
        const y = this.scaleY(0);
        const line = document.createElementNS(SVG_NS, 'line');
        line.setAttribute('x1', String(MARGIN.left));
        line.setAttribute('x2', String(this.#width - MARGIN.right));
        line.setAttribute('y1', String(y));
        line.setAttribute('y2', String(y));
        line.setAttribute('class', 'chart-zero-line');
        svg.appendChild(line);
    }

    private drawSeries(svg: SVGSVGElement, series: ChartSeries): SVGPathElement | undefined {
        const points = [...series.points].sort((a, b) => a.x - b.x);
        return this.drawPath(svg, points, 'chart-series-line', series.color);
    }

    /** Draws a centered moving-average overlay for `series`, smoothing out point-to-point noise. */
    private drawSeriesAverage(svg: SVGSVGElement, series: ChartSeries): SVGPathElement | undefined {
        const points = [...series.points].sort((a, b) => a.x - b.x);
        const window = this.#config.movingAverageWindow ?? 12;
        return this.drawPath(svg, movingAverage(points, window), 'chart-series-average', series.color);
    }

    private drawPath(svg: SVGSVGElement, points: ChartPoint[], className: string, color: string): SVGPathElement | undefined {
        if (points.length === 0) {
            return undefined;
        }
        const d = points
            .map((point, index) => `${index === 0 ? 'M' : 'L'}${this.scaleX(point.x).toFixed(2)} ${this.scaleY(point.y).toFixed(2)}`)
            .join(' ');
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', className);
        path.setAttribute('stroke', color);
        path.setAttribute('clip-path', `url(#${this.#clipId})`);
        svg.appendChild(path);
        return path;
    }

    private drawHoverLayer(svg: SVGSVGElement): void {
        const crosshair = document.createElementNS(SVG_NS, 'line');
        crosshair.setAttribute('y1', String(MARGIN.top));
        crosshair.setAttribute('y2', String(HEIGHT - MARGIN.bottom));
        crosshair.setAttribute('class', 'chart-crosshair');
        crosshair.style.display = 'none';
        svg.appendChild(crosshair);
        this.#crosshair = crosshair;

        this.#markers = this.#config.series.map((series) => {
            const marker = document.createElementNS(SVG_NS, 'circle');
            marker.setAttribute('r', '4');
            marker.setAttribute('class', 'chart-hover-marker');
            marker.setAttribute('fill', series.color);
            marker.style.display = 'none';
            svg.appendChild(marker);
            return marker;
        });

        const capture = document.createElementNS(SVG_NS, 'rect');
        capture.setAttribute('x', String(MARGIN.left));
        capture.setAttribute('y', String(MARGIN.top));
        capture.setAttribute('width', String(this.plotWidth));
        capture.setAttribute('height', String(PLOT_HEIGHT));
        capture.setAttribute('class', 'chart-hover-capture');
        svg.appendChild(capture);
    }

    private handlePointerMove(event: PointerEvent): void {
        if (this.#xValues.length === 0) {
            return;
        }
        const rect = this.#svg.getBoundingClientRect();
        if (rect.width === 0) {
            return;
        }
        // The viewBox width equals the rendered width (see the
        // ResizeObserver in render()), so clientX maps to viewBox units 1:1
        // - no cross-multiplication needed.
        const localX = event.clientX - rect.left;
        const [min, max] = this.#xDomain;
        const dataX = min + ((localX - MARGIN.left) / this.plotWidth) * (max - min);
        const nearest = this.#xValues.reduce((closest, value) =>
            Math.abs(value - dataX) < Math.abs(closest - dataX) ? value : closest
        );

        const x = this.scaleX(nearest);
        this.#crosshair.setAttribute('x1', String(x));
        this.#crosshair.setAttribute('x2', String(x));
        this.#crosshair.style.display = 'block';

        const rows: string[] = [];
        this.#config.series.forEach((series, index) => {
            const marker = this.#markers[index];
            if (!this.#visible[index]) {
                marker.style.display = 'none';
                return;
            }
            const point = series.points.find((candidate) => candidate.x === nearest);
            if (point) {
                marker.setAttribute('cx', String(x));
                marker.setAttribute('cy', String(this.scaleY(point.y)));
                marker.style.display = 'block';
                rows.push(`<span class="chart-tooltip-swatch" style="background:${series.color}"></span>${series.label}: ${point.y > 0 ? '+' : ''}${point.y.toFixed(2)}°C`);
            } else {
                marker.style.display = 'none';
            }
        });

        const title = this.#config.xResolution === 'month' ? formatMonthYear(nearest) : String(Math.round(nearest));
        this.#tooltip.innerHTML = `<div class="chart-tooltip-title">${title}</div>${rows.map((row) => `<div>${row}</div>`).join('')}`;
        this.#tooltip.hidden = false;
        this.#tooltip.style.left = `${x}px`;
    }

    private setSeriesVisible(index: number, visible: boolean): void {
        this.#visible[index] = visible;
        if (this.#autoScale) {
            this.redrawPlot();
            return;
        }
        this.#seriesPaths[index]?.style.setProperty('display', visible ? '' : 'none');
        this.#averagePaths[index]?.style.setProperty('display', visible ? '' : 'none');
        if (!visible) {
            this.#markers[index].style.display = 'none';
        }
    }

    private hideHover(): void {
        this.#crosshair.style.display = 'none';
        this.#markers.forEach((marker) => marker.style.display = 'none');
        this.#tooltip.hidden = true;
    }
}

/**
 * A centered moving average over `points` (already sorted by `x`): each
 * output point is the mean of up to `window` neighbors centered on it,
 * shrinking near the edges rather than padding with missing data.
 */
function movingAverage(points: ChartPoint[], window: number): ChartPoint[] {
    const half = Math.floor(window / 2);
    return points.map((point, index) => {
        const start = Math.max(0, index - half);
        const end = Math.min(points.length - 1, index + half);
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += points[i].y;
        }
        return { x: point.x, y: sum / (end - start + 1) };
    });
}

/** Formats a year+month-fraction x value (see `GISSParser.monthlySeries`) as e.g. "Feb 1990". */
function formatMonthYear(x: number): string {
    const month = Math.round((x % 1) * 12) % 12;
    const year = Math.round(x - month / 12);
    return `${MONTH_ABBR[month]} ${year}`;
}

/** How many decimal places a "nice" tick step needs to display distinct labels. */
function decimalsForStep(step: number): number {
    if (step <= 0 || step >= 1) {
        return 0;
    }
    return Math.ceil(-Math.log10(step));
}

/** Generates ~`count` "nice" round tick values covering [min, max]. */
function niceTicks(min: number, max: number, count: number, minStep = 0): number[] {
    if (min === max) {
        return [min];
    }
    const span = max - min;
    const rawStep = span / count;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const residual = rawStep / magnitude;
    const step = Math.max((residual > 5 ? 10 : residual > 2 ? 5 : residual > 1 ? 2 : 1) * magnitude, minStep);
    const start = Math.ceil(min / step) * step;
    const ticks: number[] = [];
    for (let value = start; value <= max + step * 1e-6; value += step) {
        ticks.push(Math.round(value * 1e6) / 1e6);
    }
    return ticks;
}

export { ChartControl };
export type { ChartConfig, ChartSeries, ChartPoint };
