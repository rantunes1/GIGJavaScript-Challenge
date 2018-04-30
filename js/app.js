angular.module('gig', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: 'contacts-list.html',
                controller: 'contactListCtrl'
            })
            .when('/edit/:contact', {
                templateUrl: 'contact-form.html',
                controller: 'contactCtrl'
            })
            .when('/add', {
                templateUrl: 'contact-form.html',
                controller: 'contactCtrl'
            })
            .when('/delete/:contact', {
                controller: 'contactCtrl'
            })
            .otherwise({redirectTo: '/'});
})