
// service 服务提供者 provider

// everything is provider

var angular = require('angular')


window.doCalc = function() {
  var injector = angular.injector(['honger']),
      mycalculator = injector.get('calculator'),
      ret = mycalculator.add(3,4)

      document.querySelector("#result").textContent = ret;
}



angular.module('honger', [])

.provider('calculator', function() {
  var currency = '$'
  this.setLocal = function(l) {
    var repo = {
      "CN":"¥",
      "US":"$",
      "JP":"¥",
      "EN":"€"
    }
    if(repo[l]) currency = repo[l];
  }
  this.$get = function() {
    return {
      add : function(a,b){return currency + (a+b);},
      subtract : function(a,b){return currency + (a-b);},
      multiply : function(a,b){return currency + (a*b);},
      divide: function(a,b){return currency + (a/b);}
    }
  }
})

.config(function(calculatorProvider) {
  calculatorProvider.setLocal('EN')
})

//.factory('calculator', calculatorFactory) // 工厂模式

//.service('calculator', calculatorClass) // 单例模式
