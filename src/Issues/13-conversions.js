import React, { Component } from 'react';
import Comic from '../Comic';
import Character from '../Comic/Character';
import Panel from '../Comic/Panel';
class Issue extends Component {
  render() {
    return (
      <Comic title="Conversions">
        <Panel>
          <Character 
            type="computer-man" 
            say="According to this analytics, from thousand people on our website..."
          />
          <Character 
            type="computer-woman" 
          />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="There are only 5 customers ..." 
          />
          <Character 
            type="computer-woman" 
            say="So what?"
          />
        </Panel>
        <Panel>
          <Character 
            type="computer-man"
            say="That's not too much."
          />
          <Character 
            type="computer-woman" 
            say='Even "enlarge your penis" campaigns have better conversion ratio.'
          />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
