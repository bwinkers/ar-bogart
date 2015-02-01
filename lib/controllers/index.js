module.exports = function (router, viewEngine) {
	require('../controllers/homepage')(router, viewEngine),
    require('../controllers/auth')(router, viewEngine);
}