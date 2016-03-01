
var angular = require('angular')

angular.module("honger",[])

.directive("ezNamecardEditor",function(){
	return {
		restrict : "E",
		template : "<ul class='nceditor'></ul>",
		replace : true,
		link : function(scope,element,attrs){
			//获得变量名称
			var model = attrs.data;

			//展开HTML模板，使用field属性标记对应字段
			element.append("<li>name : <input type='text' field='name'></li>")
				.append("<li>gender : <input type='text' field='gender'></li>")
				.append("<li>age : <input type='text' field='age'></li>");

			//监听DOM事件，变化时修改变量值
			element.find("input").on("keyup",function(ev){
				var field = ev.target.getAttribute("field");
				scope[model][field] = ev.target.value;
				//将对scope的修改进行传播
				scope.$apply("");
			});
		}
	};
})

.directive("ezLogger",function(){
	return {
		restrict : "A",
		link : function(scope,element,attrs){
			var model = attrs.data;

			scope.$watch(model,function(nv){
				var cnt = JSON.stringify(nv,null,"	");
				element.html("<pre>"+cnt+"</pre	");
			},true);
		}
	};
});
