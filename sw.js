// Service worker v3 — force refresh
var CACHE_VERSION = 'kaspi-v3';

self.addEventListener('install', function(e) {
  self.skipWaiting();
  // Clear all old caches
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.map(function(name) { return caches.delete(name); }));
    })
  );
});

self.addEventListener('activate', function(e) {
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
