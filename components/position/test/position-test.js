'use strict';

var position = require('./component.js');

// 将 a1 定位到 b1 的  x: '50px',y: '50px' 位置
position.pin('#a1', {
  element: '#b1',
  x: '50px',
  y: '50px'
})

// 定位fixed元素, 无 element 表示可视区域
position.pin('#a2', {
  x: 400,
  y: 0
})

// 处理类似于100%+20px这样的定位
position.pin('#a3', {
  element: '#b3',
  x: '100%+50px',
  y: '50%-50'
});

// 定位到元素中央
position.center('#a4', '#b4');

// 目标元素带偏移量
position.pin({
  element: '#a5',
  x: 10,
  y: 30
}, {
  element: '#b5'
});