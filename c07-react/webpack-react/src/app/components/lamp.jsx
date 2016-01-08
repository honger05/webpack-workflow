
import React from 'react'


require('../assets/lamp.css')

export default class Lamp extends React.Component {

  state = {
    onoff: true
  };

  componentDidMount() {
    var breath = !!this.props.breath
    var timegap = this.props.gap || 1000

    if (breath) {
      this.timer = setInterval(() => {
        this.setState({onoff: !this.state.onoff})
      }, timegap)
    }
  }

  conponentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render() {
    var onoff = this.props.onoff
    var color = this.props.color

    var breath = !!this.props.breath

    if (breath) {
      onoff = this.state.onoff ? 'on' : 'off'
    }

    var lights = {
      on: '#fff',
      off: '#888'
    }

    var opactiy = {
      on: 1,
      off: 0.5
    }

    var style = {
      opactiy: opactiy[onoff],
      background: 'radial-gradient(30% 30%, '+ lights[onoff] +' 5%, '+ color +' 95%)'
    }

    return <span className="ui-lamp" style={style}></span>
  }
}
