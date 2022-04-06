import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
export default function(props) {
  return (
    <Form.Group inline>
      <label>Language:</label>
      <Form.Field>
        <Radio
          label='English (Ireland)'
          name='language'
          checked={props.language === 'en-ie'}
          onChange={() => props.changeLanguage('en-ie')}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='German'
          name='language'
          checked={props.language === 'de'}
          onChange={() => props.changeLanguage('de')}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='Arabic'
          name='language'
          checked={props.language === 'ar'}
          onChange={() => props.changeLanguage('ar')}
        />
      </Form.Field>
    </Form.Group>
  );
}
