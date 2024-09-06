const CACHE_NAME = 'trip-planner-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/styles.css',
  '/js/app.js',
  '/js/index.js',
  // Add other assets like images, fonts, etc.
];

self.addEventListener('install', (event) => {
  // Cache files during service worker installation
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Serve cached content if available, otherwise fetch from the network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Remove old caches
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
