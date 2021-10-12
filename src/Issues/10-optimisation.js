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
            say="&quot;Just-released features make Awesome App Classic CC easier to use.&quot;" />
          <Character 
            type="computer-man" 
             />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="&quot;Experience faster performance on machines with 12GB RAM or more.&quot;" />
          <Character 
            type="computer-man" 
            say="Optimised?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman"
            emotion="😏" />
          <Character 
            type="computer-man" 
            say="Like saying: You can enjoy this &quot;optimised&quot; highway if you are riding Land Rover..." />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
