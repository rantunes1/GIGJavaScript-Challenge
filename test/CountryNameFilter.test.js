describe('CountryNameFilter', function() {
    beforeEach(module('gig'));

    var $filter;
    var CountriesList;

    beforeEach(inject(function(_$filter_, _$window_, _CountriesList_){
        _$window_.CountryList = function(){
            return {
                getData: function() {}
            };
        };
        $filter = _$filter_;
        CountriesList = _CountriesList_;
    }));

    it('returns null when given null', function() {
        var filter = $filter('countryName');

        var countryName = filter(null);

        expect(countryName).toEqual(null);
    });

    it('returns the correct value when given a string of chars', function() {
        var getCountriesSpy = spyOn(CountriesList, 'getData').and.callFake(function(){
            return [{
                code: 'country code',
                name: 'country name'
            }]
        });

        var filter = $filter('countryName');
        var countryName = filter('country code');

        expect(getCountriesSpy).toHaveBeenCalled();
        expect(countryName).toEqual('country name');
    });
});
