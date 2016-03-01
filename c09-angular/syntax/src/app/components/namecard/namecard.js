
var angular = require('angular')

angular.module('honger', [])

.directive('hgNamecard', function() {
  return {
    restrict: 'E',
    template: '<div class="namecard">',
    replace: true,
    link: function(scope, element, attrs) {
      var sb = scope.sb
      element.append('<div>name: ' + sb.name + '</div>')
        .append('<div>gender: ' + sb.gender + '</div>')
        .append('<div>age: ' + sb.age + '</div>')
    }
  }
})

.controller('myCtrl', function($scope) {
  $scope.sb = {
    name: 'honger',
    gender: 'male',
    age: 28
  }
})
