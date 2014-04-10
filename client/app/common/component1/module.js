/**
 * definition of module - container for all parts of this module
 * while creating new element like controller, directive etc. include this module
 * and attach this new element to this module
 **/
define(['angular'], function (ng) {
    'use strict';
    return ng.module('component1', []);
});
