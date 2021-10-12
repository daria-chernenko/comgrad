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
            type="computer-woman" 
            say="Recently I took philosophy classes." />
          <Character 
            type="computer-man" 
            say="Oh that is cool." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="There is a lot IT can learn from this discipline." />
          <Character 
            type="computer-man" 
            say="Example?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="If a CI tests fails and there is nobody to take action, did the test really fail?" />
          <Character 
            type="computer-man" 
            emotion="🤔" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
