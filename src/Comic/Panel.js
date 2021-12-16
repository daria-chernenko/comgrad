import React, { Component } from 'react'
import Title from './Title';
var classNames = require('classnames');
class Panel extends Component {
  render() {
    var className = classNames({
      box: true,
      painting: this.props.painting
    });
    return (
      <section className={className} aria-label={`Panel ${this.props.index}`}>
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
