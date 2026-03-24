const CACHE_NAME = "vicca-job-cache-v1";
const urlsToCache = ["./","./index.html","./style.css","./script.js","./icon.png"];

// Install SW
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));
});

// Activate SW
self.addEventListener("activate", e=>e.waitUntil(self.clients.claim()));

// Fetch
self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request)));
});
