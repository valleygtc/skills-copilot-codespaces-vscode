// Create web server
// 1. Create web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the comments form
// 5. Create a route for the comments post
// 6. Create a route for the comments delete
// 7. Create a route for the comments edit

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require("body-parser");

// 2. Create a route for the home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// 3. Create a route for the comments page
app.get('/comments', function(req, res) {
    res.sendFile(path.join(__dirname + '/comments.html'));
});

// 4. Create a route for the comments form
app.get('/comments/new', function(req, res) {
    res.sendFile(path.join(__dirname + '/new.html'));
});

// 5. Create a route for the comments post
app.post('/comments', function(req, res) {
    res.send('This is the comments post route');
});

// 6. Create a route for the comments delete
app.delete('/comments/:id', function(req, res) {
    res.send('This is the comments delete route');
});

// 7. Create a route for the comments edit
app.put('/comments/:id', function(req, res) {
    res.send('This is the comments edit route');
});

// 8. Create a route for the comments edit
app.get('/comments/:id', function(req, res) {
    res.send('This is the comments edit route');
});

// 9. Start the web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));