define(['../module'], function (module1) {
    'use strict';
    module1.directive('appVersion', ['version', function (version) {
        return function (scope, elm) {
            elm.text(version);
        };
    }]);
});
