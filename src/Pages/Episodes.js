import React, { Component } from 'react'
import { Grid, Container, Button } from 'semantic-ui-react'
import { released, drafts } from '../Issues';
class Episodes extends Component {
  render() {
    return (
      <Container>
        <h1>Gradient company</h1>
          <Grid container>
           <Grid.Row textAlign='center'>
              <Grid.Column>
                <h2>Released issues</h2>
                {released.map(function (Issue, index) {
                  return <Issue key={index} />
                })}
                <h2>Drafts</h2>
                {drafts.map(function (Issue, index) {
                  return <Issue key={index} />
                })}
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    )
  }
}
  export default Episodes
