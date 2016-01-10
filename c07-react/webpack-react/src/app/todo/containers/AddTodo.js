
import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {

  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={ev => this.handleClick(ev)}>
          Add
        </button>
      </div>
    )
  }

  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  handleClick(ev) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}
