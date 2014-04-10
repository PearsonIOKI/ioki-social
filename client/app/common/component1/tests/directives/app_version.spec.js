define(['angular', 'component1'], function (angular) {
    'use strict';

    describe('Component1 directives: app_version', function () {
        var $scope;
        var element;
        beforeEach(function () {
            module('component1');
        });
        beforeEach(inject(function ($compile, $rootScope) {
            $scope = $rootScope;
            element = angular.element("<p app-version></p>");
            $compile(element)($rootScope);

        }));

        it('should equal 0.1', (function () {
            expect(element.html()).toBe("0.1");
        }));

    });

});