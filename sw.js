if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>i(e,l),u={module:{uri:l},exports:r,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-5007d990"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2a73c341ace75140e7812d9fd4de11fd"},{url:"assets/About.bd6465f0.js",revision:null},{url:"assets/Home.39f01206.js",revision:null},{url:"assets/index.50e4f855.css",revision:null},{url:"assets/index.c81face0.js",revision:null},{url:"assets/Projects.850c9022.js",revision:null},{url:"assets/Typing.3b0e73fa.js",revision:null},{url:"index.html",revision:"b3fea457ae5d1a880c09f1b4ffac843d"},{url:"manifest.webmanifest",revision:"953fb841999e663d7da33133e64d4ed9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>"https://spy-family.net"===e.origin),new e.StaleWhileRevalidate({cacheName:"external-spy-images",plugins:[]}),"GET")}));