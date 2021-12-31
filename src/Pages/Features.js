import React from 'react'
import { Label, Select, Segment, Rail, Sticky, Button, Header, Container, Grid, Form, Radio } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun'
class Features extends React.Component {
  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })
  constructor(props) {
    super(props);
    this.state = {size: '10px', viewMode: 'web'};
  }
  changeSize = (event, { value }) => {
    this.setState({ size: value });
  }
  changeViewMode = (event, { value }) => {
    console.log('moo');
    this.setState({ viewMode: value });
  }
  render () {
    const { contextRef } = this.state
    let languages = [
      {text: 'English'},
      {text: 'Spanish'},
      {text: 'Czech'}
    ];
    return (
      <React.Fragment>
        <Grid.Row className='title-features'>
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
              <div ref={this.handleContextRef}>
              <Segment>
                <h2>Zoomable</h2>
                <p>
                  Hard time reading the text on this comics? Try to change the base font size with the form below:
                </p>
                <Form>
                  <Form.Group inline>
                    <Form.Field>
                      <Radio label='5px' name='sizeGroup' value='5px' checked={this.state.size === '5px'} onChange={this.changeSize} />
                    </Form.Field>
                    <Form.Field>
                      <Radio label='10px' name='sizeGroup' value='10px' checked={this.state.size === '10px'} onChange={this.changeSize} />
                    </Form.Field>
                    <Form.Field>
                      <Radio label='21px' name='sizeGroup' value='21px' checked={this.state.size === '21px'} onChange={this.changeSize} />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Segment>
              <Segment>
                <h2>Exportable</h2>
                <p>
                  HTML + CSS is nice and good, but what if you want the comics as individual stories? Well, you can simply export it. Just click on that tiny save icon in the corner. The form below allows you to preview the different version for export:
                </p>
                <Form>
                  <Form.Group inline>
                    <Form.Field>
                      <Radio label='Web' name='viewMode' value='web' checked={this.state.viewMode === 'web'} onChange={this.changeViewMode} />
                    </Form.Field>
                    <Form.Field>
                      <Radio label='Instagram' name='viewMode' value='download-instagram' checked={this.state.viewMode === 'download-instagram'} onChange={this.changeViewMode} />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Segment>
              <Segment>
                <h2>Mobile friendly</h2>
                <p>
                  Noticed that when you zoom the comics individual panels will stack up vertically? Much better experience for reading at your smartphone.
                </p>
              </Segment>
              <Segment>
                <h2>Readable</h2>
                <p>
                  Do you have screen reader? Try to jump through the comics itself to <strong>hear</strong> the story.
                </p>
              </Segment>
              <Segment>
                <h2>Enhanceable</h2>
                <p>
                  This is a living project. So if you want spot an error or something that can be improved, just jump in and <a href='https:
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
                  Hablas español? Every episode can be translated to multiple languages. Try it: 
                </p>
                <Select placeholder='Language' options={languages} />
              </Segment>
              <Segment color='red'>
                <h2>
                  Editable
                  <Label as='a' color='red' floating>
                      WIP
                  </Label>
                </h2>
                <p>
                  Want to write your own episode via simple langage?
                </p>
              </Segment>
              <Segment>
                <h2>Anything else-able?</h2>
                <p>
                  There is quite a lot that can be achieved with this technology. I'm constantly discovering new ones. If you have an idea, please <a href='mailto:michal.bryxi@gmail.com'>tell me</a>.
                </p>
              </Segment>
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              {}
                <Sticky context={contextRef}>
                  <Grid.Column width={12} textAlign='right'>
                    <div className={this.state.viewMode} style={{fontSize: this.state.size}}>
                      <Issue01 />
                    </div>
                  </Grid.Column>
                </Sticky>
              {}
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </React.Fragment>
    )
  }
}
export default Features
