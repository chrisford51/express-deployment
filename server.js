// require express dependency
const express = require('express');
// require handlebars dependency
const hbs = require('hbs');
// require filesystem dependency
const fs = require('fs');
// store the port we are using for the App
const port = process.env.PORT || 1337;

// create variable for express application
var app = express();

//make partials avail for Handlebars
hbs.registerPartials(__dirname + '/views/partials');
//set view engine
app.set('view engine', 'hbs');

// use middleware to get timestamp, HTTP method, and path requested from enduser requests and append to server.log
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log')
        }
    });
    next();
});
// // Maintenance Middleware
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

// use middleware to set static route to project
app.use(express.static(__dirname + '/public'));

// register helper to get current year as a function so we can use it in footer
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

// register helper to get text and sent to uppercase.
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

// //Maintenance Route
// app.get('/maintenance', (req, res) => {
//     res.render('maintenance.hbs', {
//         pageHeading: 'The Site is Currently Down for Maintenence :(',
//         pageParagraph: 'Please try again later.'
//     });
// });

//SET PORT FOR EXPRESS TO LISTEN
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});