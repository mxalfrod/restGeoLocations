'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the documentsApp
 */
angular.module('documentsApp')
  .controller('Top10Ctrl', function (earthQuakesService) {
    var vm = this;
    earthQuakesService.getEarthQuakesbyCoordinates(90,-90,180,-180)
      .then(function(results){
        vm.earthquakes = results.data.earthquakes;
        console.log(vm.earthquakes);
      });
  });
