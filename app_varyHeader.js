/**
 * Here client will set Accept-Language: en during api call, server check the header and during response it add the vary header
 * So for the same request browser will decide, if the language is still en, then it will return from cache. 
 * This is particularly useful when the server needs to send different responses for different clients or preferences
 * based on certain request headers, like Accept-Encoding, Accept-Language, or User-Agent
 * 
 */
const express = require('express')
const app = express();

// Middleware for varying by Accept-Language
function varyByLanguage(req, res, next) {
    res.set('Vary', 'Accept-Language'); // Store different versions based on language
    next();
}

app.get('/localized-content', varyByLanguage, (req, res) => {
    const lang = req.headers['accept-language'] || 'en';
    if (lang.includes('fr')) {
        res.send('Contenu en français'); // French content
    } else if (lang.includes('es')) {
        res.send('Contenido en español'); // Spanish content
    } else {
        res.send('Content in English'); // Default English content
    }
});


app.listen(3000, () => {
    console.log('Serve is up and running at ', 3000)
})