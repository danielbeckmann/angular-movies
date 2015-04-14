(function () {
    'use strict';

    var app = angular.module('movieModule');

    app.controller('FavoriteCtrl', ['movieService', favoriteController]);
    function favoriteController(movieService) {
        var vm = this;
        vm.orderBy = 'release_date';
        vm.title = 'Favorites';
        vm.movieList = [];

        // Get favorite movie ids
        var favorites = movieService.getFavorites();

        // Load now playing movies
        for (var i = 0; i < favorites.length; i++) {
            movieService.getMovie(favorites[i]).success(function (response) {
                vm.movieList.push(response);
            });
        }
    };
}());
