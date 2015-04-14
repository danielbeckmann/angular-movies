(function () {
    'use strict';

    var app = angular.module('movieModule');


    app.controller('MovieCtrl', ['movieService', movieController]);
    function movieController(movieService) {
        var vm = this;
        vm.orderBy = 'release_date';
        vm.title = 'Now playing';

        // Load now playing movies
        movieService.getNowPlaying().success(function (response) {
            vm.movieList = response.results;
        });
    };

    app.controller('MovieDetailCtrl', ['$routeParams', '$q', 'movieService', movieDetailController]);
    function movieDetailController($routeParams, $q, movieService) {
        var vm = this;
        var movieId = $routeParams.movieId;

        vm.isLoading = true;

        // Gets the data for the current movie
        movieService.getMovie(movieId, true).success(function (response) {
            vm.data = response;

            // Gets the cast for the current movie
            if (response.credits && response.credits.cast.length > 0) {
                vm.cast = response.credits.cast.slice(0, 8);
            }

            // Gets the trailer
            if (response.trailers && response.trailers.youtube.length > 0) {
                vm.trailer = "https://www.youtube.com/embed/" + response.trailers.youtube[0].source;
            }

            // Gets the reviews
            if (response.reviews) {
                vm.reviews = response.reviews.results;
            }

            // Gets the similar movies
            if (response.similar) {
                vm.similar = response.similar.results.splice(0, 6);
            }

            vm.isLoading = false;
        });

        // Favorites a movie
        this.addFavorite = function () {
            var favorites = movieService.getFavorites();

            if (this.isFavorite()) {
                var index = favorites.indexOf(movieId);
                favorites.splice(index, 1);
            }
            else {
            favorites.push(movieId);
            }

            movieService.setFavorites(favorites);
        };

        // Gets a value indicating whether a movie is a favorite
        this.isFavorite = function() {
            var favorites = movieService.getFavorites();
            return favorites.indexOf(movieId) > -1;
        };
    };
}());
