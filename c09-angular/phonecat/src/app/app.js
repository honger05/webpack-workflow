
require('./bower_components/jquery/dist/jquery')
require('./bower_components/angular/angular')
require('./bower_components/angular-route/angular-route')
require('./bower_components/angular-resource/angular-resource')
require('./bower_components/angular-animate/angular-animate')
require('./bower_components/bootstrap/less/bootstrap.less')
require('./css/app.css')

require('./components/controllers')
require('./components/filters')
require('./components/directives')
require('./components/services')
require('./components/animations')

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'phonecatAnimations'
])

phonecatApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/phones', {
      template: require('./partials/phone-list.hbs'),
      controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
      template: require('./partials/phone-detail.hbs'),
      controller: 'PhoneDetailCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    })
}])
