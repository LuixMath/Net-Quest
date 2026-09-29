const CACHE = "netquest-v1.0.0";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data/questions.js",
  "./manifest.webmanifest",
  "./assets/favicon.svg",
  "./assets/apple-touch-icon.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/dungeon-bg.svg",
  "./assets/player.svg",
  "./assets/slime.svg",
  "./assets/wisp.svg",
  "./assets/chest.svg",
  "./assets/gate.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fresh = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
