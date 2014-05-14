var config = require('./configs/local');

var env = process.argv[2];
if (env) {
	config = require('./configs/'+env);
}

var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static(__dirname + config.publicDirectory));

routes.bind(app);

app.listen(1337);