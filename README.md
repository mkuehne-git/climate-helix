![Climate-helix](./src/images/climate-helix.png)
# climate-helix
This HTML-5 application features a 3D climate helix similar to the one shown in [Coding Train, How to Code a Climate Spiral](https://youtu.be/rVBTxnRyOuE?t=2384).

Available on [Github Pages](https://mkuehne-git.github.io/climate-helix/). The application can be installed as PWA (tested on Android).

The climate helix uses data from [NASA, Goddard Space Flight Center](https://data.giss.nasa.gov/gistemp/) retrieved in May-2023. You can view data for the

* Northern Hemissphere,
* Southern Hemissphere,
* Globe

The time ranges from 1880 until March 2023. Each year is visualized as a loop within the helix. Each loop is divided into 12 segments, one for each month of the year. The distance from the center per month is proportional to the difference to the mean temperature of that month. For details regarding the data and the theory behind it, please check out the [GISS](https://data.giss.nasa.gov/gistemp/) documentation.

The use of [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) makes it possible to easily navigate through the scene, by moving around a virtual camera. That means, you can scale, translate or rotate the image.

The controller UI (Icon in the upper right corner) provides options to configure the image. Not only can you choose, which region of the world you want to be visualized. With the ***View*** menu item you can toggle the x/y/z axes, change the coloring, and adjust some parameters controlling the geometry. With the ***Capture*** menu you can create images and download them to your computer.

# Keyboard

|Key|Description|
|---|---|
|```h```, ```H```|Toggle visibility of control panel|
|```CTRL + #```|Take screen capture|
|```Esc```|Close imprint dialog|

# PWA version updates

The app is shipped as a PWA and checks for newer versions after installation. When a new build is detected, the app asks for confirmation before reloading and applying the update. This is handled through the service worker lifecycle and avoids unexpected restarts during normal use.

If you installed the app from a supported browser such as Chrome on Android, the settings menu also includes a manual **Check for updates** action. This triggers a service worker refresh check and shows a short status message when the app is already up to date or when a new version is available.

# Dependency management

Dependency updates are handled through GitHub Dependabot for npm packages. The repository is configured to check for weekly updates, keep runtime and build-tooling packages grouped, and keep the update noise focused on the packages that matter most for the app.

Every dependency-related pull request is validated in GitHub Actions through a dedicated workflow that installs dependencies with `npm ci` and runs the production build with `npm run build`. This keeps routine upgrade PRs from landing without a fresh compile check.

The automation is configured in [.github/dependabot.yml](.github/dependabot.yml) and [.github/workflows/dependency-check.yml](.github/workflows/dependency-check.yml).

Major framework upgrades are still reviewed manually, especially for Vite, Three.js and the PWA plugin, because those are the most likely to affect app behavior or service-worker behavior.

# References

* [Coding Train, How to Code a Climate Spiral](https://youtu.be/rVBTxnRyOuE)
* [NASA, Goddard Space Flight Center](https://data.giss.nasa.gov/gistemp/)
* [OrbitControls - three.js docs](https://threejs.org/docs/#examples/en/controls/OrbitControls)

# Acknowledgments

* [Vite](https://github.com/vitejs/vite) - Next Generation Frontend Tooling
* WebGL [three.js](https://threejs.org/)
* Settings with [lil-gui](https://github.com/georgealways/lil-gui)
* [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) - PWA Vite Plugin, used to transform the application into PWA, see `vite.config.ts`.
* [FavIcon Generator](https://realfavicongenerator.net/) - I used this to generate the `favicons` and the related section in `index.html`. PWA icons were generated with `PWABuilder Studio` inside VS Code.
# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mkuehne-git/climate-helix/blob/main/LICENSE) file for details

