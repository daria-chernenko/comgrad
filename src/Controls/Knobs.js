import React from 'react';
import { Segment, Form, TextArea, Transition } from 'semantic-ui-react';
import { Download, Zoom, Theme, Story } from '../Controls';
export default function(props) {
  return (
    <Transition visible={props.isVisible} animation='fade up' duration={500}>
      <Segment>
        <Form>
          <Zoom changeZoom={props.changeZoom} zoom={props.zoom} />
          <Theme changeTheme={props.changeTheme} theme={props.theme} />
          <Download title={props.title} components={props.components} />
        </Form>
      </Segment>
    </Transition>
  );
}
