import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import domtoimage from 'dom-to-image';
class Comic extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.downloadComics = this.downloadComics.bind(this);
  }
  downloadComics() {
    const node = this.myRef.current;
    domtoimage.toJpeg(node, { quality: 10 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }
  render() {
    return (
      <div>
        <section className="comic" ref={this.myRef}>
          <h2 className="issue-title">
            {this.props.title}
          </h2>
          <div className="strip">
            {this.props.children}
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
