/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Class = __webpack_require__(2)

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	// Class
	// -----------------
	// Thanks to:
	//  - http://mootools.net/docs/core/Class/Class
	//  - http://ejohn.org/blog/simple-javascript-inheritance/
	//  - https://github.com/ded/klass
	//  - http://documentcloud.github.com/backbone/#Model-extend
	//  - https://github.com/joyent/node/blob/master/lib/util.js
	//  - https://github.com/kissyteam/kissy/blob/master/src/seed/src/kissy.js
	// The base Class implementation.
	function Class(o) {
	    // Convert existed function to Class.
	    if (!(this instanceof Class) && isFunction(o)) {
	        return classify(o);
	    }
	}
	module.exports = Class;
	// Create a new Class.
	//
	//  var SuperPig = Class.create({
	//    Extends: Animal,
	//    Implements: Flyable,
	//    initialize: function() {
	//      SuperPig.superclass.initialize.apply(this, arguments)
	//    },
	//    Statics: {
	//      COLOR: 'red'
	//    }
	// })
	//
	Class.create = function(parent, properties) {
	    if (!isFunction(parent)) {
	        properties = parent;
	        parent = null;
	    }
	    properties || (properties = {});
	    parent || (parent = properties.Extends || Class);
	    properties.Extends = parent;
	    // The created class constructor
	    function SubClass() {
	        // Call the parent constructor.
	        parent.apply(this, arguments);
	        // Only call initialize in self constructor.
	        if (this.constructor === SubClass && this.initialize) {
	            this.initialize.apply(this, arguments);
	        }
	    }
	    // Inherit class (static) properties from parent.
	    if (parent !== Class) {
	        mix(SubClass, parent, parent.StaticsWhiteList);
	    }
	    // Add instance properties to the subclass.
	    implement.call(SubClass, properties);
	    // Make subclass extendable.
	    return classify(SubClass);
	};
	function implement(properties) {
	    var key, value;
	    for (key in properties) {
	        value = properties[key];
	        if (Class.Mutators.hasOwnProperty(key)) {
	            Class.Mutators[key].call(this, value);
	        } else {
	            this.prototype[key] = value;
	        }
	    }
	}
	// Create a sub Class based on `Class`.
	Class.extend = function(properties) {
	    properties || (properties = {});
	    properties.Extends = this;
	    return Class.create(properties);
	};
	function classify(cls) {
	    cls.extend = Class.extend;
	    cls.implement = implement;
	    return cls;
	}
	// Mutators define special properties.
	Class.Mutators = {
	    Extends: function(parent) {
	        var existed = this.prototype;
	        var proto = createProto(parent.prototype);
	        // Keep existed properties.
	        mix(proto, existed);
	        // Enforce the constructor to be what we expect.
	        proto.constructor = this;
	        // Set the prototype chain to inherit from `parent`.
	        this.prototype = proto;
	        // Set a convenience property in case the parent's prototype is
	        // needed later.
	        this.superclass = parent.prototype;
	    },
	    Implements: function(items) {
	        isArray(items) || (items = [ items ]);
	        var proto = this.prototype, item;
	        while (item = items.shift()) {
	            mix(proto, item.prototype || item);
	        }
	    },
	    Statics: function(staticProperties) {
	        mix(this, staticProperties);
	    }
	};
	// Shared empty constructor function to aid in prototype-chain creation.
	function Ctor() {}
	// See: http://jsperf.com/object-create-vs-new-ctor
	var createProto = Object.__proto__ ? function(proto) {
	    return {
	        __proto__: proto
	    };
	} : function(proto) {
	    Ctor.prototype = proto;
	    return new Ctor();
	};
	// Helpers
	// ------------
	function mix(r, s, wl) {
	    // Copy "all" properties including inherited ones.
	    for (var p in s) {
	        if (s.hasOwnProperty(p)) {
	            if (wl && indexOf(wl, p) === -1) continue;
	            // 在 iPhone 1 代等设备的 Safari 中，prototype 也会被枚举出来，需排除
	            if (p !== "prototype") {
	                r[p] = s[p];
	            }
	        }
	    }
	}
	var toString = Object.prototype.toString;
	var isArray = Array.isArray || function(val) {
	    return toString.call(val) === "[object Array]";
	};
	var isFunction = function(val) {
	    return toString.call(val) === "[object Function]";
	};
	var indexOf = Array.prototype.indexOf ? function(arr, item) {
	    return arr.indexOf(item);
	} : function(arr, item) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	        if (arr[i] === item) {
	            return i;
	        }
	    }
	    return -1;
	};



/***/ }
/******/ ]);