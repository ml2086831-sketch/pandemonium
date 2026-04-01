const CACHE_NAME = 'pandemonium-v1';
const FILES_TO_CACHE = [
  '/pandemonium/',
  '/pandemonium/index.html',
  '/pandemonium/manifest.json',
  '/pandemonium/icon.png',
  '/pandemonium/icon_2.png',
  '/pandemonium/icon_3.png',
  '/pandemonium/icon_4.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
