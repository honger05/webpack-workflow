
var angular = require('angular')

angular.module("honger", [])
.directive("ezNamecard",function($rootScope){
	return {
		restrict : "E",
		template : "<div class='namecard'>",
		replace : true,
		link : function(scope,element,attrs){
			element.append("<div>name : <span class='name'></span></div>")
				.append("<div>gender : <span field='gender'></span></div>")
				.append("<div>age : <span field='age'></span></div>")

			//监听sb变量的变化，并在变化时更新DOM
			scope.$watch(attrs.data, function(nv,ov) {
				var fields = element.find("span");
				fields[0].textContent = nv.name;
				fields[1].textContent = nv.gender;
				fields[2].textContent = nv.age;
			},true);

			//验证代码，1秒改变1次age的值
			setInterval(function(){
				scope.$apply("sb.age=sb.age+1;")
			},1000);
		}
	};
});
