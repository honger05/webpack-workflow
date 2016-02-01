
require('../../common/common.scss')
require('./detail.scss')

$('.mi-selection-box').on('click', '.mi-box', function() {
  $(this).parent().find('.mi-active').removeClass('mi-active')
  $(this).addClass('mi-active')
})
