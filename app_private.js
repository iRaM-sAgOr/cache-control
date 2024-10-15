/**
 * Only cached in user's device
 * Not in shared caches(CDNs or proxies from caching)
 */
const express = require('express')
const app = express();

// Middleware for private cache
function privateCache(req, res, next) {
    res.set('Cache-Control', 'private, max-age=3600');
    next();
}

app.get('/user-dashboard', privateCache, (req, res) => {
    res.send('User dashboard. Only cached on the user’s browser.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})