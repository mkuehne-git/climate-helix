if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/climate-helix/sw.js', { scope: '/climate-helix/' })})}