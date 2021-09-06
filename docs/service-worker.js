/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/pwa-project/precache-manifest.bc99beb456b382d094ead7182c1b1417.js"
);

workbox.core.setCacheNameDetails({prefix: "pwa-projct"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/987d-2400-2412-2e3-8300-44e6-dbda-186-8918.ngrok.io\/api\/v1\/.*/, workbox.strategies.networkFirst({ "cacheName":"medipad-api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"maxAgeSeconds":300,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/987d-2400-2412-2e3-8300-44e6-dbda-186-8918.ngrok.io\/api\/v1\/.*/, workbox.strategies.networkOnly({ plugins: [new workbox.backgroundSync.Plugin("medipad-api-que")] }), 'POST');
