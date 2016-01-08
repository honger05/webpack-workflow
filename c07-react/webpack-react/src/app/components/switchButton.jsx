
import React from 'react'

export default class SwitchButton extends React.Component {

  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     on: false
  //   }
  //   this.onClick = this.onClick.bind(this)
  // }

  state = {
    on: false
  };

  onClick = (e) => {
    this.setState({on: !this.state.on});
  };

  render() {
    var img = this.state.on ? 'img/switch-on.png' : 'img/switch-off.png'
    return <img src={img} style={{width: "150px"}} onClick={this.onClick} />
  }

}
