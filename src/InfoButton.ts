import { Events } from "./Enums";
import { SVGToggleButton } from "./SVGToggleButton";
import { icon as infoIcon } from "./icons/info/infoIcon";
import { icon as closeIcon } from "./icons/info/closeIcon";
import { SceneSwitcher } from "./SceneSwitcher";

class InfoButton {
    #button: SVGToggleButton;
    #sceneSwitcher: SceneSwitcher;
    constructor(container: Element, sceneSwitcher: SceneSwitcher) {
        this.#sceneSwitcher = sceneSwitcher;
        this.#button = new SVGToggleButton({
            container,
            icons: [infoIcon, closeIcon], classToken: 'info-button', event: 'info-clicked'
        });
        this.#button.show(0);
        this.#button.addOnClickListener(() => this.infoDivShowHide());

        // SVGToggleButton only fires its click event once the button's own
        // pulse animation ends (~0.35s after the actual click) - see
        // SVGToggleButton.ts. That leaves a window where a fast second click
        // on a scene button still goes through before infoDivShowHide() gets
        // to disable it. Disable immediately on the raw click instead;
        // infoDivShowHide() below still sets the definitive final state once
        // it knows whether the panel actually opened or closed.
        container.querySelector('.info-button')?.addEventListener('click', () => {
            this.#sceneSwitcher.setEnabled(false);
        });
    }

    infoDivShowHide() {
        const infoDiv = document.querySelector('#info-div');
        const datasetControls = document.querySelector('#dataset-controls');
        const isVisible = infoDiv?.classList.toggle('show');
        const canvas = document.querySelector('canvas');
        canvas?.classList.toggle('transparent');
        document.querySelectorAll('.full-scene-content').forEach((content) => content.classList.toggle('transparent'));

        if (datasetControls) {
            datasetControls.classList.toggle('hidden', infoDiv?.classList.contains('show') ?? false);
        }
        const isOpen = infoDiv?.classList.contains('show') ?? false;
        document.querySelector('.scene-switcher')?.classList.toggle('hidden', isOpen);
        // Disabling (not just visually hiding) the switcher prevents a
        // keyboard-focused button from still switching scenes while the info
        // panel's dim transition is in flight, which would otherwise briefly
        // show two scenes at different alpha values at once.
        this.#sceneSwitcher.setEnabled(!isOpen);

        this.#button.toggle();
        return isVisible;
    }
}

export { InfoButton };
