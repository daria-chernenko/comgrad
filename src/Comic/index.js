import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';
import Themed from './Themed';
class Comic extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, zoom}) => (
          <Themed {...this.props} theme={theme} zoom={zoom}>
            {this.props.children}
          </Themed>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Comic;
