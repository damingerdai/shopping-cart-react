import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';

import './App.scss';

class App extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Content />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
