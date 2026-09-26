import { Events } from "./Enums";
import { persistentState } from "./PersistentState";
import { SVGToggleButton } from "./SVGToggleButton";
import { icon as lightIcon } from "./icons/themes/lightIcon";
import { icon as darkIcon } from "./icons/themes/darkIcon";

// Used by CSS to style dark/light mode
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

class ThemesSwitcher {
    #theme: boolean;
    #button: SVGToggleButton;

    constructor(p?: { container: Element }) {
        this.#button = new SVGToggleButton({
            container: p?.container || document.body,
            icons: [lightIcon, darkIcon], classToken: 'themes', event: Events.CHANGE_THEME.toString()
        });
        this.initTheme();
        this.registerOnThemeChange(document.body);
    }

    /**
     * Used to initialize theme with the theme the user last switched to, or
     * else the system preferred theme.
     */
    initTheme() {
        const stored = persistentState.state.theme;
        this.#theme = stored ? stored === DARK_THEME : this.preferredTheme();
        document.body.classList.remove(DARK_THEME, LIGHT_THEME);
        document.body.classList.add(this.#theme ? DARK_THEME : LIGHT_THEME);
        this.#button.select(this.#theme ? 0 : 1);

        Events.dispatchEvent(Events.THEME_CHANGED);
    }

    /**
     * Determine the system preferred theme.
     * 
     * @returns {@code false} is dark mode, {@code true} light mode
     */
    preferredTheme(): boolean {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    registerOnThemeChange(element: HTMLElement) {
        element.addEventListener(Events.CHANGE_THEME.toString(), () => {
            this.onThemeChange(element);
        });
    }

    private onThemeChange(element: HTMLElement) {
        const oldThemeStyle = this.#theme ? DARK_THEME : LIGHT_THEME;
        const newThemeStyle = this.#theme ? LIGHT_THEME : DARK_THEME;
        // console.log(`old-theme: ${oldThemeStyle} new-theme: ${newThemeStyle}`);
        if (!element.classList.replace(oldThemeStyle, newThemeStyle)) {
            element.classList.add(newThemeStyle);
        }
        this.#theme = !this.#theme;
        this.#button.toggle();
        persistentState.update({ theme: newThemeStyle });

        Events.dispatchEvent(Events.THEME_CHANGED);
    }
}

export { ThemesSwitcher };