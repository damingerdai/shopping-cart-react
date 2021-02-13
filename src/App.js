import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';

class App extends React.Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
       <React.Fragment>
         <Navbar />
       </React.Fragment>
    )
  }
}

export default App;
