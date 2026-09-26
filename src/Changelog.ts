import { Events } from "./Enums";
import { OverlayPage } from "./OverlayPage";
import { parseChangelog, renderEntries } from "./changelogFormat";

/** CHANGELOG.md is loaded on demand, in its own chunk; the build adds the newest entry's commit (vite.config.ts). */
const loadChangelog = async (): Promise<string> => (await import("../CHANGELOG.md?raw")).default;

/**
 * Shows CHANGELOG.md as a full page, opened from the version label in the
 * lower right corner. It closes like the imprint: with its X button or Escape.
 */
class Changelog {
  #page = new OverlayPage("changelog", Events.HIDE_CHANGELOG.toString());

  constructor() {
    document.body.addEventListener(Events.SHOW_CHANGELOG.toString(), () => void this.show());
    document.body.addEventListener(Events.HIDE_CHANGELOG.toString(), () => this.hide());
  }

  async show(): Promise<void> {
    const entries = parseChangelog(await loadChangelog());
    const content = this.#page.show();
    content.innerHTML = `<h1>Changelog</h1>\n${renderEntries(entries)}`;
  }

  hide(): void {
    this.#page.hide();
  }
}
export { Changelog };
