(function () {
    'use strict';

    var app = angular.module('searchModule');

    app.controller('SearchCtrl', ['$location', searchController]);
    function searchController($location) {
        var vm = this;

        vm.find = function () {
            $location.path('/search/' + encodeURIComponent(vm.expression));
        };
    };

    app.controller('SearchResultCtrl', ['$routeParams', 'ngTableParams', 'searchService', searchResultController]);
    function searchResultController($routeParams, ngTableParams, searchService) {
        var vm = this;
        vm.search = decodeURIComponent($routeParams.search);

        // Setup the search result table
        vm.tableParams = new ngTableParams({
            page: 1, // current page
            count: 15 // pager size
        }, {
            total: 0, // item count
            counts: [5, 10, 15, 20], // pager sizes
            getData: function ($defer, params) { // data provider function
                // Get movies (20 results per page by movie api)
                searchService.findMovies(vm.search, params.page()).success(function (response) {
                    // Set total items
                    params.total(response.total_results);

                    // Set data and limit to current pager size
                    $defer.resolve(response.results.slice(0, params.count()));
                });
            }
        });
    };
}());
