define(['component1'], function () {
    'use strict';

    describe('Component1 filters: interpolate', function () {


        beforeEach(function () {
            module('component1');
        });

        it('return true if filter exists', inject(function ($filter) {
            expect($filter('interpolate')).not.toBeNull();
        }));

        it("Generate string with proper version", inject(function (interpolateFilter) {
            expect(interpolateFilter('Current version is v%VERSION%.')).toEqual('Current version is v0.1.');
        }));

        it("Generate string with proper version", inject(function (interpolateFilter) {
            expect(interpolateFilter('Current version is v%VERSION%.')).not.toEqual('Current version is v0.2.');
        }));
    });

});