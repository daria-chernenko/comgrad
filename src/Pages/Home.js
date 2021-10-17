import React, { Component } from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Card,
    Visibility,
    Image
  } from 'semantic-ui-react'
const Home = (props) => (
    <div>
    <Segment inverted>
          <Container text>
    <Header
      as='h1'
      content='Fully accessible web comics'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='Yes, it is possible'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
  </Container>
  </Segment>
  <Container>
      <Header as="h2">What?</Header>
  <Grid stackable columns={3} masonry>
    <Grid.Column>
      <Card fluid color="red">
          <Card.Content>
            <Card.Header><Icon name='blind' />Screen reader friendly</Card.Header>
            <Card.Description>Try using screen reader on any of the episodes.</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card fluid color="orange">
          <Card.Content>
            <Card.Header><Icon name='code' />Enhanceable</Card.Header>
            <Card.Description>See a spelling error? Want to address discriminative language? Have idea for new episode? Comics is broken on your browser? Raise a MR!</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
    <Grid.Column>
      <Card fluid color="yellow">
          <Card.Content>
            <Card.Header><Icon name='talk' />Translatable</Card.Header>
            <Card.Description>Did you know that it's quite a pain to translate comics? Well, over here it's quite easy.</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
      </Container>
    </div>
  )
  export default Home
