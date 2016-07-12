module main {

    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/home/home.html"
            })
            .state('contacts', {
                url: "/contacts",
                templateUrl: "app/contacts/contacts.html"
            });
            
    });

}