
(function () {
    'use strict';

    var app = angular.module('movieModule');

    app.factory('movieService', ['apiService', movieService]);
    function movieService(api) {
        var base_url = 'movie/';

        var getNowPlaying = function () {
            return api.getResource(base_url + 'now_playing');
        };

        var getUpcoming = function () {
            return api.getResource(base_url + 'upcoming');
        };

        var getPopular = function () {
            return api.getResource(base_url + 'popular');
        };

        var getTopRated = function () {
            return api.getResource(base_url + 'top_rated');
        };

        var getMovie = function (movieId, includeAdditionalData) {
            if (includeAdditionalData)
                return api.getResource(base_url + movieId, { append_to_response: 'trailers,credits,reviews,similar' });
            else
                return api.getResource(base_url + movieId);
        };

        var getFavorites = function () {
            return JSON.parse(localStorage.getItem('favorites')) || [];
        };

        var setFavorites = function (favorites) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        };

        return {
            getNowPlaying: getNowPlaying,
            getUpcoming: getUpcoming,
            getPopular: getPopular,
            getTopRated: getTopRated,
            getMovie: getMovie,
            getFavorites: getFavorites,
            setFavorites: setFavorites
        };
    };
}());
