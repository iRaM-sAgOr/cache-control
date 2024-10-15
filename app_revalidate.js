/**
 * The browser will cache the response for 1 hour, but after that, 
 * it will revalidate with the server before serving the cached copy.
 * This is useful for resources that may become stale but don’t need frequent updates.
 */
const express = require('express')
const app = express();

// Middleware for must-revalidate
function mustRevalidate(req, res, next) {
    res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
    next();
}

app.get('/revalidating-resource', mustRevalidate, (req, res) => {
    console.log('API call for revalidate')
    res.send('Cached resource, but must revalidate after expiration.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})