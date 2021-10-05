import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Titles">
        <Panel>
          <Character 
            type="computer-man" 
            position="left"
            emotion="✉️"
            say="Subject: Dear Lead Senior Regional Principal Dynamic Solutions ..." />
          <Character 
            type="computer-woman" 
            position="right" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="... Executive Associate Operations Chief Tactics Manager, John Smith." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="Are you trying to reach the president of the universe?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="Just the guy next door. He has been here for a while and went through few promotions." />
          <Character type="computer-woman" position="right" emotion="😄" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
