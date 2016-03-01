
angular.module('ionicApp', [])

.controller('myCtrl', ['$scope', '$templateCache', function($scope, $templateCache) {
  var tmp = Handlebars.compile(require('./clock.hbs'))()
  $templateCache.put('lovestory.html', tmp)
}])

.directive('ezClock', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'lovestory.html',
    link: function(scope, element, attrs) {
      setInterval(function() {
        var d = new Date()
        element.find('.clock').text(d.toString())
      }, 1000)
    }
  }
})
