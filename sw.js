var cacheNum = 'mws-restaurant-v2'

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheNum).then(function(cache){
    return cache.addAll([
      '/',
      'index.html',
      'restaurant.html',
      'css/styles.css',
      'css/chosenstyles.css',
      'data/restaurants.json',
      '/img/*',
      'js/dbhelper.js',
      'js/main.js',
      'js/register.js',
      'js/restaurant_info.js',
    ]);
  }).catch(function(error) {
    console.log('Caches-open failed: ' + error);
  })

);
});

// Making new cache waiting and deleting the old cache
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('mws-restaurant-') &&
                        cacheName != cacheNum;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


// Matching stored caches so the app works offline
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
