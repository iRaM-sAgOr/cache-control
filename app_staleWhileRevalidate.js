/**
 * For the first 1 hour after the initial response, 
 * the browser serves the cached content without making any calls to the server. 
 * During this time, no revalidation or API call occurs
 * 
 * After the 1 hour (when max-age expires), 
 * the browser enters the stale-while-revalidate period.
 * The browser will serve the stale (cached) content immediately for faster response.
 * At the same time, it will fetch the updated data in the background by making an API call to the server.
 * After this combined 1 hour + 5 minutes, both the max-age and the stale-while-revalidate periods expire.
 * 
 */
const express = require('express')
const app = express();

// Middleware for stale-while-revalidate
function staleWhileRevalidate(req, res, next) {
    res.set('Cache-Control', 'public, max-age=5, stale-while-revalidate=10');
    next();
}

app.get('/stale-content', staleWhileRevalidate, (req, res) => {
    console.log('APP Call')
    res.send('Serve stale content while fetching a fresh version in the background.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})