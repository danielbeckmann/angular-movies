(function () {
    'use strict';

    var app = angular.module('movieModule');

    app.directive('movieList', function () {
        return {
            restrict: 'E',
            scope: {
                source: '=',
                sort: '='
            },
            templateUrl: '/app/components/movie/movieList.html'
        };
    });
}());
