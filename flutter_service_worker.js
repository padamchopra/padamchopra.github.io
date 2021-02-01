'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "bd7b7118bda27b4f247feeb5e0e731e9",
"version.json": "d88d68409ecd52843d155edfec883e69",
"favicon_io.zip": "787e917c208eb898bce154ac455aa02d",
"favicon.ico": "4426151a4b2301d9e5cff174f2f9f8f3",
"index.html": "1fe532cca0337ea9bfea7d9c240acfc8",
"/": "1fe532cca0337ea9bfea7d9c240acfc8",
"android-chrome-192x192.png": "bf60b687f779f4551ef6e8ad9e063240",
"apple-touch-icon.png": "165d3a40e18009cd6df9f2f956e13716",
"main.dart.js": "45b02dfdcaa23b23150f2838db64405a",
"favicon.png": "3d38ba40e43ded4c44fd4b428463248a",
"android-chrome-512x512.png": "b95ee1018d787f3dad4663710bb984e0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2ded165fb8d40f13a514f8f271c55b0",
"assets/images/deca_bw.png": "bdc967ee4ae85d1722eeaa265c954386",
"assets/images/imaginecup_col.png": "8ddf42d7665b5917a2577ff87ceaf461",
"assets/images/me_smiling.png": "574bbd63af073fabca9f3c334210b0b3",
"assets/images/digit_bw.png": "d8ba9ef97fd63267b344270a6eaeac02",
"assets/images/algorand_bw.png": "79e5e1a07770a3f8e228599936d13035",
"assets/images/yourstory_col.png": "5afd3eb57c834f74e96cfbb186afba61",
"assets/images/broadcastmantra_bw.png": "b87aa1d855efd7d2665149f8b3fe87b9",
"assets/images/ielts_col.png": "24589e5b0212db55f38a661ddd929a5f",
"assets/images/digit_col.png": "abd954e68f68ce59ae038e607cb9f4ed",
"assets/images/broadcastmantra_col.png": "88bdbeee38bfb114bad7bb69cb40d9d3",
"assets/images/ielts_bw.png": "f1e8e5e8180762bf059f25ddd29ca171",
"assets/images/me_confetti.png": "8ea07f8ec28dc0c94dc26aca35f40d1a",
"assets/images/deca_col.png": "365bc52ba61a07f940b64efafa4e120c",
"assets/images/algorand_col.png": "80d86c41ad1cc1d22b02dba606b44095",
"assets/images/microsoft_col.png": "69dc5075637780fa6a1848e815d72cc9",
"assets/images/imaginecup_bw.png": "9b15bfd5164d7300f833a1d5341b4903",
"assets/images/microsoft_bw.png": "00cc5e716b5223c6de8c0603febf6cdb",
"assets/images/yourstory_bw.png": "f64d005ac61b570728d23cb96a4ed22b",
"assets/AssetManifest.json": "c54110aed05ce767fb1029f60c11d684",
"assets/NOTICES": "9499043c7caf0ffba58a3b5ba9b48e38",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/data/transcript-2A.pdf": "5a0743a653cd0806a7ce513dfe51620b",
"assets/data/resume-android.pdf": "e4fbc1cfd1e36866065c156941c7b0ff",
"assets/data/resume.pdf": "8ea393e40e9e8bea3620a56e50c29dac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
