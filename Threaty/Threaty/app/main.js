requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal':'../Scripts/durandal',
        'plugins' : '../Scripts/durandal/plugins',
        'transitions' : '../Scripts/durandal/transitions',
        'knockout': '../Scripts/knockout-3.4.0',
        'bootstrap': '../Scripts/bootstrap',
        'jquery': '../Scripts/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

function configToastr() {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    configToastr();
    app.title = 'Threaty';
    
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['togglebutton']
        }
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});