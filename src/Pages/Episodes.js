import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import { released, drafts } from '../Issues';
import Comic from '../Comic';
class Episodes extends Component {
  render() {
    return (
      <Container>
        <h1>Gradient company</h1>
        <Grid container columns='1'>
          <Grid.Column textAlign='center'>
            <h2>Released issues</h2>
          </Grid.Column>
          {released.map(function (story, index) {
            return (
              <Grid.Column textAlign='center' key={index}>
                <Comic story={story} />
              </Grid.Column>
            )
          })}
          <Grid.Column>
            <h2>Drafts</h2>
          </Grid.Column>
          {drafts.map(function (story, index) {
            return (
              <Grid.Column textAlign='center' key={index}>
                <Comic story={story} />
              </Grid.Column>
            )
          })}
        </Grid>
      </Container>
    )
  }
}
  export default Episodes
