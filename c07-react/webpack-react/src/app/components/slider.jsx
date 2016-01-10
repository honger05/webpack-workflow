
require('../assets/slider.css')

import React from 'react'

export default class Slider extends React.Component {

  state = {
    moving: false, //标记是否在移动推子手柄
    oTop: 191, //在推子上按下鼠标时，推子手柄的top属性值
    left: 41, //推子手柄的left属性值，保持不变
    top: 191, //推子手柄的top属性值，根据鼠标位置变化
    value: 0.00 //根据推子手柄位置换算的0~10区间的值
  };

  onMouseDown = (ev) => {
    if (ev.target.className != 'knob') return;
    this.setState({
      moving: true,
      oTop: this.state.top,
      y: ev.clientY
    })
  };

  onMouseMove = (ev) => {
    ev.preventDefault()
    if (!this.state.moving) return

    var deltaY = ev.clientY - this.state.y,
        nTop = this.state.oTop + deltaY,
        value = (10 - (nTop - 38) * 10 / (191 - 38)).toFixed(2);

    if (nTop <= 191 && nTop >= 38) {
      this.setState({
        top: nTop,
        value: value
      })
      this.props.onChange && this.props.onChange(value)
    }
  };

  onMouseUp = (ev) => {
    this.setState({moving: false})
  };

  render() {

    var knobStyle = {
      left: this.state.left,
      top: this.state.top,
      cursor: this.state.moving ? 'pointer' : 'default'
    }

    var props = {
      className: 'ui-slider',
      onMouseDown: this.onMouseDown,
      onMouseMove: this.onMouseMove,
      onMouseUp: this.onMouseUp
    }

    return (
      <div {...props}>
        <img className="bg" src="img/slider-bg.png" />
        <img className="knob" src="img/slider-knob.png" style={knobStyle} />
      </div>
    )
  }

}
