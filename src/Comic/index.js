import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import domtoimage from 'dom-to-image'
import ReactDOM from 'react-dom'
class Comic extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.signatureRef = React.createRef();
    this.downloadComics = this.downloadComics.bind(this);
    this.state = {
      wrapperClass: 'comic'
    };
  }
  downloadComics() {
    this.setState({
      wrapperClass: 'comic zoom'
    });
    const style = { 
      style: {
      } 
    };
    let components = [];
    components.push(this.titleRef.current);
    Object.keys(this.refs).forEach(key => {
      let panel = ReactDOM.findDOMNode(this.refs[key]);
      components.push(panel);
    });
    components.push(this.signatureRef.current);
    let downloads = [];
    components.map((component, index) => {
      let promise = domtoimage.toJpeg(component, style);
      downloads.push(promise);
      promise.then((dataUrl) => {
        var link = document.createElement('a');
        link.download = `${this.props.title}-${index}.jpg`;
        link.href = dataUrl;
        link.click();
      });
    });
    Promise.all(downloads).then(() => {
      this.setState({
        wrapperClass: 'comic'
      });
    });
  }
  render() {
    return (
      <div className="zoomable">
        <section className={this.state.wrapperClass}>
          <h3 className="issue-title" ref={this.titleRef}>
            {this.props.icon &&
              <span>{this.props.icon}</span>
            }
            {this.props.title}
          </h3>
          <div className="strip">
            {React.Children.map(this.props.children, (element, idx) => {
              return React.cloneElement(element, { ref: idx, index: idx });
            })}
          </div>
          <div className="signature" ref={this.signatureRef}>
            <a>Gradient company</a> by <a href="https:
          </div>
        </section>
        <Button color="teal" circular icon="save" className="download-button" onClick={this.downloadComics} />
      </div>
    );
  }
}
export default Comic;
