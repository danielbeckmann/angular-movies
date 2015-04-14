(function () {
    'use strict';

    // Declare main app module
    var app = angular.module('moviesApp', ['ngRoute', 'movieModule', 'genreModule', 'searchModule', 'common']);

    // Declare sub components
    angular.module('movieModule', []);
    angular.module('genreModule', ['ngTable']);
    angular.module('searchModule', ['ngTable']);
    angular.module('common', []);
}());