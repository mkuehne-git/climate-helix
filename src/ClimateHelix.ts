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
            this.years = this.csv.rowCount;
            // console.log(`Years: ${this.years}`)
            for (let year = 0; year < this.years; year++) {
                for (let month = 0; month < 12; month++) {
                    const v = this.helixPoint(year, month);
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
            z += (index / cnt) * this.height;
        });
        return new THREE.Vector3(x / cnt, y / cnt, z / cnt);
    }

    private createGeometry(): HelixGeometry {
        const tubeRadius = this.settings.radiusFactor * this.helixConfiguration.height / this.years;
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
            const color = new THREE.Color();
            temperature < 0 ? color.lerpColors(this.#zero, this.#cold, Math.abs(temperature)) :
                color.lerpColors(this.#zero, this.#warm, temperature);
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
        this.#headingDiv.innerText = this.csv.title;
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
        const z = this.helix.height * t;

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

export { ClimateHelix };