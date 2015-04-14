(function () {
    'use strict';

    var app = angular.module('common');
    app.directive('loadingIndicator', function () {
        return {
            restrict: 'E',
            scope: {
                loading: '='
            },
            template: '<div id="veil" ng-show="loading"></div><div id="loading" ng-show="loading"><img src="/assets/img/loading.gif" /><br />Loading...</div>'
        };
    });
}());
