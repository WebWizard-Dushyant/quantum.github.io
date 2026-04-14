self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Required fetch interceptor for Chrome to approve PWA installation
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
