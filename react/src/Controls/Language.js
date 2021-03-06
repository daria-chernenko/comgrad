import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
export default function(props) {
  return (
    <Form.Group inline>
      <label>Language:</label>
      <Form.Field>
        <Radio
          label='English'
          name='language'
          checked={props.language === 'en'}
          onChange={() => props.changeLanguage('en')}
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
          label='Spanish'
          name='language'
          checked={props.language === 'es'}
          onChange={() => props.changeLanguage('es')}
        />
      </Form.Field>
    </Form.Group>
  );
}
