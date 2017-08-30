
const express = require('express');

const app = express();

app.get('/', function(res, req) {
    res.send('<h1>HELLO WORLD</h1>')
});

app.listen(3000, function() {
    console.log('FOO');
});
