describe('ContactListController', function() {
    beforeEach(module('gig'));

    var $controller;
    var ContactService;
    var $window;

    beforeEach(inject(function(_$controller_, _ContactService_){
        $controller = _$controller_;
        ContactService = _ContactService_;
    }));

    it('should retrieve the contacts from the ContactService', function() {
        var $scope = {};

        var getContactsSpy = spyOn(ContactService, 'getContacts').and.returnValue('contacts list');

        var controller = $controller('contactListCtrl', { $scope: $scope });

        expect(getContactsSpy).toHaveBeenCalled();
        expect($scope.contacts).toEqual('contacts list');
    });

    it('should expose a removeContact method', function() {
        var $scope = {};

        $controller('contactListCtrl', { $scope: $scope });

        expect(typeof $scope.removeContact).toEqual('function');
    });
});
