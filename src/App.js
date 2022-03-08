import React, { Component } from 'react';
import './App.css';
import Favicon from 'react-favicon';
import HomepageLayout from './Layout/Homepage';
import web from './Themes/Web.module.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Favicon url="/favicon.png" />
        <HomepageLayout />
      </div>
    );
  }
}
export default App;
