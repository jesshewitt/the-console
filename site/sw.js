self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('offline').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './offline.html',
                './manifest.json',
                './css/main.css',
                './fonts/manrope-latin.woff2',
                './fonts/manrope-latin-ext.woff2',
                './fonts/manrope-latin-bold.woff2',
                './img/favicon.svg',
                './js/views/components/card-detail.js',
                './js/views/components/footer.js',
                './js/views/components/header.js',
                './js/views/pages/about.js',
                './js/views/pages/card.js',
                './js/views/pages/error404.js',
                './js/views/pages/home.js',
                './js/views/pages/reading.js',
                './js/app.js',
                './js/html.js',
                './js/rng.js',
                './js/theme.js',
                './data/cards.json',
                './data/categories.json',
                './sw.js'
            ])
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            // For page navigations, fall back to cached index.html so the
            // client-side router can render the requested path offline.
            if (event.request.mode === 'navigate') {
                return caches.match('./index.html')
            }
            return caches.match(event.request)
        })
    )
})
