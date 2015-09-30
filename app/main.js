'use strict';

var Dialog = require('./dialog.js');

var $ = require('./jquery.js');

var example1 = new Dialog({
    trigger: '#example1',
    height: '100px',
    effect: 'fade',
    content: '传入了字符串, 按 ESC 将无法关闭这个对话框，渐入效果'
});

example1.undelegateEvents(document, 'keyup.esc');

new Dialog({
    trigger: '#example2',
    height: '100px',
    hasMask: false,
    content: $('#example2-dom')
});

new Dialog({
    trigger: '#example3',
    closeTpl: '点我可以关闭对话框',
    align: {
        baseXY: ['50%', 0],
        selfXY: ['50%', 0]
    },
    content: '<div style="padding:20px;">传入了 html 标签, 自定义位置</div>'
});

var example = new Dialog({
    trigger: '#example4',
    content: 'http://www.baidu.com/'
});

example.on('complete:show', function() {
    alert('iframe 完全载入成功！');
});

new Dialog({
    trigger: '#example5 button',
    height: '400px'
}).before('show',function() {
     this.set('content', this.activeTrigger.attr('data-src'));
});

new Dialog({
    trigger: '#example6 button',
    height: '160px',
    width: '160px'
}).before('show',function() {
    var img = '<img src="https://i.alipayobjects.com/combo.jpg?d=apps/58&t='+ this.activeTrigger.attr('data-id') + '" />';
    this.set('content', img);
});

var example = new Dialog({
    trigger: '#example8',
    content: 'http://www.baidu.com/',
    initialHeight: 150
});