'use strict';

var Widget = require('./component.js');
var $ = require('./jquery.js');

// 基本事件操作
var WidgetA = Widget.extend({

  events: {
    'click h3': 'heading'
  },

  heading: function() {
    this.$('h3').html('=￣ω￣= 你还真点啊');
  }

});

var widget = new WidgetA({element: '#example1'});


/*
 * 简单的 TabView
 * 基于 Widget 来快速开发一个简单的 TabView 界面组件。
 */
var SimpleTabView = Widget.extend({

  attrs: {
    triggers: {
      value: '.nav li',
      getter: function(val) {
        return this.$(val);
      },
      readOnly: true
    },

    panels: {
      value: '.content div',
      getter: function(val) {
        return this.$(val);
      },
      readOnly: true
    },

    activeIndex: {
      value: 0
    }
  },

  events: {
    'click .nav li': '_switchToEventHandler'
  },

  _onRenderActiveIndex: function(val, prev) {
    var triggers = this.get('triggers');
    var panels = this.get('panels');

    triggers.eq(prev).removeClass('active');
    triggers.eq(val).addClass('active');

    panels.eq(prev).hide();
    panels.eq(val).show();
  },

  _switchToEventHandler: function(ev) {
    var index = this.get('triggers').index(ev.target);
    this.switchTo(index);
  },

  switchTo: function(index) {
    this.set('activeIndex', index);
  },

  setup: function() {
    this.get('panels').hide();
    this.switchTo(this.get('activeIndex'));
  },

  add: function(title, content) {
    var li = $('<li>' + title + '</li>');
    var div = $('<div>' + content + '</div>');

    li.appendTo(this.get('triggers')[0].parentNode);
    div.appendTo(this.get('panels')[0].parentNode);

    return this;
  },

  setActiveContent: function(content) {
    this.get('panels').eq(this.get('activeIndex')).html(content);
  },

  size: function() {
    return this.get('triggers').length;
  }

});


var tabView = new SimpleTabView({
  element: '#demo',
  activeIndex: 0
});

tabView.render();

var counter = 0;

$('#egg').on('click', function() {
  counter += 1;
  if (counter < 4) {
    tabView.add('haha','你已经点了' + counter +'次').switchTo(tabView.size() - 1);
  }
  else if (counter === 4) {
    tabView.setActiveContent('囧，你居然还点击，手真贱呀');
  }
  else {
    tabView.element.replaceWith('悄悄的我走了，带走了所有代码...');
    $(this).remove();
  }
})