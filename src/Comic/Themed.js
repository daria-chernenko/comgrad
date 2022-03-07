import React, { Component } from 'react'
import domtoimage from 'dom-to-image'
import Download from './Download';
import Edit from './Edit';
import ReactDOM from 'react-dom'
import styles from './Themed.module.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import classNames from 'classnames';
import { Web } from '../Themes';
import { Segment, Form, Radio } from 'semantic-ui-react'
import { Zoom, Theme } from '../Controls';
import instagram from '../Themes/Instagram.module.css';
class Themed extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      theme: Web,
      isEditting: false,
      zoom: '10px'
    };
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
  toggleEdit = () => {
    this.setState({isEditting: !this.state.isEditting})
  }
  changeZoom = (val) => {
    this.setState({zoom: val});
  }
  changeTheme = (val) => {
    this.setState({theme: val});
  }
  render() {
    let content;
    if(this.state.isEditting) {
      content = <Segment>
        <Form>
          <Zoom changeZoom={this.changeZoom} zoom={this.state.zoom} />
          <Theme changeTheme={this.changeTheme} theme={this.state.theme} />
        </Form>
      </Segment>
    } else {
      content = <section style={{fontSize: this.state.zoom}} className={classNames(styles.comic, this.state.theme.layout)}>
          <div className={this.state.theme.header} ref={this.titleRef}>
            <h3 className={this.state.theme.title}>
              {this.props.icon &&
                <span className={styles.favicon} ref={this.iconRef}>{this.props.icon}</span>
              }
              {this.props.title}
            </h3>
          </div>
          {React.Children.map(this.props.children, (element, idx) => {
            return React.cloneElement(element, { ref: this.strips[idx], index: idx });
          })}
          <div className={this.state.theme.signature} ref={this.signatureRef}>
            <a href="https:
          </div>
        </section>
    }
    return (
      <div className={styles.wrapper}>
        {content}
        <Edit clicked={this.toggleEdit}/>
      </div>
    );
  }
}
export default Themed;
