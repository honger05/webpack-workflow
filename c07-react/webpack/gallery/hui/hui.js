
require('font-awesome/scss/font-awesome.scss')
require('./styles/common.scss')

module.exports = {

  Widget: require('./core/widget'),

  Overlay: require('./widget/overlay/overlay'),

  Mask: require('./widget/overlay/mask'),

  Dialog: require('./widget/dialog/dialog')

}
