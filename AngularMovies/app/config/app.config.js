(function () {
    'use strict';

    var app = angular.module('moviesApp');

    // Enter your api key here (Obtain a key at: https://www.themoviedb.org/documentation/api)
    app.constant('apiKey', '');

    // Setup url whitelist
    app.config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          '*://www.youtube.com/**'
        ]);
    });
}());