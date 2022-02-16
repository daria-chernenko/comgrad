import React, { Component } from 'react'
import domtoimage from 'dom-to-image'
import Download from './Download';
import ReactDOM from 'react-dom'
import styles from './index.module.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import Themed from './Themed';
import classNames from 'classnames';
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
