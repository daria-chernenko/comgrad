import React, { Component } from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Message,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Card,
    Visibility,
    Divider,
    Image
  } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun'
import RandomComics from '../Components/RandomComics'
class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid textAlign="center">
          <Grid.Row color="purple">
            <Container>
              <Grid.Column>
                <Header inverted className="huge" as='h1'>
                  Fully accessible web comics
            </Header>
                <p class="inverted">
                  Yes, it is possible
            </p>
              </Grid.Column>
            </Container>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Grid textAlign="center" container relaxed stackable divided columns={1}>
          <Grid.Row>
            <Grid.Column>
              {}
              {}
              <RandomComics />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Grid textAlign="center" container relaxed stackable divided columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Header icon as="h3">
                <Icon bordered circular name='blind' />Screen reader friendly
            </Header>
              <p>
                Try using screen reader on any of the episodes.
            </p>
            </Grid.Column>
            <Grid.Column>
              <Header icon as="h3">
                <Icon bordered circular name='code' />Enhanceable
            </Header>
              <p>
                See a spelling error? Want to address discriminative language? Have idea for new episode? Comics is broken on your browser? Raise a MR!
            </p>
            </Grid.Column>
            <Grid.Column>
              <Header icon as="h3">
                <Icon bordered circular name='talk' />Translatable
                </Header>
              <p>
                Did you know that it's quite a pain to translate comics? Well, over here it's quite easy.
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </div>
    )
  }
}
  export default Home
