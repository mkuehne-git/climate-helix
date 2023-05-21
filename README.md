![Climate-helix](./src/images/climate-helix.png)
# climate-helix
This is an attempt to reproduce a 3D climate helix similar to the one shown in [Coding Train, How to Code a Climate Spiral](https://youtu.be/rVBTxnRyOuE?t=2384).

The climate helix uses data from [Coding Train, How to Code a Climate Spiral](https://youtu.be/rVBTxnRyOuE) retrieved in May-2023. You can view data for the
* Northern Hemissphere
* Southern Hemissphere
* Globe

The time ranges from 1880 until Mar-2023. Each year is visualized as a loop within the helix. This application uses [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) to navigate through the scene.

Available on [Github Pages](https://mkuehne-git.github.io/climate-helix/).

# Keyboard

|Key|Description|
|---|---|
|```h```, ```H```|Toggle visibility of control panel|
|```CTRL + #```|Take screen capture|
|```Esc```|Close imprint dialog|

# References

* [Coding Train, How to Code a Climate Spiral](https://youtu.be/rVBTxnRyOuE)
* [NASA, Goddard Space Flight Center](https://data.giss.nasa.gov/gistemp/)
* [OrbitControls - three.js docs](https://threejs.org/docs/#examples/en/controls/OrbitControls)

# Acknowledgments

* [Vite](https://github.com/vitejs/vite) - Next Generation Frontend Tooling
* WebGL [three.js](https://threejs.org/)
* Settings with [lil-gui](https://github.com/georgealways/lil-gui)

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/mkuehne-git/climate-helix/blob/main/LICENSE) file for details

