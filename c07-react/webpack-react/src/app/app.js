
import React from 'react';
import ReactDom from 'react-dom';
import Lamp from './components/lamp.jsx';
import SwitchButton from './components/switchButton.jsx'


ReactDom.render(
  <div>
    <Lamp onoff="off" color="green"/>
    <Lamp onoff="on" color="purple"/>
    <Lamp onoff="on" color="red"/>
    <Lamp onoff="on" color="blue"/>
    <Lamp onoff="on" color="purple"/>
    <Lamp onoff="on" color="purple"/>
    <SwitchButton />
  </div>,
  document.getElementById('app')
);
