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
          <footer>
            <p>Source on <a href="https:
            <p>Published on <a href="http:
          </footer>
        </HomepageLayout>
      </div>
    );
  }
}
export default App;
