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
            position="left"
            say="Don't be scared." />
          <Character 
            type="zombie-man" 
            position="right"
            say="Feels so empty..." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            position="left" 
            say="He doesn't bite." />
          <Character 
            type="zombie-man" 
            position="right" 
            say="Cannot find anything..." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            position="left" 
            say="He just can't find any reasonable work to do." />
          <Character 
            type="zombie-man" 
            position="right" 
            say="Tickeeeets..." />
        </Panel>
      </Comic>
      <Comic title="Unused brains">
        <Panel>
          <Character 
            type="computer-woman" 
            position="left"
            say="Don't worry." />
          <Character 
            type="zombie-man" 
            position="right"
            say="Feels so empty. Cannot find anything..." />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            position="left" 
            say="He is not harmful. Just hungry." />
          <Character 
            type="zombie-man" 
            position="right" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            position="left" 
            say="For some work to do." />
          <Character 
            type="zombie-man" 
            position="right" 
            say="Tickeeeets..." />
        </Panel>
      </Comic>
      </div>
    );
  }
}
export default Issue;
