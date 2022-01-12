import PropTypes from 'prop-types'
import React from 'react'
import { Card, List, Responsive, Container, Grid, Header, Icon } from 'semantic-ui-react'
import RandomComics from '../Components/RandomComics'
import styles from './Home.module.css';
const HomepageHeading = ({ mobile }) => (
  <Grid.Row className={styles.banner}>
    <Grid.Column>
  <Container style={{ padding: '3em 0em' }} text>
    <Responsive {...Responsive.onlyMobile}>
      <Header
        as='h1'
        content='Fully accessible web comics'
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: 0,
        }}
      />
      <Header
        as='h2'
        content='Yes, it is possible'
        style={{
          fontSize: '1.5em',
          fontWeight: 'normal',
          marginTop: '1em',
        }}
      />
      {}
    </Responsive>
    <Responsive {...Responsive.onlyComputer}>
      <Header
        inverted
        as='h1'
        content='Fully accessible comics?'
        style={{
          fontSize: '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: 0,
        }}
      />
      <Header
        inverted
        as='h2'
        content='Yes, it is possible...'
        style={{
          fontSize: '1.7em',
          fontWeight: 'normal',
          marginTop: '1em',
        }}
      />
      {}
    </Responsive>
  </Container>
  </Grid.Column>
  </Grid.Row>
)
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomepageHeading />
        <Grid.Row>
          <Grid container relaxed stackable>
              <Grid.Column width={6}>
                <Header size='huge' as='h2'>Imagine a comics where...</Header>
                <List bulleted>
                  <List.Item>Nobody is excluded from consuming the content just because of their vision (or any other) impairment.</List.Item>
                  <List.Item>Authors are not forced to do expensive additional work upon publishing to make it accessible.</List.Item>
                  <List.Item>Public can actively contribute to make the comics better.</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={10} className='small-comics' textAlign='right'>
                <RandomComics />
              </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Container> 
            <Card.Group itemsPerRow={3}>
              <Card color='red'>
                <Card.Content>
                  <Card.Header>
                    <Icon bordered circular name='blind' />
                    Screen reader friendly
                  </Card.Header>
                  <Card.Description>
                    Try using screen reader on any of the episodes.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card color='red'>
                <Card.Content>
                  <Card.Header>
                    <Icon bordered circular name='code' />
                    Enhanceable
                  </Card.Header>
                  <Card.Description>
                    See a spelling error? Want to address discriminative language? Have idea for new episode? Comics is broken on your browser? Raise a merge request!
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card color='red'>
                <Card.Content>
                  <Card.Header>
                    <Icon bordered circular name='talk' />
                    Translatable
                  </Card.Header>
                  <Card.Description>
                    Did you know that it's quite a pain to translate comics? Well, over here it's quite easy.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <Grid.Column>
              <h3>Motivation</h3>
              <p>
                Over time I collected a lot of stories from my IT friends. Jokes from the environment of big corporates and/or startups. I thought that it would be neat to collect them as a comic. Unfortunately I haven't found easy way to create and download for publishing my ideas (for free). So why not create your own?
              </p>
              <p>This is a simple example of React in action - a learning project. Very nice showcase of latest & greatest CSS features.</p>
              <p>This was not obvious from the start, but I'm creating first ever fully accessible comics. It is possible to do virtually infinite zoom without losing quality. Text readers works very well. And there is possibility to enable high contrast mode as well. Did you know that it's quite a pain to translate comics? Well, over here it's quite easy.</p>
              <p>It is quite challenging to create story with the limited set of tools - CSS &amp; some emoji. There are emojis expressing feelings via emojis. How deep can we go?</p>
              <p>I wanted to create first ever comics that accepts pull requests. See a spelling error? Want to address discriminative language? Have idea for new episode? Comics is broken on your browser? Raisconsoe a PR!</p>
              <h3>Disclaimer</h3>
              <p>
                I tried my best to anonymize the sources of my stories. Some of them are even made up as a result of a "pub talk". If you still feel like you can recognize the source, please tell me.
                There is no intent to offend anybody. Just for the laughs.
              </p>
            </Grid.Column>
          </Container>
        </Grid.Row>
      </React.Fragment>
    )
  }
}
  export default Home
