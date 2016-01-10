
require('../assets/panel.css')

import React from 'react'

export default class Panel extends React.Component {

  render() {
    return (
      <div className="ui-panel">
        <div className="header">
          {this.props.title}
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }

}
