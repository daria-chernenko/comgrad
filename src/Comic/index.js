import React, { Component } from 'react'
import Character from './Character';
import Panel from './Panel';
import Lollipop from './Lollipop';
import HeadBag from './HeadBag';
import Wrapper from './Wrapper';
import styles from './index.module.css';
import { Button } from 'semantic-ui-react';
import { Story } from '../Controls';
import JsxParser from 'react-jsx-parser';
export default class Comic extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      components: props.components || Components,
      isEdittingStory: false,
      story: props.story
    };
  }
  toggleEditStory = () => {
    this.setState({isEdittingStory: !this.state.isEdittingStory})
  }
  updateStory = (val) => {
    this.setState({story: val});
  }
  render() {
    return (
      <React.Fragment>
        <JsxParser
          components={this.state.components}
          jsx={this.state.story}
        />
        <Button circular size="mini" color="pink" icon="edit" className={styles.toggleEditStory} onClick={this.toggleEditStory} />
        <Story isVisible={this.state.isEdittingStory} story={this.state.story} updateStory={this.updateStory} />
      </React.Fragment>
    );
  }
}
export const Components = {
  Character,
  Panel,
  Lollipop,
  Wrapper,
  HeadBag
}
