

var antsinsApp = angular.module('antsinsApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract: true,
      template: require('./partials/tabs.hbs')
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          template: require('./partials/home.hbs')
        }
      }
    })
    .state('tabs.about', {
      url: '/about',
      views: {
        'about-tab': {
          template: require('./partials/about.hbs')
        }
      }
    })
    .state('tabs.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          template: require('./partials/contact.hbs')
        }
      }
    })


  $urlRouterProvider.otherwise('/tab/home')
})
