import styles from './Themed.module.css';
import classNames from 'classnames';
import { Segment, Form, Radio } from 'semantic-ui-react';
import { Download, Zoom, Theme, Story } from '../Controls';
import React, { Component } from 'react';
import Edit from './Edit';
import { Web } from '../Themes';
import ReactDOM from 'react-dom'
class Wrapper extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state = {
      theme: Web,
      isEditting: false,
      zoom: '10px',
      story: props.story
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
  updateStory = (val) => {
    this.setState({story: val});
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
    let editForm = '';
    if(this.state.isEditting) {
      editForm = <Segment>
        <Form>
          <Zoom changeZoom={this.changeZoom} zoom={this.state.zoom} />
          <Theme changeTheme={this.changeTheme} theme={this.state.theme} />
          <Story story={this.state.story} updateStory={this.updateStory} />
          <Download title={this.props.title} components={this.state.components} />
        </Form>
      </Segment>
    };
    return (
      <div>
        <Edit clicked={this.toggleEdit}/>
        {editForm}
        <section style={{fontSize: this.state.zoom}} className={classNames(styles.comic, this.state.theme.layout)}>
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
      <div>
        <p className={styles.evenboxinner}>
          {}
        </p>
      </div>
      </div>
    );
  }
}
export default Wrapper;
