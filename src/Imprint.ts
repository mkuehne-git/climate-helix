import html2canvas from "html2canvas";

import { Events } from "./Enums";
import { ClassMutationObserver } from "./ClassMutationObserver";
import { SVGToggleButton } from "./SVGToggleButton";
import { icon as closeIcon } from "./icons/info/closeIcon";

const loadModule = async () => {
  return await import("./imprint-gen");
};

const trailer = `<hr><p style="opacity: 1.0;">Dieses Impressum wurde erstellt durch <a href="https://www.impressum-generator.de" rel="nofollow">impressum-generator.de</a>.</p>`;

/**
 * This class generates an imprint, if the file './imprint-gen.js' can be imported. The imprint will
 * be displayed as resizable image - instead of plain text. This is a little protection against
 * agents reading the HTML source.
 */
class Imprint {
  private decryptedAES: () => string;
  private div: HTMLDivElement;
  private loading: Promise<boolean> | undefined;
  private resizeTimer: number | undefined;
  constructor() {
    // Debounced: dragging a window edge fires a burst of resize events, and
    // each redraw starts a full html2canvas render.
    window.addEventListener("resize", () => {
      window.clearTimeout(this.resizeTimer);
      this.resizeTimer = window.setTimeout(() => this.redraw(), 250);
    });
    new ClassMutationObserver(document.body, () => this.redraw());
    document.body.addEventListener(Events.SHOW_IMPRINT.toString(), (e) => this.show());
    document.body.addEventListener(Events.HIDE_IMPRINT.toString(), (e) => this.hide());
    // Capture phase on window: lil-gui stops key events from propagating, and
    // the Imprint button that opened the imprint keeps the focus.
    window.addEventListener("keydown", (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.hide();
      }
    }, { capture: true });
  }
  private redraw() {
    if (this.div !== undefined) {
      this.hide();
      this.show();
    }
  }

  async isAvailable(): Promise<boolean> {
    if (this.decryptedAES !== undefined) {
      return true;
    }
    if (this.loading !== undefined) {
      return this.loading;
    }
    this.loading = loadModule().then((m) => {
      this.decryptedAES = m.decryptedAES;
      return this.decryptedAES() !== undefined;
    });
    return this.loading;
  }
  show() {
    if (this.decryptedAES === undefined) {
      void this.isAvailable().then((available) => {
        if (available) {
          this.show();
        }
      });
      return;
    }
    if (this.div === undefined) {
      this.div = document.createElement("div");
      const div = this.div;
      div.classList.add("imprint");
      // The close button is added right away, next to the content, so it is
      // available while html2canvas is still rendering (or if it fails).
      const content = document.createElement("div");
      div.appendChild(content);
      this.appendCloseButton(div);
      const imprintHTML = this.decryptedAES();
      content.innerHTML = imprintHTML;
      document.body.appendChild(div);
      const style = window.getComputedStyle(document.body);
      const width = content.scrollWidth;
      const height = content.scrollHeight;
      const backgroundColor = style.getPropertyValue("background-color");
      html2canvas(content, {
        backgroundColor,
        windowWidth: width,
        windowHeight: height,
      }).then((canvas) => {
        canvas.classList.add("padding");
        content.innerHTML = "";
        content.appendChild(canvas);
        this.appendTrailer(content);
      }).catch(() => {
        content.innerHTML = imprintHTML;
        this.appendTrailer(content);
      });
    }
  }
  private appendTrailer(div: HTMLDivElement) {
    const p = document.createElement("p");
    p.classList.add("padding");
    p.innerHTML = trailer;
    div.appendChild(p);
  }
  /**
   * The close button is fixed at the info button's position (see
   * .imprint-close in style.css), so the imprint can be closed without
   * scrolling to its end. It closes on the click itself rather than after
   * SVGToggleButton's click animation: the imprint disappears anyway, and a
   * resize redraw during the animation would otherwise swallow the click.
   */
  private appendCloseButton(div: HTMLDivElement) {
    new SVGToggleButton({
      container: div,
      icons: [closeIcon], classToken: "imprint-close", event: Events.HIDE_IMPRINT.toString()
    }).show(0);
    div.querySelector(":scope > .toggle-div.imprint-close")?.addEventListener("click", () => this.hide());
  }
  hide() {
    window.clearTimeout(this.resizeTimer);
    if (this.div !== undefined) {
      document.body.removeChild(this.div);
      this.div = undefined as any;
    }
  }
}
export { Imprint };
