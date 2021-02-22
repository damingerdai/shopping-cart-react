import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-content">
          <div className="box card">
            <h2 className="header">登 录</h2>
            {/* <div className="header"></div> */}
            <form className="form">
              <TextField
                id="username"
                label="用户名"
                variant="outlined"
                className="w-full input"
              />
              <TextField
                id="password"
                label="密 码"
                variant="outlined"
                className="w-full input"
              />
              <div className="input text-center">
                <Button variant="contained" color="primary">
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

export default Login;
