import React from 'react';
import { Segment, Form, TextArea, Transition } from 'semantic-ui-react';
export default function(props) {
  return (
    <Transition visible={props.isVisible} animation='swing down' duration={500}>
      <Segment color="pink">
        <Form>
          <Form.Field
            label="Source code:"
            control={TextArea}
            rows={10}
            value={props.story}
            onChange={(e, { value }) => props.updateStory(value)}
          />
        </Form>
      </Segment>
    </Transition>
  );
}
