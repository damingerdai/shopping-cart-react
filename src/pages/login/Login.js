import React from "react";
import Alert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { login } from '../../store/actions/loginAction';

import "./Login.scss";

function mapStateToProps(state) {
  return {
    username: state.login.username,
    errMsg: state.login.errMsg
  };
}

const mapDispatchToProps = {
  login
}

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        password: "",
      },
    };

    this.isLoginButtonDisable = this.isLoginButtonDisable.bind(this);
    this.login = this.login.bind(this);
  }

  handleUserName($event) {
    const { user } = this.state;
    user.username = $event.target.value;
    this.setState({
      user,
    });
  }

  handlePassword($event) {
    const { user } = this.state;
    user.password = $event.target.value;
    this.setState({
      user,
    });
  }

  isLoginButtonDisable() {
    const { user } = this.state;
    return !user.username || !user.password;
  }

  login() {
    const { user } = this.state;
    this.props.login(user);
  }

  render() {
    return (
      <div className="login">
        <div className="login-content">
          <div className="box card">
            <h2 className="header">登 录</h2>
            <form className="form">
              <TextField
                id="username"
                label="用户名"
                variant="outlined"
                value={this.state.user.username}
                onChange={($event) => this.handleUserName($event)}
                className="w-full input"
              />
              <TextField
                id="password"
                label="密 码"
                variant="outlined"
                value={this.state.user.password}
                onChange={($event) => this.handlePassword($event)}
                className="w-full input"
              />
              {this.props.errMsg && <Alert severity="error">{this.props.errMsg}</Alert>}
              <div className="input text-center">
                <Button
                  variant="contained"
                  color="primary"
                  disabled={this.isLoginButtonDisable()}
                  onClick={this.login}
                >
                  登录
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
