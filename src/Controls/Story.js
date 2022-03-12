import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';
export default function(props) {
  return (
    <Form.Field
      label="Source code:"
      control={TextArea}
      rows={2} 
      value={props.story} 
      onChange={(e, { value }) => props.updateStory(value)} 
    />
  );
}
