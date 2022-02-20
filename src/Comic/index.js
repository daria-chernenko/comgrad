import React, { Component } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext';
import Themed from './Themed';
class Comic extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, zoom, changeZoom, changeTheme}) => (
          <Themed {...this.props} theme={theme} zoom={zoom} changeZoom={changeZoom} changeTheme={changeTheme}>
            {this.props.children}
          </Themed>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Comic;
