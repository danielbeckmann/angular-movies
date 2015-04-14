(function () {
    'use strict';

    var app = angular.module('genreModule');

    app.controller('GenreCtrl', ['genreService', genreController]);
    function genreController(genreService) {
        var vm = this;

        // Load movie genres
        genreService.getMovieGenres().success(function (response) {
            vm.genreList = response.genres;
        });
    };

    app.controller('GenreDetailCtrl', ['$routeParams', 'ngTableParams', 'genreService', genreDetailsController]);
    function genreDetailsController($routeParams, ngTableParams, genreService) {
        var vm = this;
        var genreId = $routeParams.genreId;

        // Load the current genre name
        genreService.getMovieGenres().success(function (response) {
            vm.name = Enumerable.From(response.genres).FirstOrDefault('', '$.id == ' + genreId).name;
        });

        // Setup the genre table
        vm.tableParams = new ngTableParams({
            page: 1, // current page
            count: 9 // pager size
        }, {
            total: 0, // item count
            counts: [6, 9, 12, 15, 18], // pager sizes
            getData: function ($defer, params) { // data provider function
                // Get movies (20 results per page by movie api)
                genreService.getMovies(genreId, params.page()).success(function (response) {
                    // Set total items
                    params.total(response.total_results);

                    // Set data and limit to current pager size
                    $defer.resolve(response.results.slice(0, params.count()));
                });
            }
        });
    };
}());
