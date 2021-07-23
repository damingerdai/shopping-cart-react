import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './store/reducers';
import { rootSaga } from './store/sagas';

import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";

import "./App.scss";

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)));
sagaMiddleware.run(rootSaga);

class App extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Navbar />
          <Content />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
