function bindRoutes(app) {
	app.get('*', function(req, res) {
		res.send('Hello World Express from the routes file');
	});
}

module.exports = {
	bind: bindRoutes
};