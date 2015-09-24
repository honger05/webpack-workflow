'use strict';

var Overlay = require('./overlay.js');
var mask = require('./mask.js');
var $ = require('./jquery.js');

// 基本浮层
var o = new Overlay({
    template: "<div class='overlay'>目标元素1</div>",
    parentNode: '#c',
    id: 'myoverlay',
    style: {
        color: '#fff'
    },
    align: {
        selfXY: ['-100%', 0],
        baseElement: '#a',
        baseXY: [0, 0]
    }
});

o.show();
o.set('style', {
    backgroundColor: '#f53379'
});
o.set('height', 40);


// 全局定位浮层
var o2 = new Overlay({
    element: '#b',
    width: 200,
    height: 100,
    align: {
        selfXY: ['50%', '50%'],
        baseXY: ['50%', '50%']
    }
});

o2.show();


// 点击文档其他地方隐藏自身 this._blurHide()
// 继承使用
var TestPopup = Overlay.extend({
  attrs: {
    trigger: null
  },

  setup: function() {
    var that = this;
    TestPopup.superclass.setup.call(this);
    this._setPosition();
    $(this.get('trigger')).click(function() {
        that.show();
    });
    this.element.hide();
    this._blurHide([this.get('trigger')]);
  }
});

new TestPopup({
    trigger: '#d1_trigger',
    element: '#d1',
    align: {
        baseElement: '#d1_trigger',
        baseXY: ['100%', 0]
    }
})

new TestPopup({
    trigger: '#d2_trigger',
    element: '#d2',
    align: {
        baseElement: '#d2_trigger',
        baseXY: ['100%', 0]
    }
})


// 全局遮罩Mask组件示例
// 单例组件，修改后全部 Mask 都生效。
$('#a_btn').click(function() {
    mask.show();
});

$(document).keyup(function(e) {
    // keyboard esc
    if (e.keyCode === 27) {
        mask.hide();
    }
});

$('#b_btn').click(function() {
    mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
});