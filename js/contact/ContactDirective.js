angular.module('gig')
    .directive('contact', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'contact.html'
    } 
})