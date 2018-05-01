angular.module('gig')
    .controller('contactCtrl', ['$scope', '$location', '$routeParams', 'ContactService', 'CountriesList', function ($scope, $location, $routeParams, ContactService, CountriesList) {
        $scope.contact = ContactService.getContact($routeParams.contact) || {};
        $scope.countries = CountriesList.getData();

        $scope.saveContact = function () {
            $scope.contact = ContactService.saveContact($scope.contact);
            $location.path('/');
        };
    }
  ]);
   
