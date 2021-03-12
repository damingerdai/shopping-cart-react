import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import createRootReducer from './store/reducers';

import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";

const rootReducer = createRootReducer();

const store = createStore(rootReducer);

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
