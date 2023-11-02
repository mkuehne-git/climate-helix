import { Events } from "./Enums";
import { SVGToggleButton } from "./SVGToggleButton";
import { icon as lightIcon } from "./icons/themes/lightIcon";
import { icon as darkIcon } from "./icons/themes/darkIcon";
import { Settings } from "./Settings";

class ThemesSwitcher {
    #theme: boolean;
    #button: SVGToggleButton;

    constructor(p: { container: Element }) {
        this.#button = new SVGToggleButton({ container: p.container || document.body, icons: [lightIcon, darkIcon], classToken: 'themes', event: Events.CHANGE_THEME.toString() });
        this.initTheme();
    }

    /**
     * Used to initialize theme with system preferred theme.
     */
    initTheme() {
        this.#theme = this.preferredTheme();
        document.body.classList.add(this.#theme ? 'dark' : 'light');
        this.#button.show(this.#theme ? 0 : 1);

        document.body.addEventListener(Events.CHANGE_THEME.toString(), () => {
            this.onThemeChange(document.body);
        });
    }

    /**
     * Determine the system preferred theme.
     * 
     * @returns {@code false} is dark mode, {@code true} light mode
     */
    preferredTheme(): boolean {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    private onThemeChange(element: HTMLElement) {
        const oldThemeStyle = this.#theme ? 'dark' : 'light';
        const newThemeStyle = this.#theme ? 'light' : 'dark';
        // console.log(`old-theme: ${oldThemeStyle} new-theme: ${newThemeStyle}`);
        if (!element.classList.replace(oldThemeStyle, newThemeStyle)) {
            element.classList.add(newThemeStyle);
        }
        this.#theme = !this.#theme;
        this.#button.toggle();

        Settings.dispatchEvent(Events.THEME_CHANGED)
    }

    get theme() {
        return this.#theme;
    }
}

export { ThemesSwitcher };