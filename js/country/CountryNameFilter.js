angular.module('gig')
    .filter('countryName', ['CountriesList', function (CountriesList) {

        return function (countryCode) {
            if (!countryCode) {
                return null;
            }

            var country = (CountriesList.getData().filter(function (country) {
                return country.code === countryCode;
            }) || [])[0];

            return (country || {}).name;
        };
    }
  ]);
