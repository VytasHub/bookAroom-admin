'use strict';



// var fireHandeler = angular.module('fireHandeler', ['ngRoute', 'firebase']).constant('FIREBASE_URL', 'https://bookaroomfirebase.firebaseio.com/');
/**
 * @ngdoc overview
 * @name bookAroomApp
 * @description
 * # bookAroomApp
 *
 * Main module of the application.
 */
angular
    .module('bookAroomApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'formly',
        'formlyBootstrap',
        'firebase'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            // .when('/about', {
            //   templateUrl: 'views/about.html',
            //   controller: 'AboutCtrl',
            //   controllerAs: 'about'
            // })
            // .when('/contact', {
            //   templateUrl: 'views/contact.html',
            //   controller: 'ContactCtrl',
            //   controllerAs: 'contact'
            // })
            .when('/view', {
                templateUrl: 'views/view.html',
                controller: 'WorkBenchController',
                controllerAs: 'fireApp'
            })


        .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl',
                controllerAs: 'add'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .constant('FIREBASE_URL', 'https://bookaroomfirebase.firebaseio.com/');
