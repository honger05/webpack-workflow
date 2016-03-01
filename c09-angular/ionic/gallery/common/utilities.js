
var x = $('input[name=navbar]').val()
$('.mi-navbar__nav li').each(function(index, li) {
  $(li).removeClass('mi-active')
  if (x == index) {
    $(li).addClass('mi-active')
  }
})

var Utilities = {

  log: function(msg) {
    console.log(msg)
  }

}

module.exports = Utilities
