
require('../assets/gauge.css')

import React from 'react'

export default class Gauge extends React.Component {

  state = {
    value: 0, // 速度值
    mounted: false // 是否已经连接到 DOM
  };

  componentDidMount() {
    this.setState({mounted: true})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value > 220 || nextProps.value < 0) return false
    return true
  }

  render() {
    var degree = -201
    if (this.state.mounted) {
      degree = (this.props.value / 220) * 265 -201
    //  window.getComputedStyle(this.refs.ptr).transform
    }
    var style = {
      transform: 'rotate(' + degree + 'deg)'
    }
    return (
      <div className="ui-gauge">
        <img src="img/gauge.jpg" />
        <img src="img/gauge-pointer.jpg" className="pointer" style={style} ref="ptr" />
      </div>
    )
  }

}
