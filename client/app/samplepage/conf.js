require.config({
    baseUrl: './js',

    paths: {
        'angular': '../../vendors/angular/angular',
        'angular-route': '../../vendors/angular-route/angular-route',
        'domReady': '../../vendors/requirejs-domready/domReady',

        'jquery' : '../../vendors/pearsonstrap-0.9.0/js/jquery',
        'modernizr' : '../../vendors/pearsonstrap-0.9.0/js/modernizr',
        'pearson-bootstrap' : '../../vendors/pearsonstrap-0.9.0/js/bootstrap',
        'pearsonstrap' : '../../vendors/pearsonstrap-0.9.0/js/pearsonstrap'
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
    packages: [
        { name: 'component1',
            location: '../../common/component1',
            main: 'index'
        }
    ]


});
