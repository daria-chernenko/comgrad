import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Optimisation">
        <Panel>
          <Character 
            type="computer-woman" 
            position="left"
            say="&quot;Just-released features make Awesome App Classic CC easier to use.&quot;" />
          <Character 
            type="computer-man" 
            position="right" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            position="left" 
            say="&quot;Experience faster performance on machines with 12GB RAM or more.&quot;" />
          <Character 
            type="computer-man" 
            position="right" 
            say="Optimised?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman"
            emotion="😏"
            position="left" />
          <Character 
            type="computer-man" 
            position="right" 
            say="Like saying: You can enjoy this &quot;optimised&quot; highway if you are riding Land Rover..." />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
