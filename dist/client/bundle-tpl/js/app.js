/**
 * loads all modules and wraps them up into the main module (Single Page App)
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'angular-route'
    /*, 
     * here comes components includes
    'component1'*/

], function (angular) {
    'use strict';

    return angular.module('app', [
       // 'component1',
        'ngRoute'
    ]);
});
