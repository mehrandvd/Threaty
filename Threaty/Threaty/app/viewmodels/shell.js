define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'tracer', title:'IOC Search', moduleId: 'viewmodels/tracer', nav: true },
                { route: 'malsync', title: 'Threat Sync', moduleId: 'viewmodels/malsync', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});