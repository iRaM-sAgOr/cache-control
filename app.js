/**
 * Simple way to understand the cache control.
 * Here we have demonstrated the power of max-age
 * Here max-age has one hour of cache. within one hour
 * the api will not hit the server. u can test by hitting http://localhost:3000/static-resource
 * Usercase: for MVC framework, if we hit html or css, we can take the measure
 */
const express = require('express')
const app = express();

// Middleware for setting cache-control
function cacheControl(req, res, next) {
    res.set('Cache-Control', 'public, max-age=3600');
    next()
}

app.get('/static-resource', cacheControl, (req, res) => {
    console.log('API Called')
    res.send('This is a static Resource, cached for one hour')
})

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})