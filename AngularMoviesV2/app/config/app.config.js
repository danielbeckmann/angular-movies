(function () {
    'use strict';

    var app = angular.module('moviesApp');

    // Setup url whitelist
    app.config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          '*://www.youtube.com/**'
        ]);
    });
}());