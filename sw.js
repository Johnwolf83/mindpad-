// MindPad Service Worker v2 — Cache para funcionamiento offline
const CACHE_NAME = 'mindpad-x10-v2';
const ASSETS = [
  './',
  './index.html',
  './mindpad.js',
  './styles.css',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
    return;
  }
  e.respondWith(
    fetch(e.request).then((networkRes) => {
      // Si hay red, actualiza la caché
      if (networkRes && networkRes.status === 200) {
        const resClone = networkRes.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
      }
      return networkRes;
    }).catch(() => {
      // Si no hay red, usa la caché
      return caches.match(e.request);
    })
  );
});
