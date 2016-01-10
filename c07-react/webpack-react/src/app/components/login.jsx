
require('../assets/login.css')

import React from 'react'

export default class Login extends React.Component {

  auth = (ev) => {
    var account = this.refs.account.value,
        pass = this.refs.password.value;

    alert([account, pass])
  };

  render() {
    return (
      <div className="ui-login">
        <div className="row title">
          <h1>登陆</h1>
        </div>
        <div className="row account">
          <label>用户</label>
          <input type="text" defaultValue="Jason" ref="account" />
        </div>
        <div className="row pass">
          <label>密码</label>
          <input type="password" ref="password" />
        </div>
        <div className="row remember">
          <input type="checkbox" defaultChecked />
          <span>记住密码</span>
        </div>
        <div className="row button">
          <button onClick={this.auth}>登陆</button>
        </div>
      </div>
    )
  }

}
