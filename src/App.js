import React, { Component } from 'react';
import './App.css';
import Favicon from 'react-favicon';
import HomepageLayout from './Layout/Homepage';
class App extends Component {
  state = { comicSize: 3 }
  handleInputChange = (e, { value }) => {
    this.setState({ comicSize: value });
  }
  render() {
    return (
      <div className="App">
        <Favicon url="/favicon.png" />
        <HomepageLayout>
        </HomepageLayout>
      </div>
    );
  }
}
export default App;
