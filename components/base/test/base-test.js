'use strict';

var Base = require('./component.js');

var Pig = Base.extend({

  initialize: function(config) {
    Pig.superclass.initialize.call(this, config);
    this.born();
    this.age = config.age;
  },
	
	attrs: {
		name: 'pig'
	},

  talk: function() {
  	document.write('I am ' + this.get('name') + ' and I was ' + this.get('age') + ' years old! </br>');
  },

  born: function() {
  	document.write('I born </br>');
  },

  sleep: function() {
    this.trigger('sleep', 'Z~~');
    return 'HaHa';
  }

})

var pig = new Pig({age: 2});

pig.talk();

// on/trigger 监听的是 sleep 事件
pig.on('sleep', function(a) {
  document.write('I was sleeping ' + a + ' </br>')
});

// after|before 并不是监听 sleep 事件的触发前后执行，
// 而是 sleep 函数的前后执行, 接收的参数和 sleep 一样。
pig.before('sleep', function(a) {
  document.write('before sleep I will eat some food ' + a + ' </br>')
});

pig.after('sleep', function(returned, a) {
  document.write(returned + ' after sleep I will eat some food ' + a + ' </br>')
});

pig.sleep('O~~');