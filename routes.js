var serveHello = require('./controllers/serve').serve;

function bindRoutes(app) {
	app.get('*', serveHello);
}

module.exports = {
	bind: bindRoutes
};