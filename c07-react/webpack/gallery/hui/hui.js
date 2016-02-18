
module.exports = {

  core: {

    Events: require('./core/events'),

    Base: require('./core/base')

  },

  tools: {

    Position: require('./tools/position'),

    Templatable: require('./tools/templatable')

  },

  Widget: require('./core/widget'),

  Overlay: require('./widget/overlay/overlay'),

  Mask: require('./widget/overlay/mask'),

  Dialog: require('./widget/dialog/dialog')

}
