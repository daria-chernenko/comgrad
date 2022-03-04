import React, { Component } from 'react'
import domtoimage from 'dom-to-image'
import Download from './Download';
import ReactDOM from 'react-dom'
import styles from './Themed.module.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import classNames from 'classnames';
import instagram from '../Themes/Instagram.module.css';
class Themed extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.iconRef = React.createRef();
    this.signatureRef = React.createRef();
    this.downloadComics = this.downloadComics.bind(this);
    this.strips = [React.createRef(), React.createRef(), React.createRef()];
  }
  downloadComics() {
    this.props.changeZoom('38px');
    this.props.changeTheme(instagram);
    let components = [];
    components.push(this.titleRef.current);
    components.push(this.iconRef.current);
    Object.keys(this.strips).forEach(key => {
      let panel = ReactDOM.findDOMNode(this.strips[key].current);
      components.push(panel);
    });
    components.push(this.signatureRef.current);
    let downloads = [];
    components.map((component, index) => {
      let promise = domtoimage.toJpeg(component);
      downloads.push(promise);
      promise.then((dataUrl) => {
        var link = document.createElement('a');
        link.download = `${this.props.title}-${index}.jpg`;
        link.href = dataUrl;
        link.click();
      });
    });
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <section style={{fontSize: this.props.zoom}} className={classNames(styles.comic, this.props.theme.layout)}>
          <div className={this.props.theme.header} ref={this.titleRef}>
            <h3 className={this.props.theme.title}>
              {this.props.icon &&
                <span className={styles.favicon} ref={this.iconRef}>{this.props.icon}</span>
              }
              {this.props.title}
            </h3>
          </div>
          {React.Children.map(this.props.children, (element, idx) => {
            return React.cloneElement(element, { ref: this.strips[idx], index: idx });
          })}
          <div className={this.props.theme.signature} ref={this.signatureRef}>
            <a href="https:
          </div>
        </section>
        <Download downloadComics={this.downloadComics} />
      </div>
    );
  }
}
export default Themed;
