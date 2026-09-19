import { Events } from './Enums';
import { Settings } from './Settings';

class YearRangeSlider {
    private readonly element: HTMLElement;
    private readonly startInput: HTMLInputElement;
    private readonly endInput: HTMLInputElement;
    private readonly startLabel: HTMLElement;
    private readonly endLabel: HTMLElement;

    constructor(container: Element, private readonly settings: Settings) {
        const existing = container.querySelector('#year-slider');
        existing?.remove();

        this.element = document.createElement('div');
        this.element.id = 'year-slider';
        this.element.className = 'year-slider';

        const track = document.createElement('div');
        track.className = 'year-slider-track';
        this.element.appendChild(track);

        this.startInput = this.createInput('start');
        this.endInput = this.createInput('end');
        this.element.append(this.startInput, this.endInput);

        const labels = document.createElement('div');
        labels.className = 'year-slider-labels';
        this.startLabel = document.createElement('span');
        this.startLabel.className = 'year-slider-label start';
        this.endLabel = document.createElement('span');
        this.endLabel.className = 'year-slider-label end';
        labels.append(this.startLabel, this.endLabel);
        this.element.appendChild(labels);

        container.appendChild(this.element);
        this.refresh();
    }

    private createInput(position: 'start' | 'end'): HTMLInputElement {
        const input = document.createElement('input');
        input.type = 'range';
        input.className = `year-slider-input ${position}`;
        input.step = '1';
        input.setAttribute('aria-label', position === 'start' ? 'Start year' : 'End year');
        input.addEventListener('input', () => {
            const year = Number(input.value);
            if (position === 'start') {
                this.settings.setStartYear(year);
            } else {
                this.settings.setEndYear(year);
            }
            this.refresh();
            Events.dispatchEvent(Events.CREATE_HELIX);
        });
        return input;
    }

    refresh(): void {
        const min = this.settings.datasetFirstYear;
        const max = this.settings.datasetLastYear;
        this.startInput.min = String(min);
        this.startInput.max = String(max);
        this.endInput.min = String(min);
        this.endInput.max = String(max);
        this.startInput.value = String(this.settings.firstYear);
        this.endInput.value = String(this.settings.lastYear);
        this.startLabel.textContent = String(this.settings.firstYear);
        this.endLabel.textContent = String(this.settings.lastYear);
        const yearSpan = Math.max(max - min, 1);
        this.startLabel.style.left = `${((this.settings.firstYear - min) / yearSpan) * 100}%`;
        this.endLabel.style.left = `${((this.settings.lastYear - min) / yearSpan) * 100}%`;
    }

    dispose(): void {
        this.element.remove();
    }
}

export { YearRangeSlider };