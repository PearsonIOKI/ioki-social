require.config({
    baseUrl: './js',

    paths: {
        'angular': '../../vendor/angular/angular',
        'angular-route': '../../vendor/angular-route/angular-route',
        'domReady': '../../vendor/requirejs-domready/domReady',

        'jquery' : '../../vendor/pearsonstrap-0.9.0/js/jquery',
        'modernizr' : '../../vendor/pearsonstrap-0.9.0/js/modernizr',
        'pearson-bootstrap' : '../../vendor/pearsonstrap-0.9.0/js/bootstrap',
        'pearsonstrap' : '../../vendor/pearsonstrap-0.9.0/js/pearsonstrap'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'jquery' : {
            exports : 'jquery'
        },
        'pearson-bootstrap' : {
            deps : ['jquery', 'modernizr'],
            exports : 'pearson-bootstrap'
        },
        'pearsonstrap' : {
            deps : ['jquery','pearson-bootstrap'],
            exports : 'pearsonstrap'
        }
    },
    //define where modules are - necessary for relative paths in modules
    /*packages: [
        { name: 'component1',
            location: '../../common/component1',
            main: 'index'
        }
    ]*/


});
