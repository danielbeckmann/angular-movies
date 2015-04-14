(function () {
    'use strict';

    var app = angular.module('common');

    app.controller('tabsController', function () {
        this.tab = 1;

        this.setTab = function (newValue) {
            this.tab = newValue;
        };

        this.isSet = function (tabName) {
            return this.tab === tabName;
        };
    });
}());
