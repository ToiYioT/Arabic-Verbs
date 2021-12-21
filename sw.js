
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/index.html',
    '/style.css',
    '/scripts/main.js',
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function (event) {

    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    console.log(`[Hitting cache] Fetched resource ${event.request.url}`);
                    return response;
                }
                console.log(`[Fetching from web] Fetched resource ${event.request.url}`);
                return fetch(event.request);
            }
            )
    );
});

self.addEventListener('activate', function (event) {

    var cacheAllowlist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});