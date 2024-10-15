/**
 * Here no cache means browser will cache the response
 * But revalidate with the server on each request
 * This directive means that cached versions of the requested 
 * resource cannot be used without first checking to see if 
 * there is an updated version. This is typically done using an ETag
 * UseCase: For user information
 */
const express = require('express')
const app = express();

// Middleware for setting cache-control
function noCache(req, res, next) {
    res.set('Cache-Control', 'no-cache');
    next();
}

app.get('/dynamic-content', noCache, (req, res) => {
    console.log('API Call')
    res.send('This is dynamic content. Always validated with server.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})