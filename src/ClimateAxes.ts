import * as THREE from 'three';
import { Settings } from './Settings';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const LABELED_MONTHS = new Set([0, 3, 6, 9]);

class ClimateAxes extends THREE.Group {
    private readonly lineMaterial: THREE.LineBasicMaterial;
    private readonly labelMaterial: THREE.SpriteMaterial[] = [];

    constructor(settings: Settings, height: number, radius: number) {
        super();

        const textColor = Settings.styledColor('--text-color');
        const lineMaterial = new THREE.LineBasicMaterial({ color: textColor });
        this.lineMaterial = lineMaterial;

        if (settings.showYearAxis) {
            this.addYearAxis(settings, height, textColor, lineMaterial);
        }
        const temperatureZ = -height / 2 - 0.28;
        if (settings.showTemperatureAxis) {
            this.addTemperatureLegend(settings, height, radius, textColor, temperatureZ);
        }
        if (settings.showMonthAxis) {
            this.addMonthAxis(radius, textColor, temperatureZ);
        }
    }

    dispose(): void {
        this.traverse((object) => {
            if (object instanceof THREE.Line || object instanceof THREE.LineLoop) {
                object.geometry.dispose();
                const material = object.material;
                if (Array.isArray(material)) material.forEach((item) => item.dispose());
                else material.dispose();
            }
            if (object instanceof THREE.Sprite) {
                object.material.map?.dispose();
                object.material.dispose();
            }
        });
        this.lineMaterial.dispose();
        this.labelMaterial.forEach((material) => material.dispose());
    }

    private addYearAxis(settings: Settings, height: number, color: THREE.Color, material: THREE.LineBasicMaterial): void {
        const axisX = radiusForAxis(settings) + 0.3;
        const bottom = -height / 2;
        const top = height / 2;
        this.addLine([[axisX, 0, bottom], [axisX, 0, top]], material);

        const firstYear = settings.firstYear;
        const lastYear = settings.lastYear;
        const tickCount = settings.yearTickCount;
        const yearSpan = lastYear - firstYear;
        for (let tick = 0; tick < tickCount; tick++) {
            const fraction = tick / (tickCount - 1);
            const year = Math.round(firstYear + fraction * yearSpan);
            const position = bottom + fraction * height;
            this.addLine([[axisX - 0.08, 0, position], [axisX + 0.08, 0, position]], material);
            this.addLabel(String(year), new THREE.Vector3(axisX + 0.15, 0, position), color, 0.5, 0.14);
        }
    }

    private addTemperatureLegend(settings: Settings, height: number, radius: number, color: THREE.Color, centerZ: number): void {
        const circleCount = settings.temperatureRingCount;
        const minTemperature = -1;
        const maxTemperature = 1.5;
        const labelAngles = Array.from({ length: circleCount }, (_, index) => index * Math.PI * 2 / circleCount);
        for (let index = 0; index < circleCount; index++) {
            const fraction = index / (circleCount - 1);
            const temperature = minTemperature + fraction * (maxTemperature - minTemperature);
            const circleRadius = 0.4 + fraction * (radius - 0.4);
            const points = [];
            for (let point = 0; point < 48; point++) {
                const angle = point / 48 * Math.PI * 2;
                points.push(new THREE.Vector3(Math.cos(angle) * circleRadius, Math.sin(angle) * circleRadius, centerZ));
            }
            const ring = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color }));
            this.add(ring);
            const labelAngle = labelAngles[index];
            this.addLabel(
                `${temperature >= 0 ? '+' : ''}${temperature.toFixed(2)}°C`,
                new THREE.Vector3(Math.cos(labelAngle) * (circleRadius + 0.08), Math.sin(labelAngle) * (circleRadius + 0.08), centerZ),
                color,
                0.5,
                0.14
            );
        }
    }

    private addMonthAxis(radius: number, color: THREE.Color, z: number): void {
        const outerRadius = radius + 0.08;
        for (let month = 0; month < MONTHS.length; month++) {
            const angle = month / MONTHS.length * Math.PI * 2;
            const innerRadius = radius;
            this.addLine([
                [Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius, z],
                [Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius, z]
            ], new THREE.LineBasicMaterial({ color }));
            if (LABELED_MONTHS.has(month)) {
                this.addLabel(MONTHS[month], new THREE.Vector3(Math.cos(angle) * (outerRadius + 0.14), Math.sin(angle) * (outerRadius + 0.14), z), color, 0.4, 0.12);
            }
        }
    }

    private addLine(points: number[][], material: THREE.LineBasicMaterial): void {
        this.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map((point) => new THREE.Vector3(...point as [number, number, number]))), material));
    }

    private addLabel(text: string, position: THREE.Vector3, color: THREE.Color, width: number, height: number): void {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.font = '32px DejaVu Sans';
        context.fillStyle = `#${color.getHexString()}`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        const material = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthTest: false });
        this.labelMaterial.push(material);
        const sprite = new THREE.Sprite(material);
        sprite.position.copy(position);
        sprite.scale.set(width, height, 1);
        this.add(sprite);
    }
}

function radiusForAxis(settings: Settings): number {
    return Math.max(1, settings.radiusFactor);
}

export { ClimateAxes };