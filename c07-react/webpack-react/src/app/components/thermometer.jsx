
require('../assets/thermometer.css')

import React from 'react'
import LoggerContainer from './loggerMixins.js'

class Thermometer extends React.Component {

  static defaultProps = {
    value: 20,
    color: 'red'
  };

  static propTypes = {

  };

  state = {
    mounted: false
  };

  componentDidMount() {
    // this.log('.......component rendered!')
    this.setState({mounted: true})
  }

  render() {
    var bubbleStyle = {
      background: this.props.color,
      left: 65,
      top: 350
    }

    var top = 253.57

    if (this.state.mounted) {
      top = (50 - 335) * this.props.value / (50 + 20) + 253.37
      window.getComputedStyle(this.refs.bar).top
    }

    var barStyle = {
      background: this.props.color,
      top: top,
      bottom: 80
    }

    return (
      <div className="ui-thermometer">
        <img src="img/Thermometer.png" />
        <div className="bubble" style={bubbleStyle}></div>
        <div className="bar" style={barStyle} ref="bar"></div>
      </div>
    )
  }

}

export default LoggerContainer(Thermometer)
