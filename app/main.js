'use strict';

var Class = require('./class.js')

// Class.create([parent], [properties])
// 创建一个新类。参数 parent 是继承的父类，properties 是要混入的实例属性。 
var Dog = Class.create({
	
	//标明初始化方法，会在构建实例时调用。
	initialize: function(name) {
		this.name = name;
	},

	talk: function() {
    console.log('I am ' + this.name);
	}

});

var dog = new Dog('dog');

console.log(dog);

dog.talk();


/*
 * 使用 create 方法创建的类
 * 拥有 extend 方法，可以继续创建子类
 */
var RedDog = Dog.extend({

	initialize: function(name, color) {
    RedDog.superclass.initialize.call(this, name);
    // this.name = name;
    this.color = color;
	},

	getColor: function() {
    console.log('我的颜色是：' + this.color)
	}

})

var redDog = new RedDog('red.dog', 'red');

console.log(redDog)

redDog.talk();
redDog.getColor();


/*
 * 用 Implements 来标明所创建的类需要从哪些类中混入属性
 */

var Flyable = {
	fly: function() {
    console.log('我飞起来了');
  }
};

var FlyableRedDog = RedDog.extend({
	Implements: Flyable
})

var flyableRedDog = new FlyableRedDog('fly.blue.dog', 'blue');

console.log(flyableRedDog)

flyableRedDog.talk();
flyableRedDog.getColor();
flyableRedDog.fly()

// try {
// 	flyableRedDog.swim();
// } catch(e) {
//   throw new Error('我还不会游泳呢！')
// } 

/*
 * implement SomeClass.implement(properties)¶
 * 该方法与 Implements 属性的功能类似。当某个类已存在，需要动态修改时，用 implement 方法更便捷。
 */

 FlyableRedDog.implement({
   swim: function() {
     console.log('我是动态添加的，我还会游泳');
   }
 })

 flyableRedDog.swim();