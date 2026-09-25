import closeIcon from './icons/info/close.svg?raw';

/** The value source and sink a {@link YearRangeSlider} drives. */
interface YearRange {
    readonly min: number;
    readonly max: number;
    readonly start: number;
    readonly end: number;
    setStart(year: number): void;
    setEnd(year: number): void;
    /** Back to the full range, from the slider's reset button. */
    reset(): void;
}

class YearRangeSlider {
    private readonly element: HTMLElement;
    private readonly startInput: HTMLInputElement;
    private readonly endInput: HTMLInputElement;
    private readonly startLabel: HTMLElement;
    private readonly endLabel: HTMLElement;
    private readonly resetButton: HTMLButtonElement;

    constructor(container: Element, private readonly range: YearRange) {
        container.querySelector('.year-slider')?.remove();

        this.element = document.createElement('div');
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

        this.resetButton = document.createElement('button');
        this.resetButton.type = 'button';
        this.resetButton.className = 'year-slider-reset';
        this.resetButton.title = 'Show all years';
        this.resetButton.setAttribute('aria-label', 'Show all years');
        this.resetButton.innerHTML = closeIcon;
        this.resetButton.addEventListener('click', () => {
            this.range.reset();
            this.refresh();
        });
        this.element.appendChild(this.resetButton);

        container.insertBefore(this.element, container.firstChild);
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
                this.range.setStart(year);
            } else {
                this.range.setEnd(year);
            }
            this.refresh();
        });
        return input;
    }

    refresh(): void {
        const min = this.range.min;
        const max = this.range.max;
        this.startInput.min = String(min);
        this.startInput.max = String(max);
        this.endInput.min = String(min);
        this.endInput.max = String(max);
        this.startInput.value = String(this.range.start);
        this.endInput.value = String(this.range.end);
        this.startLabel.textContent = String(this.range.start);
        this.endLabel.textContent = String(this.range.end);
        const yearSpan = Math.max(max - min, 1);
        this.startLabel.style.left = `${((this.range.start - min) / yearSpan) * 100}%`;
        this.endLabel.style.left = `${((this.range.end - min) / yearSpan) * 100}%`;
        this.resetButton.disabled = this.range.start === min && this.range.end === max;
    }

    dispose(): void {
        this.element.remove();
    }
}

export { YearRangeSlider };
export type { YearRange };