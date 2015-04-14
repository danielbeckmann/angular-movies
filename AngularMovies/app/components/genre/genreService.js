(function () {
    'use strict';

    var app = angular.module('genreModule');
    app.factory('genreService', ['apiService', genreService]);

    function genreService(api) {
        var base_url = 'genre/';

        var getMovieGenres = function () {
            return api.getResource(base_url + 'movie/list');
        }

        var getTVGenres = function () {
            return api.getResource(base_url + 'tv/list');
        }

        var getMovies = function (genreId, page) {
            return api.getResource(base_url + genreId + '/movies', { page: page || 1 });
        }

        return {
            getMovieGenres: getMovieGenres,
            getTVGenres: getTVGenres,
            getMovies: getMovies
        };
    };
}());
