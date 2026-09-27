import { Events, Scene } from "./Enums";
import { persistentState } from "./PersistentState";
import { t, type MessageKey } from "./i18n";
import { icon as helixIcon } from "./icons/helix/helixIcon";
import { icon as chartIcon } from "./icons/charts/chartIcon";
import { icon as diffIcon } from "./icons/diff/diffIcon";

type SceneDescriptor = { scene: Scene, label: MessageKey, icon: { id: string, svg: string } };

const SCENES: SceneDescriptor[] = [
    { scene: Scene.HELIX, label: 'scene.helix', icon: helixIcon },
    { scene: Scene.CHARTS, label: 'scene.charts', icon: chartIcon },
    { scene: Scene.DIFF, label: 'scene.diff', icon: diffIcon },
];

/**
 * Persistent icon-buttons that switch between the app's equal peer scenes
 * (Helix, Charts, Diff). Unlike {@link SVGToggleButton}, all icons stay
 * visible at all times and are independently clickable, so this owns its DOM
 * directly rather than reusing that toggle mechanism.
 */
class SceneSwitcher {
    /** The view last shown; `main.ts` announces it with {@link Events.SCENE_CHANGED} once the app is set up. */
    #scene: Scene = persistentState.state.scene ?? Scene.HELIX;
    #buttons: Map<Scene, HTMLButtonElement> = new Map();

    constructor(container: Element) {
        const div = document.createElement('div');
        div.className = 'scene-switcher';
        for (const descriptor of SCENES) {
            const button = this.createButton(descriptor);
            this.#buttons.set(descriptor.scene, button);
            div.appendChild(button);
        }
        container.appendChild(div);
        this.updateActive();
    }

    get scene(): Scene {
        return this.#scene;
    }

    /**
     * Disables (or re-enables) every scene button, including keyboard
     * activation - CSS `pointer-events: none` alone only blocks the mouse,
     * so a focused button could still be triggered with Enter/Space. Used
     * while the info panel is open so a scene switch can't race its fade,
     * which would otherwise briefly show two scenes at different alphas.
     */
    setEnabled(enabled: boolean): void {
        this.#buttons.forEach((button) => {
            button.disabled = !enabled;
        });
    }

    private createButton(descriptor: SceneDescriptor): HTMLButtonElement {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'scene-button';
        const label = t(descriptor.label);
        button.setAttribute('aria-label', t('scene.button', { scene: label }));

        const template = document.createElement('template');
        template.innerHTML = descriptor.icon.svg;
        const svg = template.content.firstElementChild;
        if (svg) {
            svg.classList.add('scene-icon');
            button.appendChild(svg);
        }

        const tooltip = document.createElement('span');
        tooltip.className = 'scene-tooltip';
        tooltip.textContent = label;
        button.appendChild(tooltip);

        button.addEventListener('click', () => this.select(descriptor.scene));
        return button;
    }

    private select(scene: Scene): void {
        if (scene === this.#scene) {
            return;
        }
        this.#scene = scene;
        this.updateActive();
        persistentState.update({ scene });
        Events.dispatchEvent(Events.SCENE_CHANGED);
    }

    private updateActive(): void {
        this.#buttons.forEach((button, scene) => {
            button.classList.toggle('active', scene === this.#scene);
        });
    }
}

export { SceneSwitcher };
