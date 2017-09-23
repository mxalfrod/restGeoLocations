'use strict';

/**
 * @ngdoc service
 * @name documentsApp.earthQuakesService
 * @description
 * # earthQuakesService
 * Service in the documentsApp.
 */
angular.module('documentsApp')
  .service('earthQuakesService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getcityCoordinatesByName(cityName){
     return $http({
        method: 'GET',
        url: 'http://api.geonames.org/searchJSON?q='+cityName+'&maxRows=1&username=mxalfrod'
      });
    }
    function getEarthQuakesbyCoordinates(north,south,east,west){
      return $http({
        method: 'GET',
        url: 'http://api.geonames.org/earthquakesJSON?north='+north+'&south='+south+'&east='+east+'&west='+west+'&username=mxalfrod'
      });
    }
    return{
      getcityCoordinatesByName:getcityCoordinatesByName,
      getEarthQuakesbyCoordinates:getEarthQuakesbyCoordinates
    };

  });
