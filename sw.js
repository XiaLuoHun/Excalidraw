if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>n(e,r),u={module:{uri:r},exports:o,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-5c23bb42"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bug-issue-template-f174eaf6.js",revision:null},{url:"assets/directory-open-01563666-f87a57cf.js",revision:null},{url:"assets/directory-open-4ed118d0-f36e5697.js",revision:null},{url:"assets/file-open-002ab408-9ae3a7ce.js",revision:null},{url:"assets/file-open-7c801643-a0dcc141.js",revision:null},{url:"assets/file-save-3189631c-cc90d322.js",revision:null},{url:"assets/file-save-745eba88-e9b5e4a2.js",revision:null},{url:"assets/image-34dded93.js",revision:null},{url:"assets/image-blob-reduce.esm-1fc068b7.js",revision:null},{url:"assets/index-57c24448.js",revision:null},{url:"assets/index-a1d04508.css",revision:null},{url:"assets/index-e360d5c9.js",revision:null},{url:"assets/index.esm-23884f78.js",revision:null},{url:"assets/index.esm-304fc1ca.js",revision:null},{url:"assets/index.esm-7cc70643.js",revision:null},{url:"assets/index.esm-d80e9bdf.js",revision:null},{url:"assets/pica-39345380.js",revision:null},{url:"assets/random-username.esm-236d99b1.js",revision:null},{url:"index.html",revision:"51efc7d932a1833364afb7c4ed53ec6f"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"logo-180x180.png",revision:"2ab6c566dd11832b2c54b7d14ffcb895"},{url:"apple-touch-icon.png",revision:"2734f68f5c82c4bba5f5013b6b7f20d2"},{url:"manifest.webmanifest",revision:"453c788bf77d196da40567b135b0d4df"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\/.+.(ttf|woff2|otf)/,new e.CacheFirst({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:7776e3})]}),"GET"),e.registerRoute(/fonts.css/,new e.StaleWhileRevalidate({cacheName:"fonts",plugins:[new e.ExpirationPlugin({maxEntries:50})]}),"GET"),e.registerRoute(/locales\/[^/]+.js/,new e.CacheFirst({cacheName:"locales",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
