var bogart = require('bogart');

// Define the service
var apiSchema = {
    '_links': {
        'self': {
            'rel': 'self',
            'method': 'POST',
            'href': '/auth'
        },
        'register': {
            'rel': 'register',
            'method': 'POST',
            'href': '/auth/register'
        },
        'login': {
            'rel': 'login',
            'method': 'POST',
            'href': '/login'
        },
        'logout': {
            'rel': 'logout',
            'method': 'GET',
            'href': '/logout'
        },
        'cancel': {
            'rel': 'cancel',
            'method': 'POST',
            'href': '/auth/cancel'
        },
        'reset': {
            'rel': 'reset',
            'method': 'POST',
            'href': '/auth/reset'
        }
    }

};

module.exports = function (router, viewEngine, connection) {
    router = router || bogart.router();

    router.get('/auth', function (req) {

        // Determine if this is an Ajax request
        if(req.isXMLHttpRequest) {

            // Respond with JSON
            return bogart.json(service);

        } else {
            // Respond with simple HTML output

            var linksOut = [];
            var links =  apiSchema._links;
            for(var i in links) {
                linksOut.push(links[i]);
            }

            return viewEngine.respond('pages/serviceTemplate.html', {
                locals: {
                    title: 'ActiveRules Auth Service',
                    links: linksOut
                }
            })
        }

    });

    // Homepage route
    router.get('/auth/register', function (req) {
        
        var form = {
            terms: ['login']
        }

        if(req.isXMLHttpRequest) {
            return bogart.json(service);
        } else {

            var formOut = '';

            return viewEngine.respond('pages/formTemplate.html', {
                locals: {
                    title: 'ActiveRules Auth Service - Register',
                    form: formOut
                }
            })
        }

    });
}