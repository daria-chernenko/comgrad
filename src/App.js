import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Issue01 from './Issues/01-it-will-be-fun';
import Issue02 from './Issues/02-coffee-addict';
import Issue03 from './Issues/03-effectivity';
import HomepageLayout from './Layout/Homepage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageLayout>
          <h1>Gradient company</h1>
          <h2>Released issues</h2>
            <Issue01 />
            <Issue02 />
          <h2>Drafts</h2>
            <Issue03 />
          <footer>
            <p>Hosted on <a href="https:
            <p>Published on <a href="http:
          </footer>
        </HomepageLayout>
      </div>
    );
  }
}
export default App;
