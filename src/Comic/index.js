import React, { Component } from 'react'
import domtoimage from 'dom-to-image'
import Download from './Download';
import ReactDOM from 'react-dom'
import styles from './index.module.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import classNames from 'classnames';
class Comic extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.signatureRef = React.createRef();
    this.downloadComics = this.downloadComics.bind(this);
    this.strips = [React.createRef(), React.createRef(), React.createRef()];
    this.state = {
      zoomClass: ''
    };
  }
  downloadComics() {
    this.setState({
      zoomClass: styles.zoomed,
    });
    const style = { 
      style: {
      } 
    };
    let components = [];
    components.push(this.titleRef.current);
    Object.keys(this.strips).forEach(key => {
      let panel = ReactDOM.findDOMNode(this.strips[key].current);
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
        zoomClass: ''
      });
    });
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, zoom}) => (
          <div className={styles.wrapper}>
            <section style={{fontSize: zoom}} className={classNames(styles.comic, styles.zoomable, this.state.zoomClass, styles[theme])}>
              <div className={styles.header} ref={this.titleRef}>
                <h3 className={styles.title}>
                  {this.props.icon &&
                    <span className={styles.favicon}>{this.props.icon}</span>
                  }
                  {this.props.title}
                </h3>
              </div>
              {React.Children.map(this.props.children, (element, idx) => {
                return React.cloneElement(element, { ref: this.strips[idx], index: idx });
              })}
              <div className={styles.signature} ref={this.signatureRef}>
                <a href="https:
              </div>
            </section>
            <Download downloadComics={this.downloadComics} />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Comic;
