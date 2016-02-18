
var loginDialog = new Cmn.UI.LoginDialog()

loginDialog.show()



var o = new Hui.Overlay({
    template: "<div class='overlay'>目标元素1</div>",
    parentNode: '#c',
    id: 'myoverlay',
    style: {
        color: '#fff'
    },
    align: {
        selfXY: ['-100%', 0],
        baseElement: '#a',
        baseXY: [0, 0]
    }
});
o.show();
o.set('style', {
    backgroundColor: '#f53379'
});
o.set('height', 40);





var mask = Hui.Mask
var num = 1
$('#aa').click(function() {
  num += 1
  if (num % 2 == 1) {
    mask.set('backgroundColor', 'green').set('opacity', '0.3').show();
  } else {
    mask.set('backgroundColor', 'red').set('opacity', '0.5').show();
  }
});

$(document).keyup(function(e) {
    // keyboard esc
    if (e.keyCode === 27) {
        mask.hide();
    }
});
