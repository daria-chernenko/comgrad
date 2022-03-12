import React, { Component } from 'react'
import Themed from './Themed';
import Edit from './Edit';
import Character from './Character';
import Panel from './Panel';
import Lollipop from './Lollipop';
import Wrapper from './Wrapper';
class Comic extends Component {
  render() {
    return (
      <Themed {...this.props} />
    );
  }
}
export const Components = {
  Edit, 
  Character,
  Panel,
  Lollipop,
  Wrapper
};
export default Comic;
