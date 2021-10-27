import React, { Component } from 'react'
import Title from './Title';
class Panel extends Component {
  render() {
    return (
      <div className="box">
        {this.props.title && 
          <Title>{this.props.title}</Title>
        }
        {this.props.children}
      </div>
    );
  }
}
export default Panel;
