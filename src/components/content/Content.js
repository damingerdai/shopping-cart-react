import React from "react";
import { Switch, Route } from "react-router";

import Login from '../../pages/login/Login';
import Home from '../../pages/home/Home';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <div>Hello World</div>
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Content;
