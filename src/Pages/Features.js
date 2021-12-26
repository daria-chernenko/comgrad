import React from 'react'
import { Header, Container, Grid, Form, Radio } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun'
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {size: '5px'};
    this.changeSize = this.changeSize.bind(this);
  }
  changeSize(event, { value }) {
    this.setState({ size: value });
  }
  render () {
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
            <Grid.Column width={4}>
              <h2>Zoomable</h2>
              <p>
                Hard time reading the text on this comics? Try to change the base font size with the form below.
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
            </Grid.Column>
            <Grid.Column width={12} textAlign='right'>
              <div className="zoomable" style={{fontSize: this.state.size}}>
                <Issue01 />
              </div>
            </Grid.Column>
        </Grid>
          </Grid.Row>
      </React.Fragment>
    )
  }
}
export default Features
