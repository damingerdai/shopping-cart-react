import React from "react";
import { Switch, Route } from "react-router";

import Login from '../../pages/login/Login';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/login">
            <Login />
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
