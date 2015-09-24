'use strict';

var Popup = require('./popup.js');
var $ = require('./jquery.js');

// 自定义行为(click)
var example3 = new Popup({
    trigger: '#triggerId3',
    triggerType: 'click',
    align: {
        baseXY: [0, '100%']
    },
    element: '#popup3'
});


// 自定义Template、Align并设置回调函数
var example4 = new Popup({
    trigger: '#triggerId4',
    align: {
        selfXY: [-10,-10],
        baseXY: [0,20]
    },
    template: '<div class="ui-popup fn-hide"><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></div>'
});

example4.after('show', function(){
    $('#triggerId4').text('三秒后改变浮层位置');
    window.setTimeout(function() {
        example4.set('align', { baseXY: [0, -115] });
    }, 3000);
});


// 简单的自动完成组件
var example5 = new Popup({
    trigger: '#triggerId5',
    triggerType: 'focus',
    element: '#popup5',
    align: {
        baseXY: [0, '100%+2']
    }
});
example5.element.find('a').click(function(e) {
    e.preventDefault();
    example5.get('trigger').val($(this).text());
    example5.hide();
});


// 相对别的元素定位
new Popup({
    trigger: '#triggerId7',
    element: '#popup7',
    align: {
        baseElement: '#other-element'
    }
});


// 实现 tooltip 效果（无法移动到浮层上）
new Popup({
    trigger: '#triggerId8',
    element: '#popup8',
    delay: -1
});


// 异步的情况 一般适用于 Ajax 请求成功后再显示浮层的情况。
var example9 = new Popup({
    trigger: '#triggerId9',
    element: '#popup9',
    triggerType: 'click'
});
example9.after('show', function() {
    var that = this;
    // 先隐藏
    this.element.hide();

    // 然后异步显示，这里也可以是一段 Ajax 的回调
    setTimeout(function() {
        that.element.fadeIn();
    }, 1000);
});