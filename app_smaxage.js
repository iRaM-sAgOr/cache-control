/**
 * For resources behind a CDN, you want the shared cache (CDN) 
 * to cache the resource longer than the browser does.
 * The browser caches the response for 1 hour, but CDNs cache it for 1 day. 
 * This can reduce server load for resources served via CDNs.
 */
const express = require('express')
const app = express();

// Middleware for s-maxage
function sharedCache(req, res, next) {
    res.set('Cache-Control', 'public, max-age=3600, s-maxage=86400'); // 1 hour for browsers, 1 day for CDNs
    next();
}

app.get('/cdn-resource', sharedCache, (req, res) => {
    res.send('Cached for 1 hour on the browser, 1 day on the CDN.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})