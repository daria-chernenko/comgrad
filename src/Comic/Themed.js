import React, { Component } from 'react';
import Edit from './Edit';
import ReactDOM from 'react-dom'
import styles from './Themed.module.css';
import { Web } from '../Themes';
import { Segment, Form, Radio } from 'semantic-ui-react';
import { Download, Zoom, Theme, Story } from '../Controls';
import JsxParser from 'react-jsx-parser';
import Lollipop from './Lollipop';
import { Components } from './';
class Themed extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      theme: Web,
      isEditting: false,
      zoom: '10px',
      story: props.story
    };
    this.titleRef = React.createRef();
    this.iconRef = React.createRef();
    this.signatureRef = React.createRef();
    this.strips = [React.createRef(), React.createRef(), React.createRef()];
  }
  toggleEdit = () => {
    this.setState({isEditting: !this.state.isEditting})
  }
  changeZoom = (val) => {
    this.setState({zoom: val});
  }
  changeTheme = (val) => {
    this.setState({theme: val});
  }
  updateStory = (val) => {
    this.setState({story: val});
  }
  render() {
    let editForm = '';
    if(this.state.isEditting) {
      editForm = <Segment>
        <Form>
          {}
          {}
          <Story story={this.state.story} updateStory={this.updateStory} />
          {}
        </Form>
      </Segment>
    };
    return (
      <div className={styles.wrapper}>
        {editForm}
        <JsxParser
          components={Components}
          jsx={this.state.story}
        />;
        <Edit clicked={this.toggleEdit}/>
      </div>
    );
  }
}
export default Themed;
