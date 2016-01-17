
var Widget = require('../core/widget')
var $ = require('jquery')
var _ = require('underscore')

var Slider = Widget.extend({
  attrs: {
    triggers: {
      value: '.mi-banner__nav li',
      getter: function(val) {
        return this.$(val)
      },
      readOnly: true
    },

    // panels: {
    //   value: '.content div',
    //   getter: function(val) {
    //     return this.$(val)
    //   },
    //   readOnly: true
    // },

    activeIndex: {
      value: 0
    }
  },

  events: {
    'click .mi-banner__nav li': '_switchToEventHandler'
  },

  _onRenderActiveIndex: function(val, prev) {
    var triggers = this.get('triggers')
    // var panels = this.get('panels')

    triggers.eq(prev).removeClass('active')
    triggers.eq(val).addClass('active')

    var img = 'url(../assets/images/banner-bg-' + (val + 1) + '.png)'
    $('.mi-banner').css('backgroundImage', img)
    // panels.eq(prev).hide()
    // panels.eq(val).show()
  },

  _switchToEventHandler: function(ev) {
    var triggers = this.get('triggers')
    // var index = _.findIndex(triggers, function(element, idx) {
    //   if (ev.target == element) {
    //     return idx;
    //   }
    // })
    var index = triggers.index(ev.target.parentNode)
    this.switchTo(index)
  },

  switchTo: function(index) {
    this.set('activeIndex', index)
  },

  setup: function() {
    // this.get('panels').hide()
    this.switchTo(this.get('activeIndex'))
  }
})

module.exports = Slider;
