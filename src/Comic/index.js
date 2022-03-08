import React, { Component } from 'react'
import Themed from './Themed';
class Comic extends Component {
  render() {
    return (
      <Themed {...this.props}>
        {this.props.children}
      </Themed>
    );
  }
}
export default Comic;
