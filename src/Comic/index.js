import React, { Component } from 'react'
import Edit from './Edit';
import Character from './Character';
import Panel from './Panel';
import Lollipop from './Lollipop';
import Wrapper from './Wrapper';
import styles from './Themed.module.css';
import { Web } from '../Themes';
import { Button, Segment, Form, Transition } from 'semantic-ui-react';
import { Story } from '../Controls';
import JsxParser from 'react-jsx-parser';
export default class Comic extends Component {
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
    return (
      <Segment.Group className={styles.wrapper}>
        <Segment>
          <JsxParser
            components={Components}
            jsx={this.state.story}
          />
          <Button circular icon="edit" className={styles.toggleEdit} onClick={this.toggleEdit}/>
        </Segment>
              <Story isVisible={this.state.isEditting} story={this.state.story} updateStory={this.updateStory} />
      </Segment.Group>
    );
  }
}
export const Components = {
  Edit, 
  Character,
  Panel,
  Lollipop,
  Wrapper
}
