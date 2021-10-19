import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './Layout/Homepage';
class App extends Component {
  state = { comicSize: 3 }
  handleInputChange = (e, { value }) => {
    this.setState({ comicSize: value });
  }
  render() {
    return (
      <div className="App">
        <HomepageLayout>
        </HomepageLayout>
      </div>
    );
  }
}
export default App;
