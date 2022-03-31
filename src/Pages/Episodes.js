import React, { Component } from 'react'
import { Header, Grid, Container, Tab } from 'semantic-ui-react'
import { released } from '../Issues';
import Comic from '../Comic';
class Episodes extends Component {
  render() {
    const panes = [];
    released.map(function(story, index) {
      panes.push({
        menuItem: index,
        render: () => <Tab.Pane><Comic story={story} key={index} /></Tab.Pane>
      })
    });
    const TabExampleBasic = () => <Tab panes={panes} />
    return (
      <Container>
        <Header as="h1">All the episodes</Header>
        <Grid container columns='1'>
          <Tab panes={panes} />
        </Grid>
      </Container>
    )
  }
}
  export default Episodes
