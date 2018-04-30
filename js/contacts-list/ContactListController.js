angular.module('gig')
    .controller('contactListCtrl', ['$scope', 'ContactService', 'CountriesList', function ($scope, ContactService, CountriesList) {
        $scope.contacts = ContactService.getContacts();        
        
        $scope.removeContact = function (contactId) {
            console.log('remove contact', contactId);
            ContactService.removeContact(contactId);
            $scope.removed = 'Contact successfully removed.';
        };
    }
])