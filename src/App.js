import React, { Component } from 'react';
import './App.css';
import { Input, Grid } from 'semantic-ui-react'
import Issue01 from './Issues/01-it-will-be-fun';
import Issue02 from './Issues/02-coffee-addict';
import Issue03 from './Issues/03-effectivity';
import Issue04 from './Issues/04-balance-of-money';
import Issue05 from './Issues/05-titles';
import Issue06 from './Issues/06-no-code';
import Issue07 from './Issues/07-tickeeets';
import Issue08 from './Issues/08-treasure';
import Issue09 from './Issues/09-failing-tests';
import Issue10 from './Issues/10-optimisation';
import Issue11 from './Issues/11-strategy';
import HomepageLayout from './Layout/Homepage';
class App extends Component {
  state = { comicSize: 3 }
  handleInputChange = (e, { value }) => {
    this.setState({ comicSize: value });
  }
  render() {
    let comicClass = `comic-${this.state.comicSize}`;
    return (
      <div className="App">
        <HomepageLayout>
          <h1>Gradient company</h1>
          <Grid container>
            <Grid.Row textAlign='center'>
              <Grid.Column>
                <label>
                  Zoom:
                </label>
                <Input min={1} max={3} onChange={this.handleInputChange} type='range' value={this.state.comicSize} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className={comicClass} textAlign='center'>
              <Grid.Column>
                <h2>Released issues</h2>
                  <Issue01 />
                  <Issue02 />
                  <Issue03 />
                  <Issue04 />
                  <Issue05 />
                  <Issue06 />
                <h2>Drafts</h2>
                  <Issue07 />
                  <Issue08 />
                  <Issue09 />
                  <Issue10 />
                  <Issue11 />
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
