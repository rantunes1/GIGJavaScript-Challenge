angular.module('gig')
    .run(['$window', function ($window) {
        if (!$window.CountryList) {
            throw new Error('missing <country-list-cli.js>');
        }
    }
])
    .factory('CountriesList', ['$window', function ($window) {
        var countriesList = $window.CountryList();
        delete $window.CountryList;
        return countriesList;
    }
]);
