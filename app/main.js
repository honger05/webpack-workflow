'use strict';

var Dialog = require('./dialog.js');

var $ = require('./jquery.js');

new Dialog({
    trigger: '#example1',
    height: '100px',
    content: '传入了字符串'
});

new Dialog({
    trigger: '#example2',
    height: '100px',
    content: $('#example2-dom')
});

new Dialog({
    trigger: '#example3',
    content: '<div style="padding:20px;">传入了 html 标签</div>'
});

new Dialog({
    trigger: '#example4',
    content: 'http://www.baidu.com/'
});