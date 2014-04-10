define(['component1'], function () {
    'use strict';

    describe('Component1 controllers: my-ctrl-1', function () {

        beforeEach(function () {
            module('component1');
        });


        it('return false', (function () {
            expect(true).toBe(false);
        }));

    });

});