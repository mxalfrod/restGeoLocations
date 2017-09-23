'use strict';

/**
 * @ngdoc overview
 * @name documentsApp
 * @description
 * # documentsApp
 *
 * Main module of the application.
 */
angular
  .module('documentsApp', [
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
