import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import domtoimage from 'dom-to-image'
import ReactDOM from 'react-dom'
class Comic extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.downloadComics = this.downloadComics.bind(this);
    this.state = {
      wrapperClass: 'comic'
    };
  }
  downloadComics() {
    this.setState({
      wrapperClass: 'comic zoom'
    });
    const node = this.props.children[0];
    console.log(this.refs);
    let domNode = ReactDOM.findDOMNode(this.refs[0]);
    console.log(domNode);
    const style = { 
      style: {
      } 
    };
    console.log(node);
    domtoimage.toJpeg(domNode, style).then((dataUrl) => {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
      this.setState({
        wrapperClass: 'comic'
      });
    });
  }
  render() {
    return (
      <div>
        <section className={this.state.wrapperClass} ref={this.myRef}>
          <h2 className="issue-title">
            {this.props.title}
          </h2>
          <div className="strip">
            {React.Children.map(this.props.children, (element, idx) => {
              return React.cloneElement(element, { ref: idx });
            })}
            {}
          </div>
          <div className="signature">
            <a>Gradient company</a> by <a href="https:
          </div>
        </section>
        <Button color="teal" circular icon="save" className="download" onClick={this.downloadComics} />
      </div>
    );
  }
}
export default Comic;
