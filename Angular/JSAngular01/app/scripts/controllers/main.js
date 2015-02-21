'use strict';

/**
 * @ngdoc function
 * @name jsangular01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsangular01App
 */
angular.module('jsangular01App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
