import React, { Component } from 'react'
import Character from './Character';
import Panel from './Panel';
import Lollipop from './Lollipop';
import Wrapper from './Wrapper';
import styles from './index.module.css';
import { Button, Segment } from 'semantic-ui-react';
import { Story } from '../Controls';
import JsxParser from 'react-jsx-parser';
export default class Comic extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      isEditting: false,
      story: props.story
    };
  }
  toggleEdit = () => {
    this.setState({isEditting: !this.state.isEditting})
  }
  updateStory = (val) => {
    this.setState({story: val});
  }
  render() {
    return (
      <React.Fragment>
        <JsxParser
          components={Components}
          jsx={this.state.story}
        />
        <Button circular size="mini" color="pink" icon="edit" className={styles.toggleEdit} onClick={this.toggleEdit} />
        <Story isVisible={this.state.isEditting} story={this.state.story} updateStory={this.updateStory} />
      </React.Fragment>
    );
  }
}
export const Components = {
  Character,
  Panel,
  Lollipop,
  Wrapper
}
