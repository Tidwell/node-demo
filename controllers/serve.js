function serveHello(req, res) {
	res.send('Hello World Express from the routes file');
}

module.exports = {
	serve: serveHello
}