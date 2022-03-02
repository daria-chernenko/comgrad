import React from 'react'
import { Label, Select, Segment, Header, Container, Grid, Form, Radio, TextArea } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun'
import styles from './Features.module.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import web from '../Themes/Web.module.css';
import instagram from '../Themes/Instagram.module.css';
import Lollipop from '../Comic/Character';
import JsxParser from 'react-jsx-parser'
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '10px', 
      viewMode: 'web',
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
                <Segment>
                  <h2>Zoomable</h2>
                  <p>
                    Hard time reading the text on this comics? Try to change the base font size with the form below:
                  </p>
                  <ThemeContext.Consumer>
                    {({ zoom, changeZoom }) => (
                      <Form>
                        <Form.Group inline>
                          <Form.Field>
                            <Radio 
                              label='5px' 
                              name='sizeGroup' 
                              value='5px' 
                              checked={zoom === '5px'} 
                              onChange={() => changeZoom('5px')}  
                            />
                          </Form.Field>
                          <Form.Field>
                            <Radio 
                              label='10px' 
                              name='sizeGroup' 
                              value='10px' 
                              checked={zoom === '10px'} 
                              onChange={() => changeZoom('10px')}  
                            />
                          </Form.Field>
                          <Form.Field>
                            <Radio 
                              label='40px' 
                              name='sizeGroup' 
                              value='40px' 
                              checked={zoom === '40px'} 
                              onChange={() => changeZoom('40px')}  
                            />
                          </Form.Field>
                        </Form.Group>
                      </Form>
                    )}
                  </ThemeContext.Consumer>
                </Segment>
                <Segment>
                  <h2>Exportable</h2>
                  <p>
                    HTML + CSS is nice and good, but what if you want the comics as individual stories? Well, you can simply export it. Just click on that tiny save icon in the corner. The form below allows you to preview the different version for export:
                  </p>
                  <ThemeContext.Consumer>
                    {({ theme, changeTheme }) => (
                      <Form>
                        <Form.Group inline>
                          <Form.Field>
                            <Radio 
                              label='Web' 
                              name='theme' 
                              checked={theme === web}
                              onChange={() => changeTheme(web)} 
                            />
                          </Form.Field>
                          <Form.Field>
                            <Radio 
                              label='Instagram' 
                              name='theme' 
                              checked={theme === instagram} 
                              onChange={() => changeTheme(instagram)} 
                            />
                          </Form.Field>
                        </Form.Group>
                      </Form>
                    )}
                  </ThemeContext.Consumer>
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
                    Do you have screen reader? Try to navigate through the comics itself to <strong>hear</strong> the story.
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
                    Want to write your own episode?
                  </p>
                  <Form>
                    <TextArea rows={2} value={this.state.comicString} onChange={(e, { value }) => this.setState({comicString: value})} />
                  </Form>
                </Segment>
                <Segment>
                  <h2>Anything else-able?</h2>
                  <p>
                    There is quite a lot that can be achieved with this technology. I'm constantly discovering new ones. If you have an idea, please <a href='mailto:michal.bryxi@gmail.com'>tell me</a>.
                  </p>
                </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <div style={{position: 'sticky', top: 0}}>
                <Issue01/>
                <JsxParser
                    components={{ Lollipop }}
                    jsx={`
                      <p>hello</p>
                      <Lollipop/>
                      <p>world</p>
                    `}
                  />
              </div>
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </React.Fragment>
    )
  }
}
export default Features
