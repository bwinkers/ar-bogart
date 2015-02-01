var bogart = require('bogart');

module.exports = function (router, viewEngine, connection) {
    router = router || bogart.router();

    // Homepage route
    router.get('/auth', function (req) {

        var service = {
            "_links": {
                "register": {
                    "ref": "register",
                    "method": "POST",
                    "href": "/register"
                },
                "login": {
                    "ref": "login",
                    "method": "POST",
                    "href": "/login"
                },
                "logout": {
                    "ref": "logout",
                    "method": "GET",
                    "href": "/logout"
                },
                "cancel": {
                    "ref": "cancel",
                    "method": "POST",
                    "href": "/cancel"
                },
                "register": {
                    "ref": "register",
                    "method": "POST",
                    "href": "/register"
                },
                "reset": {
                    "ref": "reset",
                    "method": "POST",
                    "href": "/reset"
                }
            }
        };

        if(req.isXMLHttpRequest) {
            return bogart.json(service);
        } else {
            return viewEngine.respond('pages/auth.html', {
                locals: {
                    title: 'ActiveRules Auth Service',
                    links: service._links
                }
            })
        }

    });
}