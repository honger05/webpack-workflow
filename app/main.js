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


// 多 triggers 的情况

// 范例1: 多个 Trigger 共享一个实例
new Popup({
    trigger: '.trigger-all',
    element: '#popup10',
    effect: 'fade'
});


// 委托事件
new Popup({
    trigger: '.triggerClass2',      // 用了 delegateNode 时，trigger 参数必须为 selector!
    element: '#popup11',
    delegateNode: '#delegateNode'
});

$('#addNewNode').click(function() {
    // 新增节点，观察是否绑定了popup事件
    $('<a href="javascript:;" class="triggerClass2">动态增加的节点<span class="icon">▼</span></a>')
        .appendTo('#delegateNode');
});


// 多 Triggers 和 blurHide 共存的问题
// 当点击一个trigger弹出浮层后，再点击另一个trigger时，应该要正确弹出浮层。
new Popup({
    trigger: '.triggerClass3',
    triggerType: 'click',
    element: '#popup12'
});
new Popup({
    trigger: '.triggerClass4',
    triggerType: 'focus',
    element: '#popup13'
});


// 渐隐效果 effect: 'fade'
var example14 = new Popup({
    trigger: '#triggerId14',
    element: '#popup14',
    duration: 3000,
    effect: 'fade'
});

// 延展效果 effect: 'slide'
var example15 = new Popup({
    trigger: '#triggerId15',
    element: '#popup15',
    effect: 'slide'
});
example15.on('animated', function() {
    console.log('animated');
});


// 渐隐 + 延展 effect: 'fade slide'
var example16 = new Popup({
    trigger: '#triggerId16',
    element: '#popup16',
    effect: 'fade slide'
});


// 自定义动画效果
var animPopup = Popup.extend({
    _onRenderVisible: function(val) {
        if (val) {
            this.element.animate({'height': 'toggle', 'opacity':'0.8'}, 400);
        } else {
            this.element.animate({'height': 'toggle', 'opacity':'hide'}, 600);
        }
    }
});
var t1 = (new Date).getTime();
var example17 = new animPopup({
    trigger: '#triggerId17',
    align: {
        baseXY: [5,20]
    },
    element: '#popup17'
});
var t2 = (new Date).getTime();


// 多个元素快速切换（多个实例，同一个element的情况）
new Popup({
    trigger: '#triggerId18-1',
    element: '#popup18',
    effect: 'fade'
});
new Popup({
    trigger: '#triggerId18-2',
    element: '#popup18',
    effect: 'fade'
});


// 动画 & template 配合
var example19 = new Popup({
    trigger: '#triggerId19',
    template: '<div style="background:#fff;border:1px solid #ccc;padding:6px;height:120px;">xxxxx</div>',
    effect: 'slide'
});