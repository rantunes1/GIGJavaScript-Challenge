angular.module('gig')
    .controller('contactListCtrl', ['$scope', 'ContactService', function ($scope, ContactService) {
        $scope.contacts = ContactService.getContacts()

            $scope.removeContact = function (contactId) {
                ContactService.removeContact(contactId);
                $scope.removed = 'Contact successfully removed.';
            };
        }
  ]);
