// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainCtrlr'
        })

        // nerds page that will use the NerdController
        .when('/articles', {
            templateUrl: 'views/article.html',
            controller: 'articleCtrlr'
        });

    $locationProvider.html5Mode(true);

}]);


