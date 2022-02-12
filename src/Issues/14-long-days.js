import React, { Component } from 'react';
import Comic from '../Comic';
import Character from '../Comic/Character';
import Panel from '../Comic/Panel';
class Issue extends Component {
  render() {
    return (
      <Comic title="Long days" icon="📅">
        <Panel>
          <Character 
            type="computer-man" 
            bubbleSizing="double"
            say="The CEO was very angry because last month, there were 10% fewer trial sign-ups compared to our three month average."
          />
          <Character 
            type="computer-woman" 
          />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="So we were thinking, doing analysis, comparing data..." 
          />
          <Character 
            type="computer-woman" 
            say="Did you find anything?"
          />
        </Panel>
        <Panel>
          <Character 
            type="computer-man"
            say="Turns out that there are 3 days fewer in February than in previous two months..."
          />
          <Character 
            type="computer-woman" 
            emotion="🤦‍"
          />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
