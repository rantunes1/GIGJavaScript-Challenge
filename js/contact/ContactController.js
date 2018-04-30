angular.module('gig')
    .controller('contactCtrl', ['$scope', '$location', '$routeParams', 'ContactService', 'CountriesList', function ($scope, $location, $routeParams, ContactService, CountriesList) {       
        $scope.contact = ContactService.getContact($routeParams.contact) || {}

        $scope.saveContact = function () {
            ContactService.saveContact($scope.contact)
            $location.path('/')
        }
    
        $scope.countries = CountriesList.getData();
    }
  ]);
