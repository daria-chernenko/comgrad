import React from 'react'
import { Message, Button, Label, Select, Segment, Header, Container, Grid, Form, Radio, TextArea } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun'
import styles from './Features.module.css';
import Lollipop from '../Comic/Character';
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '10px', 
      comicString: '<Lollipop />'
    };
  }
  changeSize = (event, { value }) => {
    this.setState({ size: value });
  }
  changeViewMode = (event, { value }) => {
    this.setState({ viewMode: value });
  }
  render () {
    let languages = [
      {key: 'en', text: 'English'},
      {key: 'sp', text: 'Spanish'},
      {key: 'cz', text: 'Czech'}
    ];
    return (
      <React.Fragment>
        <Grid.Row className={styles.banner}>
          <Container style={{ padding: '3em 0em' }} text>
            <Grid.Column>
              <Header inverted as='h1'    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: 0, }}>Features</Header>
              <Header inverted as='h2'>Showcase of all the weird stuff that is possible.</Header>
            </Grid.Column>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <Grid container>
            <Grid.Column width={6}>
              <Message color="teal">
                <Message.Header>
                  The edit button
                </Message.Header>
                <p>
                  Hit the edit button <Button circular icon="bars" size='mini' /> in the corner of the comics to edit it's properties.
                </p>
              </Message>
              <Segment>
                <h2>Zoomable</h2>
                <p>
                  Hard time reading the text on this comics? Try changing the base font size, which in turn changes whole comic size.
                </p>
              </Segment>
              <Segment>
                <h2>Themeable</h2>
                <p>
                  Bored of horizontal layout? Try to change the theme to get different perspective on things.
                </p>
              </Segment>
              <Segment>
                <h2>Accessible</h2>
                <p>
                  Try to navigate through the comics itself with your screen reader to <strong>hear</strong> the story.
                </p>
              </Segment>
              <Segment>
                <h2>Exportable</h2>
                <p>
                  HTML + CSS is nice, but not really useful in different kind of media. Wanna export the comics to your Instagram or something? Hit the save button.
                </p>
              </Segment>
              <Segment>
                <h2>Enhanceable</h2>
                <p>
                  This is a living project. So if you spot an error or something that can be improved, just jump in and <a href='https:
                </p>
              </Segment>
              <Segment color='red'>
                <h2>
                  Editable
                  <Label as='a' color='red' floating>
                      WIP
                  </Label>
                </h2>
                <p>
                  Want to write your own episode?
                </p>
              </Segment>
              <Segment color='red'>
                <h2>
                  Mobile friendly
                  <Label as='a' color='red' floating>
                      WIP
                  </Label>
                </h2>
                <p>
                  Noticed that when you zoom the comics individual panels will stack up vertically? Much better experience for reading at your smartphone.
                </p>
              </Segment>
              <Segment color='red'>
                <h2>
                  Translatable
                  <Label as='a' color='red' floating>
                      WIP
                  </Label>
                </h2>
                <p>
                  Hablas español? Every episode can be translated to multiple languages.
                </p>
              </Segment>
              <Segment>
                <h2>Anything else?</h2>
                <p>
                  There is quite a lot that can be achieved with this technology. I'm constantly discovering new ones. If you have an idea, please <a href='mailto:michal.bryxi@gmail.com'>tell me</a>.
                </p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <div style={{position: 'sticky', top: 0}}>
                <Issue01/>
              </div>
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </React.Fragment>
    )
  }
}
export default Features
