## Changelog
### v0.2.3
* Change PWA icons.
### v0.2.2
* Improve rendering of imprint
  * Fix weird looking text if installed as PWA. Font used by imprint imported from local assets. Workaround for `html2canvas` issue.
  * Fix styling of imprint, now all of the text should be displayed.
* Add version info at the lower right corner .

### v0.2.1
* Screen capture with ***alt-s***
* Redraw imprint on theme change
### v0.2.0
* Add `favicon.png`
* Add `manifest.json` to create PWA
### v0.1.3
* Add info button with info icon.
### v0.1.2
* Translate helix's center of gra>vity to origin. This eases rotation without prior moving the helix.
* Rename some UI labels.
### v0.1.1
* Restructure controller UI.
* Add color choosers, for cold, zero and warm temperature
### v0.1.0
* Add header line explaining what you see
* Controller UI starts as Settings icon. When closing controller, the UI is replaced by Settings icon.
### v0.0.3
* Wireframe color reacts on light/dark theme change
* Display title div
* Change position of controler UI to avoid title overlap. UI closed on start.
### v0.0.2
* Configure wireframe color through CSS (--wireframe-color)
* Remove obsolete console.log

### v0.0.1

#### Main Features
* Interactive Climate Helix showing difference from mean temperature
* Three regions (Northern Hemisphere, Southern Hemisphere, Globe) from 1880-2023 based on [NASA, Goddard Space Flight Center](https://data.giss.nasa.gov/gistemp/) data
* Selective screen capture, and file download
