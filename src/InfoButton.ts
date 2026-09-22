import { Events } from "./Enums";
import { SVGToggleButton } from "./SVGToggleButton";
import { icon as infoIcon } from "./icons/info/infoIcon";
import { icon as closeIcon } from "./icons/info/closeIcon";

class InfoButton {
    #button: SVGToggleButton;
    constructor(container: Element) {
        this.#button = new SVGToggleButton({
            container,
            icons: [infoIcon, closeIcon], classToken: 'info-button', event: 'info-clicked'
        });
        this.#button.show(0);
        this.#button.addOnClickListener(() => this.infoDivShowHide());
    }

    infoDivShowHide() {
        const infoDiv = document.querySelector('#info-div');
        const datasetControls = document.querySelector('#dataset-controls');
        const isVisible = infoDiv?.classList.toggle('show');
        const canvas = document.querySelector('canvas');
        canvas?.classList.toggle('transparent');
        document.querySelector('.chart-scene')?.classList.toggle('transparent');

        if (datasetControls) {
            datasetControls.classList.toggle('hidden', infoDiv?.classList.contains('show') ?? false);
        }

        this.#button.toggle();
        return isVisible;
    }
}

export { InfoButton };