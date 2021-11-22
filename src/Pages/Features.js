import React from 'react'
import { Grid, Form, Radio } from 'semantic-ui-react'
import Issue01 from '../Issues/01-it-will-be-fun'
class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {size: '10px'};
    this.changeSize = this.changeSize.bind(this);
  }
  changeSize(event, { value }) {
    this.setState({ size: value });
  }
  render () {
    return (
      <React.Fragment>
        <Grid container>
          <Grid.Row>
            <Grid.Column>
              <h1>Features</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h2>Zoomable</h2>
              <Form>
                <Form.Group inline>
                  <Form.Field>
                    <Radio label='1x' name='sizeGroup' value='5px' checked={this.state.size === '5px'} onChange={this.changeSize} />
                  </Form.Field>
                  <Form.Field>
                    <Radio label='2x' name='sizeGroup' value='10px' checked={this.state.size === '10px'} onChange={this.changeSize} />
                  </Form.Field>
                  <Form.Field>
                    <Radio label='3x' name='sizeGroup' value='21px' checked={this.state.size === '21px'} onChange={this.changeSize} />
                  </Form.Field>
                </Form.Group>
              </Form>
              <div className="zoomable" style={{fontSize: this.state.size}}>
                <Issue01 />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}
export default Features
