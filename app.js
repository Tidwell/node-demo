var config = require('./config');

var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static(__dirname + config.publicDirectory));

routes.bind(app);

app.listen(1337);