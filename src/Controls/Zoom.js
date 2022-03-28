import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
const Zoom = function(props) {
  return (
    <Form.Group inline>
      <label>Zoom:</label>
      <Form.Field>
        <Radio
          label='5px'
          name='sizeGroup'
          value='5px'
          checked={props.zoom === '5px'}
          onChange={() => props.changeZoom('5px')}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='10px'
          name='sizeGroup'
          value='10px'
          checked={props.zoom === '10px'}
          onChange={() => props.changeZoom('10px')}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label='20px'
          name='sizeGroup'
          value='20px'
          checked={props.zoom === '20px'}
          onChange={() => props.changeZoom('20px')}
        />
      </Form.Field>
    </Form.Group>
  );
}
export default Zoom;
