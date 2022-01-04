import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Titles" icon="🎩">
        <Panel>
          <Character 
            type="computer-man" 
            emotion="✉️"
            say="Subject: Dear Lead Senior Regional Principal Dynamic Solutions ..." />
          <Character 
            type="computer-woman" 
             />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="... Executive Associate Operations Chief Tactics Manager, John Smith." />
          <Character 
            type="computer-woman" 
            say="Are you trying to reach the president of the universe?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="Nope, but he has been here for a while and went through few promotions." />
          <Character type="computer-woman"  emotion="😄" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
