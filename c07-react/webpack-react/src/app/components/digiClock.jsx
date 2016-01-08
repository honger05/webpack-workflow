
require('../assets/digiClock.css')

import React from 'react'

var _getTime = function() {
  // 补零
  var _ = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
  var d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();

  return [_[h] || h, _[m] || m, _[s] || s].join(':')
}

export default class DigiClock extends React.Component {

  state = {
    time: _getTime()
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({time: _getTime()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="ui-digi-clock">
        {this.state.time}
      </div>
    )
  }

}
