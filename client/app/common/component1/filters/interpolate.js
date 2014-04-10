define(['../module'], function (module1) {
    'use strict';

    module1.filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
});
