
import React from 'react'
import ReactDom from 'react-dom'
import Lamp from './components/lamp.jsx'
import SwitchButton from './components/switchButton.jsx'
import DigiClock from './components/digiClock.jsx'


ReactDom.render(
  <div>
    <Lamp onoff="off" color="green" breath="true"/>
    <Lamp onoff="on" color="purple" breath="true" gap="10"/>
    <Lamp onoff="on" color="red" breath="true" gap="100"/>
    <Lamp onoff="on" color="blue"/>
    <Lamp onoff="on" color="purple"/>
    <Lamp onoff="on" color="purple"/>
    <SwitchButton />
    <DigiClock />
  </div>,
  document.getElementById('app')
);
