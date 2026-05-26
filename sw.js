// Simple service worker to cache app shell and Onsen UI assets
const CACHE_NAME = 'u-festival-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/home.html',
  '/info.html',
  '/agenda.html',
  '/map.html',
  '/styles.css',
  '/assets/logo_white.svg',
  '/assets/logoWhite.png',
  '/assets/logoBlack.png',
  '/assets/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png',
  '/assets/info_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png',
  '/assets/music_note_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png',
  'https://unpkg.com/onsenui/css/onsenui.min.css',
  'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
  'https://unpkg.com/onsenui/js/onsenui.min.js'
];

// Helper: determine if a response is cacheable (ok or opaque)
function isCacheableResponse(response) {
  if (!response) return false;
  // opaque responses often have status 0; treat them as cacheable
  return response.ok || response.type === 'opaque' || response.status === 0;
}

self.addEventListener('install', event => {
  console.log('[sw] install');
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const results = await Promise.all(PRECACHE_URLS.map(async url => {
      try {
        // Use no-cors for cross-origin CDN assets so fetch doesn't fail on CORS
        const req = new Request(url, { mode: 'no-cors' });
        const res = await fetch(req);
        if (isCacheableResponse(res)) {
          try {
            await cache.put(url, res.clone());
            return { url, ok: true };
          } catch (e) {
            console.warn('[sw] cache.put failed for', url, e);
            return { url, ok: false, error: e };
          }
        } else {
          console.warn('[sw] not cacheable response for', url, res && res.status);
          return { url, ok: false };
        console.warn('[sw] fetch failed for', url, err && err.message);
        return { url, ok: false, error: err };
      }
  }));

  const failed = results.filter(r => !r.ok).map(r => r.url);
  if (failed.length) {
  console.warn('[sw] some resources failed to cache:', failed);
  // We don't throw here because addAll previously made install fail entirely;
  // allow install to succeed and continue with what we have cached.
    }
  })());
});
self.addEventListener('activate', event => {
  console.log('[sw] activate');
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => caches.match('/index.html'));
    })
  );
const CACHE_NAME = "u-festival-v1";
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/home.html",
  "/info.html",
  "/agenda.html",
  "/map.html",
  "/styles.css",
  "/assets/logo_white.svg",
  "/assets/logoWhite.png",
  "/assets/logoBlack.png",
  "/assets/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png",
  "/assets/info_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png",
  "/assets/music_note_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png",
  "https://unpkg.com/onsenui/css/onsenui.min.css",
  "https://unpkg.com/onsenui/css/onsen-css-components.min.css",
  "https://unpkg.com/onsenui/js/onsenui.min.js",
];

self.addEventListener("install", (event) => {
  console.log("[sw] install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
});

self.addEventListener("activate", (event) => {
  console.log("[sw] activate");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      ),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          // Could return a fallback page or image here
          return caches.match("/index.html");
        })
      );
    }),
  );
});
