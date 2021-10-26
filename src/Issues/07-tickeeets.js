import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Paradox of SCRUM">
        <Panel title="End of sprint">
          <Character 
            type="computer-woman" 
            say="Don't worry." />
          <Character 
            type="zombie-man" 
            say="Feels so empty. Cannot find anything..." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="He is not harmful. Just hungry." />
          <Character 
            type="zombie-man" 
             />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="For some work to do." />
          <Character 
            type="zombie-man" 
            say="Tickeeeets..." />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
