(function () {
    'use strict';

    var app = angular.module('common');

    app.factory('apiService', ['$http', apiService]);
    function apiService ($http) {
        var base_url = 'http://api.themoviedb.org/3/';
        var image_base_url = 'http://image.tmdb.org/t/p/';

        // Enter your api key here (Obtain key at: https://www.themoviedb.org/documentation/api)
        var api_key = '';

        // Loads the api configuration
        var loadConfiguration = function () {
            var config = localStorage.getItem('movie-app-config');
            if (config) {
                // Use local stored data
                setConfigValues(JSON.parse(config));
            }
            else {
                // Get configuration data from service
                getResource('configuration').success(function (response) {
                    // Store configuration local
                    localStorage.setItem('movie-app-config', JSON.stringify(response));
                    setConfigValues(response);
                });
            }
        };

        // Performs a GET request on a resource on the api
        var getResource = function (action, params) {
            params = params || {};
            params.api_key = api_key;

            var url = base_url + action;
            return $http.get(url, { cache: true, params: params });
        }

        var getImageBaseUrl = function () {
            return image_base_url;
        };

        function setConfigValues(config) {
            image_base_url = config.images.base_url;
        }

        // Init
        loadConfiguration();

        return {
            getResource: getResource,
            getImageBaseUrl: getImageBaseUrl
        };
    };
}());
