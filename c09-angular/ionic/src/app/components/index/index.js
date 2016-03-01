
angular.module('honger', [])
  .directive('hgClock', function() {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="clock"></div>',
      link: function(scope, element, attrs) {
        setInterval(function() {
          var d = new Date()
          element.text(d.toString())
        }, 1000)
      }
    }
  })
