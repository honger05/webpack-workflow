
require('../../common/common.scss')
require('./index.scss')

var Slider = require('./slider.js')

var slider = new Slider({
  element: '.mi-banner__main',
  activeIndex: 0
})

slider.render()

// alert(slider)
