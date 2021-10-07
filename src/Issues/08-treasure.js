import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Special relationship">
        <Panel>
          <Character 
            type="computer-man" 
            position="left"
            say="The CEO here is special." />
          <Character 
            type="computer-woman" 
            position="right"
            say="What do you mean?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="He is a true treasure." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="Oh, that is so sweet from you." />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="Just to bury him 2 feet deep..." />
          <Character 
            type="computer-woman" 
            position="right" 
            emotion="😳" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
