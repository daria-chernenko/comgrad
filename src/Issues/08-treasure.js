import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Special relationship" icon="⚰️">
        <Panel>
          <Character 
            type="computer-woman" 
            say="The CEO here is special." />
          <Character 
            type="computer-man" 
            say="What do you mean?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="He is a true treasure." />
          <Character 
            type="computer-man" 
            say="Oh, that is so sweet from you." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="Just to bury him 2 feet deep..." />
          <Character 
            type="computer-man" 
            emotion="😳" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
