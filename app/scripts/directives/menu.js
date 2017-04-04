'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:menu
 * @description
 * # menu
 */
angular.module('portfolioApp')
  .directive('menu', function () {
    return {
      templateUrl: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the menu directive');
      }
    };
  });
