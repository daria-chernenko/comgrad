import React, { Component } from 'react';
import './App.css';
import Favicon from 'react-favicon';
import HomepageLayout from './Layout/Homepage';
import { ThemeContext } from './Contexts/ThemeContext';
import web from './Themes/Web.module.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.changeTheme = (val) => {
      this.setState({theme: val});
    }
    this.changeZoom = (val) => {
      this.setState({zoom: val});
    }
    this.state = {
      theme: web,
      zoom: '10px',
      changeTheme: this.changeTheme,
      changeZoom: this.changeZoom
    };
  }
  render() {
    return (
      <div className="App">
        <Favicon url="/favicon.png" />
        <ThemeContext.Provider value={this.state}>
          <HomepageLayout />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;
