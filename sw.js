// Service worker: makes the app work with no internet after the first visit.
// You generally don't need to edit this file.
//
// IMPORTANT: whenever you change index.html, style.css, app.js, manifest.json,
// or any file in data/, icons/, or fonts/, bump CACHE_NAME below (e.g.
// "quran-app-v13" -> "quran-app-v14"). That tells returning visitors'
// browsers to fetch your updated files instead of serving old cached ones.

const CACHE_NAME = "quran-app-v16";

const ASSETS_TO_CACHE = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "adhan.min.js",
  "data/001-al-fatiha.js",
  "data/002-al-baqarah.js",
  "data/003-aal-e-imran.js",
  "data/004-an-nisa.js",
  "data/005-al-maidah.js",
  "data/006-al-anam.js",
  "data/007-al-araf.js",
  "data/008-al-anfal.js",
  "data/009-at-tawbah.js",
  "data/010-yunus.js",
  "data/011-hud.js",
  "data/012-yusuf.js",
  "data/013-ar-rad.js",
  "data/014-ibrahim.js",
  "data/015-al-hijr.js",
  "data/016-an-nahl.js",
  "data/017-al-isra.js",
  "data/018-al-kahf.js",
  "data/019-maryam.js",
  "data/020-ta-ha.js",
  "data/021-al-anbiya.js",
  "data/022-al-hajj.js",
  "data/023-al-muminun.js",
  "data/024-an-nur.js",
  "data/025-al-furqan.js",
  "data/026-ash-shuara.js",
  "data/027-an-naml.js",
  "data/028-al-qasas.js",
  "data/029-al-ankabut.js",
  "data/030-ar-rum.js",
  "data/031-luqman.js",
  "data/032-as-sajdah.js",
  "data/033-al-ahzab.js",
  "data/034-saba.js",
  "data/035-fatir.js",
  "data/036-ya-sin.js",
  "data/037-as-saffat.js",
  "data/038-sad.js",
  "data/039-az-zumar.js",
  "data/040-ghafir.js",
  "data/041-fussilat.js",
  "data/042-ash-shura.js",
  "data/043-az-zukhruf.js",
  "data/044-ad-dukhan.js",
  "data/045-al-jathiyah.js",
  "data/046-al-ahqaf.js",
  "data/047-muhammad.js",
  "data/048-al-fath.js",
  "data/049-al-hujurat.js",
  "data/050-qaf.js",
  "data/051-adh-dhariyat.js",
  "data/052-at-tur.js",
  "data/053-an-najm.js",
  "data/054-al-qamar.js",
  "data/055-ar-rahman.js",
  "data/056-al-waqiah.js",
  "data/057-al-hadid.js",
  "data/058-al-mujadila.js",
  "data/059-al-hashr.js",
  "data/060-al-mumtahanah.js",
  "data/061-as-saff.js",
  "data/062-al-jumuah.js",
  "data/063-al-munafiqun.js",
  "data/064-at-taghabun.js",
  "data/065-at-talaq.js",
  "data/066-at-tahrim.js",
  "data/067-al-mulk.js",
  "data/068-al-qalam.js",
  "data/069-al-haqqah.js",
  "data/070-al-maarij.js",
  "data/071-nuh.js",
  "data/072-al-jinn.js",
  "data/073-al-muzzammil.js",
  "data/074-al-muddaththir.js",
  "data/075-al-qiyamah.js",
  "data/076-al-insan.js",
  "data/077-al-mursalat.js",
  "data/078-an-naba.js",
  "data/079-an-naziat.js",
  "data/080-abasa.js",
  "data/081-at-takwir.js",
  "data/082-al-infitar.js",
  "data/083-al-mutaffifin.js",
  "data/084-al-inshiqaq.js",
  "data/085-al-buruj.js",
  "data/086-at-tariq.js",
  "data/087-al-ala.js",
  "data/088-al-ghashiyah.js",
  "data/089-al-fajr.js",
  "data/090-al-balad.js",
  "data/091-ash-shams.js",
  "data/092-al-layl.js",
  "data/093-ad-duha.js",
  "data/094-ash-sharh.js",
  "data/095-at-tin.js",
  "data/096-al-alaq.js",
  "data/097-al-qadr.js",
  "data/098-al-bayyinah.js",
  "data/099-az-zalzalah.js",
  "data/100-al-adiyat.js",
  "data/101-al-qariah.js",
  "data/102-at-takathur.js",
  "data/103-al-asr.js",
  "data/104-al-humazah.js",
  "data/105-al-fil.js",
  "data/106-quraysh.js",
  "data/107-al-maun.js",
  "data/108-al-kawthar.js",
  "data/109-al-kafirun.js",
  "data/110-an-nasr.js",
  "data/111-al-masad.js",
  "data/112-al-ikhlas.js",
  "data/113-al-falaq.js",
  "data/114-an-nas.js",
  "data/indian-cities.js",
  "data/juz-list.js",
  "data/surah-list.js",
  "icons/icon-128.png",
  "icons/icon-144.png",
  "icons/icon-152.png",
  "icons/icon-192.png",
  "icons/icon-384.png",
  "icons/icon-512.png",
  "icons/icon-72.png",
  "icons/icon-96.png",
  "icons/icon-maskable-512.png",
  "fonts/NotoNastaliqUrdu.ttf",
  "fonts/ScheherazadeNew-Bold.ttf",
  "fonts/ScheherazadeNew-Regular.ttf"
];

// Install: download and cache every local file listed above.
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: remove any old-version caches left over from a previous CACHE_NAME.
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve from cache first (works offline), fall back to network.
// Anything fetched successfully over the network (like the one remaining
// Indopak Nastaleeq font, hosted externally) also gets saved into the cache
// so it works offline from then on too, after its first successful load.
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;

      return fetch(event.request).then(function (response) {
        if (!response || response.status !== 200) return response;
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return cached;
      });
    })
  );
});
