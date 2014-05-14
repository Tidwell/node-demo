var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static(__dirname + '/public'));

routes.bind(app);

app.listen(1337);