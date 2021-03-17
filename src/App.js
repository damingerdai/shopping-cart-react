import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'

import createRootReducer from './store/reducers';
import { rootSaga } from './store/sagas';

import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";

const rootReducer = createRootReducer();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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
