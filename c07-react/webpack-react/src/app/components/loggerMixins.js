
import React, { Component } from 'react'

require('../assets/logger.scss')

var LoggerContainer = (Wrapper) =>
  class WrapperComponent extends Component {
    log(txt) {
      if (!window._logger_) {
        var el = window._logger_ = document.createElement('pre')
        el.className = 'ui-logger'
        document.body.appendChild(el)
      }
      var time = new Date()
      var h = time.getHours(), m = time.getMinutes(), s = time.getSeconds()
      var ts = [h, m ,s].join(':')
      var compName = '[' + this.constructor.displayName + ']'
      window._logger_.innerText = [window._logger_.innerText, ts + compName + ':' + txt].join('\n');
    }

    componentDidMount() {
      this.log('component rendered')
      this.setState({mounted: true})
    }

    render() {
      return <Wrapper {...this.props}/>
    }
  }

export default LoggerContainer;
