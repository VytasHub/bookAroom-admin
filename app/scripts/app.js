'use strict';

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
    'formlyBootstrap'
  ])
  .config(function ($routeProvider) {
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
        controller: 'ViewCtrl',
        controllerAs: 'view'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
