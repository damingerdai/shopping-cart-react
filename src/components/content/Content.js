import React from "react";
import { Switch, Route } from "react-router";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/login">
            <div>登录</div>
          </Route>
          <Route path="/">
            <div>home</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Content;
