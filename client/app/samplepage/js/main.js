require([
    'require',
    'angular',
    'pearsonstrap'


], function (require, ng) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!', './app', './routes'], function (document) {

        ng.bootstrap(document, ['app']);
    });
});

