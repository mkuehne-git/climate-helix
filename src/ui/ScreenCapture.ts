import html2canvas from "html2canvas";

import { Events } from "../Enums";
import type { CaptureTarget } from "../settings/Settings";
// This is for the screen capture. Without the WebGL content would not be showing.
//
// https://stackoverflow.com/questions/55760121/html2canvas-captures-everything-except-the-content-of-an-inner-canvas
HTMLCanvasElement.prototype.getContext = (function (origFn) {
  return function (type, attribs) {
    attribs = attribs || {};
    attribs.preserveDrawingBuffer = true;
    return origFn.call(this, type, attribs);
  };
})(HTMLCanvasElement.prototype.getContext);

type CaptureControls = {
  All: HTMLElement | undefined,
  Helix: HTMLElement | undefined,
}

/**
 * Takes screen captures of the page or the helix alone, as the settings'
 * Screen capture section chooses: from its button or with Alt+S.
 */
class ScreenCapture {
  #targets: CaptureControls;
  #settings: { captureTarget: CaptureTarget };

  constructor(settings: { captureTarget: CaptureTarget }, targets: CaptureControls) {
    this.#settings = settings;
    this.#targets = targets;
    document.body.addEventListener(Events.SCREEN_CAPTURE.toString(), () => this.capture());
    document.addEventListener("keydown", (e) => {
      if (e.altKey && e.key === "s") {
        e.stopPropagation();
        e.preventDefault();
        this.capture();
      }
    });
  }

  #fBeforeCapture = (): HTMLElement | undefined => this.#targets[this.#settings.captureTarget];

  capture(fBeforeCapture = this.#fBeforeCapture) {
    console.log(`screenCapture ${fBeforeCapture}`);
    const elementToCapture = fBeforeCapture();
    if (!elementToCapture) {
      throw new Error("No element to capture");
    }
    setTimeout(() => {
      const style = window.getComputedStyle(document.body);
      const backgroundColor = style.getPropertyValue("background-color");
      // The settings panel the capture may be started from is not part of the picture.
      html2canvas(elementToCapture, { backgroundColor, ignoreElements: (element) => element.id === 'settings-panel' }).then((canvas) => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL();
        a.download = "climate-helix.png";
        a.click();
      });
    }, 100);
  }
}

export { ScreenCapture, type CaptureControls };
