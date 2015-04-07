var express = require('express');
var index = require('./index');
var page = require('./page');

var app = express();

app.get('/', index);
app.get('/page', page);

console.log('Go to 4k');
app.listen(4000);
