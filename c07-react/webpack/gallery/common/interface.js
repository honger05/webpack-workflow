
require('font-awesome/scss/font-awesome.scss')
require('../styles/common.scss')

module.exports = {

  Utilities: require('./utilities'),

  UI: {

    LoginDialog: require('./bizui/login/login'),

    RegisterDialog: require('./bizui/register/register')

  }

}
