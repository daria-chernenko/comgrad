import React, { Component } from 'react'
import Title from './Title';
import styles from './Panel.module.css';
var classNames = require('classnames');
class Panel extends Component {
  render() {
    var className = classNames(
      styles.box,
    {
      painting: this.props.painting
    });
    return (
      <section className={className} aria-label={`Panel ${this.props.index + 1}`}>
        {this.props.title && 
          <Title>{this.props.title}</Title>
        }
        {this.props.children}
      </section>
    );
  }
}
Panel.defaultProps = {
  painting: false
}
export default Panel;
