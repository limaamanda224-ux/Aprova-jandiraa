const CACHE="aprova-jandira-shell-v2";
const FILES=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./assets/icon.svg",
"./assets/semana1-portugues-interpretacao.pdf","./assets/semana1-sus-principios.pdf","./assets/semana1-fisio-respiratoria.pdf","./assets/semana1-portugues-classes.pdf","./assets/semana1-sus-lei8080.pdf","./assets/semana1-fisio-avaliacao.pdf"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method==="GET")e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
