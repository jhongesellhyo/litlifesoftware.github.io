'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a77914768960d0a004c63eafc1e72060",
"assets/assets/fonts/CustomSVGIcons/CustomSVGIcons.ttf": "6672a1f3cda23a36484fca1ed16fc559",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "e3242149669bebf6afc4b0b5d22ec6ae",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "e375c6fe9bbeadb38d4911107e480378",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "94603128108f9cf9b26626564265c1d0",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "2f354053d1c9c36f533ebd226698bfa5",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "bbcd5bbb5993808a92df01a5dfef77cd",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b50f5872459e8e17eaffd5d57a2b2f8e",
"assets/assets/images/png/google-play-badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/png/Irid_Film_Club_Logo.png": "31ce1bbee380de16a1a82ee07b4b537d",
"assets/assets/images/png/lit_Life_Software_Final-01.png": "9a8232ce304c898669c6a2de982cc05c",
"assets/assets/images/png/lit_Life_Software_Smiley-01.png": "099ab04aeff57d4df33789a87cf7629d",
"assets/assets/images/png/lit_Life_Software_Wordmark-01.png": "89d63cfbf7c5997138c036682dceb3ab",
"assets/FontManifest.json": "f17d8d24eaca794232120f989fd1bfc8",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "893e670d6594fb592aa71205a86dd814",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.ico": "862d5f6072bb6f0c8b3837080e1ad7bd",
"index.html": "234243ddd030e67cc42c2e853272b4bf",
"/": "234243ddd030e67cc42c2e853272b4bf",
"main.dart.js": "74cc85845c10a400d0eb2f8078853438"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
