import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { released, drafts } from '../Issues';
class Episodes extends Component {
  render() {
    return (
      <Container>
        <h1>Gradient company</h1>
        <Grid container columns='1'>
          <Grid.Column textAlign='center'>
            <h2>Released issues</h2>
          </Grid.Column>
          {released.map(function (Issue, index) {
            return (
              <Grid.Column textAlign='center'>
                <Issue key={index} />
              </Grid.Column>
            )
          })}
          <Grid.Column>
            <h2>Drafts</h2>
          </Grid.Column>
          {drafts.map(function (Issue, index) {
            return (
              <Grid.Column textAlign='center'>
                <Issue key={index} />
              </Grid.Column>
            )
          })}
        </Grid>
      </Container>
    )
  }
}
  export default Episodes
