const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome!'
    });
});

// ABOUT ROUTE
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
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