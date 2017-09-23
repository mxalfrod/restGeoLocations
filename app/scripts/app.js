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
      .when('/top10', {
        templateUrl: 'views/top10.html',
        controller: 'Top10Ctrl',
        controllerAs: 'top10'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
