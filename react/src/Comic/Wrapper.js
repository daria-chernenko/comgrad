import styles from './Wrapper.module.css';
import classNames from 'classnames';
import { Button, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';
import { Web } from '../Themes';
import ReactDOM from 'react-dom'
import { Knobs } from '../Controls';
class Wrapper extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      theme: Web,
      isEditting: false,
      language: 'en',
      zoom: '10px',
    };
    this.titleRef = React.createRef();
    this.iconRef = React.createRef();
    this.signatureRef = React.createRef();
    this.strips = [React.createRef(), React.createRef(), React.createRef()];
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
  changeLanguage = (val) => {
    this.setState({language: val});
  }
  componentDidMount() {
    let components = [];
    components.push(this.titleRef.current);
    components.push(this.iconRef.current);
    Object.keys(this.strips).forEach(key => {
      let panel = ReactDOM.findDOMNode(this.strips[key].current);
      components.push(panel);
    });
    components.push(this.signatureRef.current);
    this.setState({components: components});
  }
  render() {
    let i = 0;
    return (
      <React.Fragment>
        <Knobs 
          isVisible={this.state.isEditting} 
          language={this.state.language}
          changeLanguage={this.changeLanguage}
          changeZoom={this.changeZoom} 
          changeTheme={this.changeTheme} 
          zoom={this.state.zoom} 
          theme={this.state.theme} 
          title={this.props.title} 
          components={this.state.components} 
        />
        <Button circular size="mini" icon="wrench" color="teal" className={styles.toggleEdit} onClick={this.toggleEdit}/>
        <Segment style={{fontSize: this.state.zoom}} className={classNames(styles.comic, this.state.theme.layout)} lang={this.state.language}>
          <div className={this.state.theme.header} ref={this.titleRef}>
            <h3 className={this.state.theme.title}>
              {this.props.icon &&
                <span className={styles.favicon} ref={this.iconRef}>{this.props.icon}</span>
              }
              {this.props.title}
            </h3>
          </div>
          {React.Children.map(this.props.children, (element, idx) => {
            if (typeof element.props.children !== 'string') {
              let ret = React.cloneElement(element, { ref: this.strips[i], index: i });
              i++;
              return ret;
            }
          })}
          <div className={this.state.theme.signature} ref={this.signatureRef}>
            <a href="https:
          </div>
        </Segment>
      </React.Fragment>
    );
  }
}
export default Wrapper;
