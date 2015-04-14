(function () {
    'use strict';

    var app = angular.module('moviesApp');

    // Setup routes
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    redirectTo: '/movies'
                }).
                when('/movies', {
                    templateUrl: '/app/components/movie/movieView.html',
                    controller: 'MovieCtrl',
                    controllerAs: 'movies'
                }).
                when('/movies/:movieId', {
                    templateUrl: '/app/components/movie/movieDetailView.html',
                    controller: 'MovieDetailCtrl',
                    controllerAs: 'movie'
                }).
                when('/favorites', {
                    templateUrl: '/app/components/movie/movieView.html',
                    controller: 'FavoriteCtrl',
                    controllerAs: 'movies'
                }).
                when('/genres', {
                    templateUrl: '/app/components/genre/genreView.html',
                    controller: 'GenreCtrl',
                    controllerAs: 'genres'
                }).
                when('/genres/:genreId', {
                    templateUrl: '/app/components/genre/genreDetailView.html',
                    controller: 'GenreDetailCtrl',
                    controllerAs: 'genre'
                }).
                when('/search/:search', {
                    templateUrl: '/app/components/search/searchResultsView.html',
                    controller: 'SearchResultCtrl',
                    controllerAs: 'search'
                }).
                otherwise({
                    redirectTo: '/movies'
                });
        }]);

    // Setup url whitelist
    app.config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          '*://www.youtube.com/**'
        ]);
    });
}());