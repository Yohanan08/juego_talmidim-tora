/* Service worker — permite usar la app sin internet.
   Cada vez que cambies archivos, sube el número de versión. */
const VERSION = "talmidim-v4";
const ARCHIVOS = [
  "./", "index.html", "css/styles.css", "js/data.js", "js/app.js", "manifest.json",
  "icons/icon-192.png", "icons/icon-512.png",
  "juegos-de-mesa/camino-a-la-tierra-prometida.pdf",
  "juegos-de-mesa/memoria-alef-bet.pdf",
  "juegos-de-mesa/bingo-tora-y-fiestas.pdf",
  "juegos-de-mesa/quien-soy-mimica.pdf"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // p. ej. Hebcal va directo a la red
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((guardado) =>
      guardado || fetch(e.request).then((r) => {
        const copia = r.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copia));
        return r;
      }).catch(() => caches.match("index.html"))
    )
  );
});
