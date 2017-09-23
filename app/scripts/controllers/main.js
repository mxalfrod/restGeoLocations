'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentsApp
 */
angular.module('documentsApp')
  .controller('MainCtrl', function (earthQuakesService,NgMap,$compile) {
    var vm = this;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.cityToSearch="Mexico City";
    vm.template = {
      cached: 'custom-cached-info-window-template.html',
      external: 'app/views/_infoWindow.html'
    };
     function init(){
       mapCity();
     }
    var mapCity =function(){
      earthQuakesService.getcityCoordinatesByName(vm.cityToSearch).then(function(response){
        vm.city = response.data.geonames[0];
        NgMap.getMap().then(function(map){
          vm.map = map;
          google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            mapQuakes(vm.map .getBounds());
          });

        });
      } );


    };

    var mapQuakes = function (coordinates) {
      earthQuakesService.getEarthQuakesbyCoordinates(coordinates.f.f,coordinates.f.b,coordinates.b.f,coordinates.b.b)
        .then(function(results){
          vm.earthquakes = results.data.earthquakes;
          console.log(vm.earthquakes);
        });

    };
    vm.showEarthQuake = function(evt, eqid) {
      vm.eq = vm.earthquakes[eqid];
      vm.map.showInfoWindow("cached", this);
    };
    vm.mapCity = mapCity;
    init();
  });
