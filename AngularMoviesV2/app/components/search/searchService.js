(function () {
    'use strict';

    var app = angular.module('searchModule');

    app.factory('searchService', ['apiService', searchService]);
    function searchService(api) {
        var base_url = 'search/movie';

        var findMovies = function (query, page) {
            return api.getResource(base_url, { query: query, sort_by: 'release_date.desc', page: page || 1 });
        }

        return {
            findMovies: findMovies
        };
    };
}());
