
angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      template: require('./views/tabs.hbs')
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          template: require('./views/home.hbs')
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          template: require('./views/facts.hbs')
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          template: require('./views/facts2.hbs')
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          template: require('./views/about.hbs')
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          template: require('./views/nav-stack.hbs')
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          template: require('./views/contact.hbs')
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

// .controller('HomeTabCtrl', function($scope, $templateCache) {
//   var tabs_tmpl = Handlebars.compile(require('./views/tabs.hbs'))()
//   var tabs_home_tmpl = Handlebars.compile(require('./views/home.hbs'))()
//   var tabs_facts_tmpl = Handlebars.compile(require('./views/facts.hbs'))()
//   var tabs_facts2_tmpl = Handlebars.compile(require('./views/facts2.hbs'))()
//   var tabs_about_tmpl = Handlebars.compile(require('./views/about.hbs'))()
//   var tabs_navstack_tmpl = Handlebars.compile(require('./views/nav-stack.hbs'))()
//   var tabs_contact_tmpl = Handlebars.compile(require('./views/contact.hbs'))()
//
//   $templateCache.put('templates/tabs.html', tabs_tmpl)
//   $templateCache.put('templates/home.html', tabs_home_tmpl)
//   $templateCache.put('templates/facts.html', tabs_facts_tmpl)
//   $templateCache.put('templates/facts2.html', tabs_facts2_tmpl)
//   $templateCache.put('templates/about.html', tabs_about_tmpl)
//   $templateCache.put('templates/nav-stack.html', tabs_navstack_tmpl)
//   $templateCache.put('templates/contact.html', tabs_contact_tmpl)
// });
