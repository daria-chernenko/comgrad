import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <div>
      <Comic title="Unused brains">
        <Panel>
          <Character 
            type="computer-woman" 
            say="Don't be scared." />
          <Character 
            type="zombie-man" 
            say="Feels so empty..." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="He doesn't bite." />
          <Character 
            type="zombie-man" 
            say="Cannot find anything..." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="He just can't find any reasonable work to do." />
          <Character 
            type="zombie-man" 
            say="Tickeeeets..." />
        </Panel>
      </Comic>
      <Comic title="Unused brains">
        <Panel>
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
      </div>
    );
  }
}
export default Issue;
