const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// //SET ROUTE
// app.get('/', (req, res) => {
//     //res.send('Hello Express!');
//     res.send({
//         name: 'Chris',
//         likes: [
//             'guitar',
//             'racecars'
//         ]
//     });
// });

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('index.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome!'
    });
});

// ABOUT ROUTE
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

// BAD LINK ERROR ROUTE
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request.'
    });
});

//SET PORT FOR EXPRESS TO LISTEN
app.listen(1337, () => {
    console.log('Server is up on port 1337');
});