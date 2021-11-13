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
            type="computer-woman" />
          <Character 
            position="right"
            type="computer-man" 
            say="&quot;Just-released features make Awesome App Classic CC easier to use.&quot;"
             />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" />
          <Character 
            position="right"
            type="computer-man" 
            say="&quot;Experience faster performance on machines with 12GB RAM or more.&quot;" 
            />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman"
            bubbleSizing="double"
            say="Yeah right, that's like saying: You can enjoy this &quot;optimised&quot; highway if you are riding a Land Rover..." 
            emotion="😏" />
          <Character 
            position="right"
            type="computer-man" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
