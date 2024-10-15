/**
 * The browser caches the content for 1 hour.
 * If the cache is stale, it serves the stale content for 5 minutes while validating with the server.
 * The must-revalidate directive ensures that the server is always checked before serving stale content.
 */
const express = require('express')
const app = express();

function complexCacheControl(req, res, next) {
    res.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=300, must-revalidate');
    next();
}

app.get('/complex-caching', complexCacheControl, (req, res) => {
    res.send('Complex caching with multiple directives.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})