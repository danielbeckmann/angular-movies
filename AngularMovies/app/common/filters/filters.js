(function () {
    'use strict';

    var app = angular.module('common');

    // Convert numbers between 0-10 to 0-5 stars
    app.filter('rating', function () {
        return function (rating) {
            var output = '';
            var stars = Math.round(rating / 2.0);
            for (var i = 0; i < stars; i++) output += '\u2605';
            for (var j = stars; j < 5; j++) output += '\u2606';

            if (output === '') output = '-';
            return output;
        };
    });

    // Displays an image in the desired size
    app.filter('image', ['apiService', function (apiService) {
        return function (imageName, size) {
            // Define a default image size
            if (!size) size = 'w92';

            if (imageName) {
                var test = apiService.getImageBaseUrl() + size + imageName;
                return test;
            }

            return null;
        };
    }]);
}());
