'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:project
 * @description
 * # project
 */
angular.module('portfolioApp')
  .directive('project', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/projects.html'
    };
  });
