var tests = [];
for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: '/base/',
    paths: {
        'angular': 'app/vendors/angular/angular',
        'angular-route': 'app/vendors/angular-route/angular-route',
        'domReady': 'app/vendors/requirejs-domready/domReady',

        'jquery': 'app/vendors/pearsonstrap-0.9.0/js/jquery',
        'modernizr': 'app/vendors/pearsonstrap-0.9.0/js/modernizr',
        'pearson-bootstrap': 'app/vendors/pearsonstrap-0.9.0/js/bootstrap',
        'pearsonstrap': 'app/vendors/pearsonstrap-0.9.0/js/pearsonstrap'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'jquery': {
            exports: 'jquery'
        },
        'pearson-bootstrap': {
            deps: ['jquery', 'modernizr'],
            exports: 'pearson-bootstrap'
        },
        'pearsonstrap': {
            deps: ['jquery', 'pearson-bootstrap'],
            exports: 'pearsonstrap'
        }
    },
    packages: [
        { name: 'component1',
            location: 'app/common/component1',
            main: 'index'
        }
    ],
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});