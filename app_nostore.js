/**
 * A response with a ‘no-store’ 
 * directive cannot be cached anywhere
 * UserCase: payment details
 */
const express = require('express')
const app = express();

// Middleware for no-store
function noStore(req, res, next) {
    res.set('Cache-Control', 'no-store');
    next();
}

app.get('/login', noStore, (req, res) => {
    console.log('API call')
    res.send('Login page. No caching allowed.');
});

app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})