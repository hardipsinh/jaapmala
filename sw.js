const CACHE_NAME = 'jaapmala-cache-v1';
// તમારી વેબસાઈટની જે ફાઇલો ઓફલાઇન ચલાવવી હોય તેના નામ અહિયાં લખો
const ASSETS = [
  '/jaapmala/',
  '/jaapmala/index.html',
  '/jaapmala/icon-192.png',
  '/jaapmala/icon-512.png'
];

// ફાઇલો ઇન્સ્ટોલ અને સેવ કરવી
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ઓફલાઇન હોય ત્યારે મેમરીમાંથી ફાઇલ લોડ કરવી
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
