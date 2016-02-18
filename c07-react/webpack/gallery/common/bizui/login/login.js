
require('./login.scss')

var LoginDialog = Hui.Overlay.extend({

  Implements: Hui.tools.Templatable,

  attrs: {

    template: require('./login.hbs'),

    classPrefix: 'hui-login-dialog'

  },

  parseElement: function() {

    this.set('model', {
      classPrefix: this.get('classPrefix')
    })

    LoginDialog.superclass.parseElement.call(this)

    this.contentElement = this.$('[data-role=content]')

  }

})

module.exports = LoginDialog
