import React, { Component } from 'react'
import { Grid, Container, Button } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun';
import Issue02 from '../Issues/02-coffee-addict';
import Issue03 from '../Issues/03-effectivity';
import Issue04 from '../Issues/04-balance-of-money';
import Issue05 from '../Issues/05-titles';
import Issue06 from '../Issues/06-no-code';
import Issue07 from '../Issues/07-tickeeets';
import Issue08 from '../Issues/08-treasure';
import Issue09 from '../Issues/09-failing-tests';
import Issue10 from '../Issues/10-optimisation';
import Issue11 from '../Issues/11-strategy';
class Episodes extends Component {
  render() {
    return (
      <Container>
        <h1>Gradient company</h1>
          <Grid container>
           <Grid.Row textAlign='center'>
              <Grid.Column>
                <h2>Released issues</h2>
                  <Issue01 />
                  <Issue02 />
                  <Issue03 />
                  <Issue04 />
                  <Issue05 />
                  <Issue06 />
                  <Issue07 />
                  <Issue08 />
                  <Issue09 />
                <h2>Drafts</h2>
                  <Issue10 />
                  <Issue11 />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    )
  }
}
  export default Episodes
