var express = require('express');

var routes = require('./routes');

var app = express();

routes.bind(app);

app.listen(1337);