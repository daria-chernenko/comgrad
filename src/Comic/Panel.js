import React, { Component } from 'react'
import Title from './Title';
var classNames = require('classnames');
class Panel extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    var className = classNames({
      box: true,
      painting: this.props.painting
    });
    return (
      <div className={className} ref={this.myRef}>
        {this.props.title && 
          <Title>{this.props.title}</Title>
        }
        {this.props.children}
      </div>
    );
  }
}
Panel.defaultProps = {
  painting: false
}
export default Panel;
