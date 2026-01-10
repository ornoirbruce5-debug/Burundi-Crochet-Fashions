const CACHE_NAME = 'bcf-static-v1';
const OFFLINE_URL = '/offline.html';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/styles/globals.css',
  '/favicon.ico',
  '/manifest.json'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(
    caches.match(evt.request).then((cached) => {
      if (cached) return cached;
      return fetch(evt.request)
        .then((res) => {
          return caches.open(CACHE_NAME).then((cache) => {
            try {
              cache.put(evt.request, res.clone());
            } catch (e) {
              // ignore opaque responses
            }
            return res;
          });
        })
        .catch(() => caches.match(OFFLINE_URL));
    })
  );
});
