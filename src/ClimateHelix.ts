import * as THREE from "three";
import { Events } from './Enums';
import { Settings } from './Settings';
import { GISSParser } from './GISSParser';
import { HelixGeometry } from "./HelixGeometry";

const MONTHS = 12;
const sin: number[] = [];
const cos: number[] = [];

type Info = {
    sinX: number,
    cosX: number,
    radius: number,
    temperature: number,
    color: THREE.Color
}

class ClimateHelix {
    private settings: Settings;
    private csv: GISSParser;
    curve: Info[];
    #cog: THREE.Vector3;
    years: number;

    private helixConfiguration: { minT: number, maxT: number, minR: number, maxR: number, height: number };
    #mesh: THREE.Mesh;
    #cold: THREE.Color;
    #zero: THREE.Color;
    #warm: THREE.Color;
    #headingDiv: HTMLElement;

    constructor(settings: Settings, minT: number = -1.0, maxT: number = 1.5, minR: number = 0.4, maxR: number = 1.0, height = 2.5) {
        this.settings = settings;
        this.csv = new GISSParser(settings.showcaseCSV);
        this.helixConfiguration = { minT, maxT, minR, maxR, height };
        this.#cold = settings.cold;
        this.#zero = settings.zero;
        this.#warm = settings.warm;
        this.curve = [];
    }

    public createMesh(options: THREE.MeshBasicMaterialParameters = { wireframe: false, vertexColors: true }): THREE.Mesh {
        this.createCurve();
        const geometry = this.createGeometry();
        if (options.wireframe) {
            options.color = Settings.styledColor('--wireframe-color');
        }
        const [x, y, z] = this.#cog.toArray();
        geometry.translate(-x, -y, -z);
        const material = new THREE.MeshBasicMaterial(options);
        this.#mesh = new THREE.Mesh(geometry, material);
        return this.#mesh;
    }

    private createCurve(): void {
        if (this.curve.length === 0) {
            this.years = this.settings.lastYear - this.settings.firstYear + 1;
            for (let year = this.settings.firstYear; year <= this.settings.lastYear; year++) {
                for (let month = 0; month < 12; month++) {
                    const row = year - this.settings.datasetFirstYear + 1;
                    const v = this.helixPoint(row, month);
                    if (v) {
                        this.curve.push(v);
                    }
                }
            }
            this.#cog = this.centerOfGravity();
        }
    }

    private centerOfGravity(): THREE.Vector3 {
        if (!this.curve || this.curve.length === 0) {
            return new THREE.Vector3(0, 0, 0);
        }
        let x = 0;
        let y = 0;
        let z = 0;
        const cnt = this.curve.length;
        this.curve.forEach((p, index) => {
            x += (p.radius * p.cosX);
            y += (p.radius * p.sinX);
            z += (index / cnt) * this.selectedHeight;
        });
        return new THREE.Vector3(x / cnt, y / cnt, z / cnt + this.zOffset);
    }

    private createGeometry(): HelixGeometry {
        const tubeRadius = this.settings.radiusFactor * this.yearHeight;
        const geometry = new HelixGeometry(new HelixCurve(this), this.settings.tubularSegments * (this.curve.length - 1), tubeRadius, this.settings.radialSegments, false);
        const vcolors = geometry.getAttribute('vColors');
        const colorAttribute = new THREE.BufferAttribute(new Float32Array(vcolors.array), 3)
        geometry.setAttribute('color', colorAttribute)
        return geometry;
    }

    private helixPoint(year: number, month: number): Info | undefined {
        // First column contains year
        const temperature = this.csv.getNumber(year, month + 1);
        if (temperature) {
            const radius = map(this.helixConfiguration.minT, this.helixConfiguration.maxT, this.helixConfiguration.minR, this.helixConfiguration.maxR, temperature);
            const color = temperatureColor(temperature, this.#cold, this.#zero, this.#warm);
            return {
                sinX: sin[month],
                cosX: cos[month],
                radius,
                temperature,
                color
            }
        }
    }

    get height() {
        return this.helixConfiguration.height;
    }

    /**
     * The z-height of one calendar year, held constant across all datasets
     * and year-range selections (based on the full span of the longest
     * available dataset) so that a given year always renders at the same z
     * position, regardless of which dataset or sub-range is shown.
     */
    get yearHeight(): number {
        const globalSpan = this.settings.globalLastYear - this.settings.globalFirstYear;
        return globalSpan > 0 ? this.helixConfiguration.height / globalSpan : this.helixConfiguration.height;
    }

    /** The z-height actually spanned by the currently selected year range. */
    get selectedHeight(): number {
        return this.yearHeight * (this.settings.lastYear - this.settings.firstYear);
    }

    /** The z-offset of the first selected year relative to the oldest year across all datasets. */
    get zOffset(): number {
        return this.yearHeight * (this.settings.firstYear - this.settings.globalFirstYear);
    }

    /**
     * @returns the length of the curve in fraction of years
     */
    get length() {
        return this.curve.length / MONTHS;
    }
    curveIndex(t: number): number {
        return Math.floor((this.curve.length - 1) * t);
    }

    info(t: number): Info {
        return this.curve[this.curveIndex(t)];
    }

    createTitleDiv(container): HTMLElement {
        const HEADING_DIV = 'heading-div';
        const oldHeadingDiv = container.querySelector(`.${HEADING_DIV}`);
        if (oldHeadingDiv) {
            container.removeChild(oldHeadingDiv);
        }
        if (!this.#headingDiv) {
            this.#headingDiv = document.createElement('DIV');
            this.#headingDiv.setAttribute('class', HEADING_DIV);
            container.appendChild(this.#headingDiv);
        }
        this.#headingDiv.innerText = `${this.csv.title} (${this.settings.dataEndDate})`;
        return this.#headingDiv;
    }
}

class HelixCurve extends THREE.Curve<THREE.Vector3> {
    private helix: ClimateHelix;
    constructor(helix: ClimateHelix) {
        super();
        this.helix = helix;
    }

    public getPoint(t: number, optionalTarget = new THREE.Vector3()): THREE.Vector3 {
        const phi = 2 * Math.PI * this.helix.length * t;
        const index = this.helix.curveIndex(t);
        const current = this.helix.curve[index];
        const next = this.helix.curve[index + 1] || current;
        const ti = index / (this.helix.curve.length - 1);
        const ti1 = (index + 1) / (this.helix.curve.length - 1);
        const r = map(ti, ti1, current.radius, next.radius, t);
        // console.log(`${index}, ${current.radius}, ${next.radius}, t:${t}, ti:${ti} = ${r}`);

        const x = r * Math.cos(phi);
        const y = r * Math.sin(phi);
        const z = this.helix.zOffset + this.helix.selectedHeight * t;

        return optionalTarget.set(x, y, z);
    }

    public getColor(t: number): THREE.Color {
        const index = this.helix.curveIndex(t);
        const current = this.helix.curve[index];
        const next = this.helix.curve[index + 1] || current;
        const ti = index / (this.helix.curve.length - 1);
        const ti1 = (index + 1) / (this.helix.curve.length - 1);
        const color = new THREE.Color()
        return color.lerpColors(current.color, next.color, (t - ti) / (ti1 - ti));
    }
}


for (let m = 0; m < MONTHS; m++) {
    const phi = 2 * Math.PI * m / MONTHS
    sin.push(Math.sin(phi));
    cos.push(Math.cos(phi));
}


function map(a: number, b: number, c: number, d: number, x: number) {
    return b - a === 0 ? (c + d) / 2 : ((x - a) * (d - c) / (b - a)) + c
}

/**
 * Maps a temperature to the same cold/zero/warm gradient used by the helix.
 */
function temperatureColor(temperature: number, cold: THREE.Color, zero: THREE.Color, warm: THREE.Color): THREE.Color {
    const color = new THREE.Color();
    return temperature < 0 ? color.lerpColors(zero, cold, Math.abs(temperature)) : color.lerpColors(zero, warm, temperature);
}

export { ClimateHelix, temperatureColor };