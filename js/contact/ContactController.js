angular.module('gig')
    .controller('contactCtrl', ['$scope', '$location', '$routeParams', 'ContactService', function ($scope, $location, $routeParams, ContactService) {
            
    $scope.contact = ContactService.getContact($routeParams.contact) || {};

    $scope.saveContact = function () {
        ContactService.saveContact($scope.contact);
        $location.path('/');
    };   
 ])
