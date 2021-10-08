import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Failing tests">
        <Panel>
          <Character 
            type="computer-man" 
            position="left"
            say="Recently I took philosophy classes." />
          <Character 
            type="computer-woman" 
            position="right"
            say="Oh that is cool." />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="I learned a lot of wisdom." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="Example?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            position="left" 
            say="If a CI tests fails and there is nobody to take action, did the test really fail?" />
          <Character 
            type="computer-woman" 
            position="right" 
            emotion="🤔" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
