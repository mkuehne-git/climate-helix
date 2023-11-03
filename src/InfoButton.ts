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
        container.addEventListener('click', () => {
            const infoDiv = document.querySelector('#info-div');
            infoDiv?.classList.toggle('show');
            const canvas = document.querySelector('canvas');
            canvas?.classList.toggle('transparent');
            this.#button.toggle();
        });
        this.#button.show(0);
    }
}

export { InfoButton };