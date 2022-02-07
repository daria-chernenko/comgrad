import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render() {
    return (
      <Comic title="Company strategy" icon="🦍">
        <Panel>
          <Character 
            type="computer-man" 
            say="Our company strategy is like putting an ape to cockpit of F1..." />
          <Character 
            type="computer-woman" 
            emotion="😕" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="Be surprised that it did not win the grand prize..." />
          <Character 
            type="computer-woman" 
            emotion="🙁" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man"
            say="And blame people in pit-stop that they used the wrong tyres." />
          <Character 
            type="computer-woman" 
            emotion="☹️" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
