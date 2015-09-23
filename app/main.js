'use strict';

var Overlay = require('./overlay.js');

var o = new Overlay({
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