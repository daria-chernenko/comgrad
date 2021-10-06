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
            type="zombie-man" 
            position="left"
            say="Feels so empty..." />
          <Character 
            type="computer-woman" 
            position="right"
            say="Don't be scared." />
        </Panel>
        <Panel>
          <Character 
            type="zombie-man" 
            position="left" 
            say="Cannot find anything..." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="He doesn't bite." />
        </Panel>
        <Panel>
          <Character 
            type="zombie-man" 
            position="left" 
            say="Tickeeeets..." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="He just can't find any reasonable work to do." />
        </Panel>
      </Comic>
      <Comic title="Unused brains">
        <Panel>
          <Character 
            type="zombie-man" 
            position="left"
            say="Feels so empty..." />
          <Character 
            type="computer-woman" 
            position="right"
            say="Don't worry." />
        </Panel>
        <Panel>
          <Character 
            type="zombie-man" 
            position="left" 
            say="Cannot find anything..." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="He is not harmful. Just hungry." />
        </Panel>
        <Panel>
          <Character 
            type="zombie-man" 
            position="left" 
            say="Tickeeeets..." />
          <Character 
            type="computer-woman" 
            position="right" 
            say="For some work to do." />
        </Panel>
      </Comic>
      </div>
    );
  }
}
export default Issue;
