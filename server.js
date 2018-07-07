const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

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
app.listen(1337, () => {
    console.log('Server is up on port 1337');
});