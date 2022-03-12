import React, { Component } from 'react';
import Edit from './Edit';
import ReactDOM from 'react-dom'
import styles from './Themed.module.css';
import { Web } from '../Themes';
import { Segment, Form, Radio } from 'semantic-ui-react';
import { Download, Zoom, Theme, Story } from '../Controls';
import JsxParser from 'react-jsx-parser';
import Lollipop from './Lollipop';
import { Components } from './';
class Themed extends Component {
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
    let foo = <JsxParser
          components={Components}
          jsx={this.state.story}
        />;
    let bar = React.Children.map(foo, (element, idx) => {
      console.log('before: ', element);
      let ret =  React.cloneElement(element, {theme: this.state.theme, zoom: this.state.zoom});
      console.log('after: ', ret);
      return ret;
    })[0];
    console.log(bar);
    return (
      <div className={styles.wrapper}>
        {editForm}
        {bar}
        <Edit clicked={this.toggleEdit}/>
      </div>
    );
  }
}
export default Themed;
