import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Issue01 from './Issues/01-it-will-be-fun';
import Issue02 from './Issues/02-coffee-addict';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Gradient company</h1>
        <h2>Released issues</h2>
          <Issue01 />
        <h2>Drafts</h2>
          <Issue02 />
        <footer>
          <p>Hosted on <a href="https:
          <p>Published on <a href="http:
        </footer>
      </div>
    );
  }
}
export default App;
