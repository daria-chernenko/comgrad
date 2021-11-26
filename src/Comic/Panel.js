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
      <div className={className}>
        {this.props.title && 
          <Title>{this.props.title}</Title>
        }
        {this.props.children}
      </div>
    );
  }
}
Panel.defaultProps = {
  painting: 'true'
}
export default Panel;
