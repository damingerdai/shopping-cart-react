import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";

function user(state = { user: {} }, action) {
  const user = state.user;
  switch (action.type) {
    case "LOGIN":
      return {
        user: {
          ...user,
          username: action.username
        }
      };
    case "LOGOUT":
      return {
        user: {
          ...user,
          username: null
        }
      };
    default:
      return {
        user
      };
  }
}

const store = createStore(user);

class App extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Content />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
