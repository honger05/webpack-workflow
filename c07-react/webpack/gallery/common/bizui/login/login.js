
require('./login.scss')

var mask = Hui.Mask

var LoginDialog = Hui.Overlay.extend({

  Implements: Hui.tools.Templatable,

  attrs: {

    template: require('./login.hbs'),

    classPrefix: 'ui-dialog',

    hasMask: true,

    width: 500,

    height: 300,

    zIndex: 999,

    align: {
      value: {
        selfXY: ['50%', '50%'],
        baseXY: ['50%', '42%']
      }
    }

  },

  parseElement: function() {

    this.set('model', {
      classPrefix: this.get('classPrefix')
    })

    LoginDialog.superclass.parseElement.call(this)

  },

  setup: function() {
    LoginDialog.superclass.setup.call(this)

    this._setupMask()
  },

  _setupMask: function() {
    var that = this

    mask._dialogs = mask._dialogs || []

    this.after('show', function() {
      if (!this.get('hasMask')) {
        return
      }
      mask.set('zIndex', that.get('zIndex')).show()
      mask.element.insertBefore(that.element)

      var existed
      mask._dialogs.forEach(function(index, item) {
        if (item === that) {
          existed = item
        }
      })

      if (existed) {
        erase(existed, mask._dialogs)
        mask._dialogs.push(existed)
      } else {
        mask._dialogs.push(that)
      }
    })

    this.after('hide', this._hideMask)
  },

  _hideMask: function() {
    if (!this.get('hasMask')) {
      return
    }

    var dialogLength = mask._dialogs ? mask._dialogs.length : 0

    for (var i = 0; i < dialogLength; i++) {
      if (mask._dialogs[i] === this) {
        erase(this, mask._dialogs)

        if (mask._dialogs.length === 0) {
          mask.hide()
        }

        else if (i === dialogLength - 1) {
          var last = mask._dialogs[mask._dialogs.length - 1]
          mask.set('zIndex', last.get('zIndex'))
          mask.element.insertBefore(last.element)
        }
      }
    }
  }

})

function erase(item, array) {
  var index = -1
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i
      break;
    }
  }
  if (index !== -1) {
    array.splice(index, 1)
  }
}

module.exports = new LoginDialog()
