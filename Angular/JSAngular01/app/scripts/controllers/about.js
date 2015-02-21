'use strict';

/**
 * @ngdoc function
 * @name jsangular01App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsangular01App
 */
angular.module('jsangular01App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
