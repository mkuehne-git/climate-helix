if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/imprint-gen-JdiV-yqB.js",revision:null},{url:"assets/index-vyYzl6g3.js",revision:null},{url:"assets/index-xTtxzwKq.css",revision:null},{url:"assets/info.html",revision:null},{url:"assets/style-em0kiOGM.css",revision:null},{url:"index.html",revision:"e802b3fc9ffc0ce39e41679e365b4edb"},{url:"registerSW.js",revision:"54521e9521b062b34a116f8479353062"},{url:"assets/pwa-icons/manifest-icon-192.maskable.png",revision:"4e9c6e56b35cb7e960d18cbd1d3d207b"},{url:"assets/pwa-icons/manifest-icon-512.maskable.png",revision:"6039e1ebd092f9dd64a9d162a76b3a4b"},{url:"manifest.webmanifest",revision:"2173391ba9746d97d0c5e2e60903818a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
