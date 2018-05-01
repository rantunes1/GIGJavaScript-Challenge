describe('ContactController', function() {
    beforeEach(module('gig'));

    var $controller;
    var ContactService;
    var CountriesList;

    beforeEach(inject(function(_$controller_, _$window_, _ContactService_, _CountriesList_){
        _$window_.CountryList = function(){
            return {
                getData: function() {}
            };
        };
        $controller = _$controller_;
        ContactService = _ContactService_;
        CountriesList = _CountriesList_;
    }));

    it('should retrieve the contact from the ContactService', function() {
        var $scope = {};
        var $routeParams = { contact: 'testContactId' };

        var getContactSpy = spyOn(ContactService, 'getContact').and.callFake(function(contactId){
            return 'Contact ' + contactId;
        });

        $controller('contactCtrl', { $scope: $scope, $routeParams: $routeParams });

        expect(getContactSpy).toHaveBeenCalledWith('testContactId');
        expect($scope.contact).toEqual('Contact testContactId');
    });

    it('should retrieve the countries list', function() {
        var $scope = {};

        var getCountriesSpy = spyOn(CountriesList, 'getData').and.returnValue('countries list');

        $controller('contactCtrl', { $scope: $scope });

        expect(getCountriesSpy).toHaveBeenCalled();
        expect($scope.countries).toEqual('countries list');
    });

    it('should expose a saveContact method', function() {
        var $scope = {};

        $controller('contactCtrl', { $scope: $scope });

        expect(typeof $scope.saveContact).toEqual('function');
    });
});
