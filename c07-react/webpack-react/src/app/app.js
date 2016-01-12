
import React from 'react'
import { render } from 'react-dom'
import Lamp from './components/lamp.jsx'
import SwitchButton from './components/switchButton.jsx'
import DigiClock from './components/digiClock.jsx'
import Login from './components/login.jsx'
import Panel from './components/panel.jsx'
import Slider from './components/slider.jsx'
import Gauge from './components/gauge.jsx'
import Thermometer from './components/thermometer.jsx'

import TodoApp from './todo/index'

var props = {
  onoff: 'on',
  color: 'purple',
  breath: true,
  gap: 200
}

render(
  <div>
    <Slider />
    <Gauge value="200" />
    <Thermometer value="27" />
    <Lamp onoff="off" color="green" breath="true"/>
    <Lamp onoff="on" color="purple" breath="true" gap="10"/>
    <Lamp onoff="on" color="red" breath="true" gap="100"/>
    <Lamp {...props}/>
    <Lamp onoff="on" color="purple"/>
    <Lamp onoff="on" color="purple"/>
    <SwitchButton />
    <DigiClock />
    <Login />
    <Panel title="水浒传 - 第三回21212">
      <p>史进在路，免不得饥餐渴饮，夜住晓行。独自一个行了半月之上，来到渭州。这里也有经略府。“莫非师父王教头在这里？”史进便入城来看时，依然有六街三市。只见一个小小茶坊，正在路口。史进便入茶坊里来，拣一付座位坐了。茶博士问道：“客官吃甚茶？”史进道：“吃个泡茶。”茶博士点个泡茶，放在史进面前。史进问道：“这里经略府在何处？”茶博士道：“只在前面便是。”史进道：“借问经略府内有个东京来的教头王进么？”茶博士道：“这府里教头极多，有三四个姓王的，不知那个是王进？”道犹未了，只见一个大汉，大踏步入来，走进茶坊里。史进看他时，是个军官模样。怎生结束？但见：</p>
      <p>头裹芝麻罗万字顶头巾，脑后两个太原府纽丝金环，上穿一领鹦哥绿丝战袍，腰系一条文武双股鸦青绦，足穿一双鹰爪皮四缝乾黄靴。生的面圆耳大，鼻直口方，腮边一部络腮胡须。身长八尺，腰阔十围。</p>
    </Panel>
  </div>,
  // <div>
  //   <TodoApp />
  // </div>,
  document.getElementById('app')
);
