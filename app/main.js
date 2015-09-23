'use strict';

var Events = require('./component.js');

var obj = new Events();

obj.on('expand', function() {
	document.write('expanded');
})

obj.trigger('expand');

// 混入其它类中

function Dog() {

}

Events.mixTo(Dog);

Dog.prototype.sleep = function() {
	this.trigger('sleep');
}

var dog = new Dog();

dog.on('sleep', function() {
	alert('狗狗睡得好香呀');
})

dog.sleep();

// 移除 sleep 事件的所有回调函数
dog.off('sleep');

dog.sleep();