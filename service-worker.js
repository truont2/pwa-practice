// import workbox through cdn
// library that helps build pwa quickly and reliably
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

workbox.routing.registerRoute(
    ({request}) => request.desitnation === 'image',
    new workbox.strategies.NetworkFirst()
);