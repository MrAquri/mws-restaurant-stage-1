var cacheNum = 'mws-restaurant-v1'

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
      'img/*',
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
