module.exports = function (router, viewEngine, connection) {
	require('../controllers/homepage')(router, viewEngine, connection);
}