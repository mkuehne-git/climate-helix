if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/imprint-gen-97f4f62e.js",revision:null},{url:"assets/index-6370371e.js",revision:null},{url:"assets/index-a4f8fa3b.css",revision:null},{url:"assets/info.html",revision:"ddcfd237c85c9a9eff7bf34ac4da8e1b"},{url:"assets/style-bcb3c013.css",revision:null},{url:"index.html",revision:"c7700914bc46e2362eab1ed27e066720"},{url:"registerSW.js",revision:"54521e9521b062b34a116f8479353062"},{url:"assets/pwa-icons/manifest-icon-192.maskable.png",revision:"4e9c6e56b35cb7e960d18cbd1d3d207b"},{url:"assets/pwa-icons/manifest-icon-512.maskable.png",revision:"6039e1ebd092f9dd64a9d162a76b3a4b"},{url:"manifest.webmanifest",revision:"2173391ba9746d97d0c5e2e60903818a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
