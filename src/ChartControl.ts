const SVG_NS = 'http://www.w3.org/2000/svg';

const WIDTH = 800;
const HEIGHT = 320;
const MARGIN = { top: 16, right: 16, bottom: 34, left: 52 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

type ChartPoint = { x: number, y: number };
type ChartSeries = { label: string, color: string, points: ChartPoint[] };
type ChartConfig = {
    title: string,
    series: ChartSeries[],
    /** Draws a heavier reference line at y=0 (used by the diff charts). */
    yZeroLine?: boolean,
    /** Overrides the x-domain instead of deriving it from the series data (used to keep year gridlines aligned across stacked charts). */
    xDomain?: [number, number],
};

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
    #visible: boolean[] = [];
    #config: ChartConfig;
    #xValues: number[] = [];
    #xDomain: [number, number] = [0, 1];
    #yDomain: [number, number] = [0, 1];
    #pointerMoveHandler = (event: PointerEvent) => this.handlePointerMove(event);
    #pointerLeaveHandler = () => this.hideHover();

    constructor(container: HTMLElement, config: ChartConfig) {
        this.#container = container;
        this.#container.classList.add('chart-block');
        this.render(config);
    }

    update(config: ChartConfig): void {
        this.#container.innerHTML = '';
        this.render(config);
    }

    dispose(): void {
        this.#svg.removeEventListener('pointermove', this.#pointerMoveHandler);
        this.#svg.removeEventListener('pointerleave', this.#pointerLeaveHandler);
        this.#container.innerHTML = '';
    }

    private render(config: ChartConfig): void {
        this.#config = config;
        this.#visible = config.series.map(() => true);
        this.computeDomains();

        const title = document.createElement('div');
        title.className = 'chart-title';
        title.textContent = config.title;
        this.#container.appendChild(title);

        const wrapper = document.createElement('div');
        wrapper.className = 'chart-plot-wrapper';
        this.#container.appendChild(wrapper);

        const svg = document.createElementNS(SVG_NS, 'svg') as SVGSVGElement;
        svg.setAttribute('viewBox', `0 0 ${WIDTH} ${HEIGHT}`);
        svg.setAttribute('class', 'chart-svg');
        wrapper.appendChild(svg);
        this.#svg = svg;

        this.drawGrid(svg);
        if (config.yZeroLine) {
            this.drawZeroLine(svg);
        }
        this.#seriesPaths = config.series.map((series) => this.drawSeries(svg, series));
        this.drawHoverLayer(svg);

        const tooltip = document.createElement('div');
        tooltip.className = 'chart-tooltip';
        tooltip.hidden = true;
        wrapper.appendChild(tooltip);
        this.#tooltip = tooltip;

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

    private computeDomains(): void {
        const xValueSet = new Set<number>();
        let yMin = Infinity;
        let yMax = -Infinity;
        for (const series of this.#config.series) {
            for (const point of series.points) {
                xValueSet.add(point.x);
                yMin = Math.min(yMin, point.y);
                yMax = Math.max(yMax, point.y);
            }
        }
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
        const padding = Math.max((yMax - yMin) * 0.1, 0.1);
        this.#yDomain = [yMin - padding, yMax + padding];
    }

    private scaleX(x: number): number {
        const [min, max] = this.#xDomain;
        return MARGIN.left + (max === min ? 0.5 : (x - min) / (max - min)) * PLOT_WIDTH;
    }

    private scaleY(y: number): number {
        const [min, max] = this.#yDomain;
        return MARGIN.top + (1 - (max === min ? 0.5 : (y - min) / (max - min))) * PLOT_HEIGHT;
    }

    private drawGrid(svg: SVGSVGElement): void {
        const yTicks = niceTicks(this.#yDomain[0], this.#yDomain[1], 5);
        for (const tick of yTicks) {
            const y = this.scaleY(tick);
            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('x1', String(MARGIN.left));
            line.setAttribute('x2', String(WIDTH - MARGIN.right));
            line.setAttribute('y1', String(y));
            line.setAttribute('y2', String(y));
            line.setAttribute('class', 'chart-gridline');
            svg.appendChild(line);

            const label = document.createElementNS(SVG_NS, 'text');
            label.setAttribute('x', String(MARGIN.left - 8));
            label.setAttribute('y', String(y));
            label.setAttribute('class', 'chart-axis-label chart-axis-label-y');
            label.textContent = `${tick > 0 ? '+' : ''}${tick.toFixed(1)}°C`;
            svg.appendChild(label);
        }

        const xTicks = niceTicks(this.#xDomain[0], this.#xDomain[1], 6);
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
        axis.setAttribute('x2', String(WIDTH - MARGIN.right));
        axis.setAttribute('y1', String(HEIGHT - MARGIN.bottom));
        axis.setAttribute('y2', String(HEIGHT - MARGIN.bottom));
        axis.setAttribute('class', 'chart-axis');
        svg.appendChild(axis);
    }

    private drawZeroLine(svg: SVGSVGElement): void {
        const y = this.scaleY(0);
        const line = document.createElementNS(SVG_NS, 'line');
        line.setAttribute('x1', String(MARGIN.left));
        line.setAttribute('x2', String(WIDTH - MARGIN.right));
        line.setAttribute('y1', String(y));
        line.setAttribute('y2', String(y));
        line.setAttribute('class', 'chart-zero-line');
        svg.appendChild(line);
    }

    private drawSeries(svg: SVGSVGElement, series: ChartSeries): SVGPathElement | undefined {
        const points = [...series.points].sort((a, b) => a.x - b.x);
        if (points.length === 0) {
            return undefined;
        }
        const d = points
            .map((point, index) => `${index === 0 ? 'M' : 'L'}${this.scaleX(point.x).toFixed(2)} ${this.scaleY(point.y).toFixed(2)}`)
            .join(' ');
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', 'chart-series-line');
        path.setAttribute('stroke', series.color);
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
        capture.setAttribute('width', String(PLOT_WIDTH));
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
        const localX = (event.clientX - rect.left) * (WIDTH / rect.width);
        const [min, max] = this.#xDomain;
        const dataX = min + ((localX - MARGIN.left) / PLOT_WIDTH) * (max - min);
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

        this.#tooltip.innerHTML = `<div class="chart-tooltip-title">${Math.round(nearest)}</div>${rows.map((row) => `<div>${row}</div>`).join('')}`;
        this.#tooltip.hidden = false;
        const pixelX = (x / WIDTH) * rect.width;
        this.#tooltip.style.left = `${pixelX}px`;
    }

    private setSeriesVisible(index: number, visible: boolean): void {
        this.#visible[index] = visible;
        this.#seriesPaths[index]?.style.setProperty('display', visible ? '' : 'none');
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

/** Generates ~`count` "nice" round tick values covering [min, max]. */
function niceTicks(min: number, max: number, count: number): number[] {
    if (min === max) {
        return [min];
    }
    const span = max - min;
    const rawStep = span / count;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const residual = rawStep / magnitude;
    const step = (residual > 5 ? 10 : residual > 2 ? 5 : residual > 1 ? 2 : 1) * magnitude;
    const start = Math.ceil(min / step) * step;
    const ticks: number[] = [];
    for (let value = start; value <= max + step * 1e-6; value += step) {
        ticks.push(Math.round(value * 1e6) / 1e6);
    }
    return ticks;
}

export { ChartControl };
export type { ChartConfig, ChartSeries, ChartPoint };
