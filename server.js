const express = require('express');

var app = express();

//SET ROUTE
app.get('/', (req, res) => {
    //res.send('Hello Express!');
    res.send({
        name: 'Chris',
        likes: [
            'guitar',
            'racecars'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Error handling request.'
    });
});

//SET PORT FOR EXPRESS TO LISTEN
app.listen(1337);