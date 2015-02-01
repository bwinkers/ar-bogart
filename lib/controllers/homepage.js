var bogart = require('bogart');

module.exports = function (router, viewEngine, connection) {
    router = router || bogart.router();

    // Homepage route
    router.get('/', function (req) {
        return viewEngine.respond('pages/homepage.html', {
            locals: {
                title: 'Welcome!'
            }
        })
    });
}