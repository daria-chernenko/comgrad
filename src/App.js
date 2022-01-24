import React, { Component } from 'react';
import './App.css';
import Favicon from 'react-favicon';
import HomepageLayout from './Layout/Homepage';
import { ThemeContext } from './Contexts/ThemeContext';
class App extends Component {
  constructor(props) {
    super(props);
    this.changeTheme = (val) => {
      this.setState({theme: val});
    }
    this.state = {
      theme: 'web',
      changeTheme: this.changeTheme
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
