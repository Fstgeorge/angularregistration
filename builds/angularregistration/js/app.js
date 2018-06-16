const APP = angular.module('APP', [
    'ngRoute',
    'firebase'
]);

APP.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
        }).
        when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
        }).
        when('/success', {
            templateUrl: 'views/success.html',
            controller: 'SuccessController'
        }).
        otherwise({
            redirectTo: '/login'
        })
}]);