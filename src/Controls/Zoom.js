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
          label='38px'
          name='sizeGroup'
          value='38px'
          checked={props.zoom === '38px'}
          onChange={() => props.changeZoom('38px')}
        />
      </Form.Field>
    </Form.Group>
  );
}
export default Zoom;
