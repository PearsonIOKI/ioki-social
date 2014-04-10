module.exports = function (config) {
    'use strict';

    config.set({
        basePath: './',

        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            'app/vendors/angular/angular.js',
            'app/vendors/angular-mocks/angular-mocks.js',

            {pattern: 'app/**/*.js', included: false},

            /* Load require modules */
            'js_test_config_karma.js'
        ],

        exclude: [],
        reporters: ['progress', 'junit'],
        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'test-results.xml'
        },

        // web server port
        // CLI --port 9876
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: ['Firefox'],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 10000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: true,

        // report which specs are slower than 100ms
        // CLI --report-slower-than 100
        reportSlowerThan: 100,

        plugins: [
            'karma-jasmine',
            'karma-requirejs',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter'
        ]
    });
};