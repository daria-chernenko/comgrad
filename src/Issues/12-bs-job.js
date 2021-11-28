import React, { Component } from 'react';
import Comic from '../Comic';
import Character from '../Comic/Character';
import Panel from '../Comic/Panel';
class Issue extends Component {
  render() {
    return (
      <Comic title="To be sure">
        <Panel>
          <Character 
            type="computer-man" 
            say="According to this article 40% of people think that their job is useless."
          />
          <Character 
            type="computer-woman" 
            say="Good thing that we are IT."
          />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="Yeah, the stats will be different in this field..." 
          />
          <Character 
            type="computer-woman" 
            say="No, that's not what I meant."
          />
        </Panel>
        <Panel>
          <Character 
            type="computer-man"
            say="So what is it ... ?" 
            emotion="😕" 
          />
          <Character 
            type="computer-woman" 
            say="Well we *know* that our jobs are useless..."
          />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
