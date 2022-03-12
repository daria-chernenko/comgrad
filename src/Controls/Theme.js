import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { Instagram, Web } from '../Themes';
export default function(props) {
  return (
    <Form.Group inline>
      <label>Theme:</label>
      <Form.Field>
        <Radio
          label='Web'
          name='theme'
          checked={props.theme === Web}
          onChange={() => props.changeTheme(Web)}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Instagram'
          name='theme'
          checked={props.theme === Instagram}
          onChange={() => props.changeTheme(Instagram)}
        />
      </Form.Field>
    </Form.Group>
  );
}
