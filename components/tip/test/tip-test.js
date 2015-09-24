'use strict';

var Tip = require('./tip.js');
var $ = require('./jquery.js');

var t1 = new Tip({
    trigger: '#test1',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    arrowPosition: 10
});

var t2 = new Tip({
    trigger: '#test2',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    theme: 'white',
    effect: 'slide',
    arrowPosition: 11
});

var t3 = new Tip({
    trigger: '#test3',
    content: '<div style="padding:10px">我是内容 我是内容</div>',
    theme: 'blue',
    effect: 'fade',
    arrowPosition: 7
});
t3.set('content', '更改后的内容');

var t4 = new Tip({
    trigger: '#test4',
    height: 100,
    width: 200,
    content: '<div>比较高的内容</div>',
    theme: 'white',
    inViewport: true,
    arrowPosition: 7
});

var t5 = new Tip({
    trigger: '.test5'
});
t5.before('show', function() {
    this.set('content', this.activeTrigger.html());
});

