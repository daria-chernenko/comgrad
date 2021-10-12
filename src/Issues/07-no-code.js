import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="The best code">
        <Panel>
          <Character 
            type="computer-woman" 
            say="<delete><delete><delete><delete><delete><delete><delete><delete><delete><delete><delete>" />
          <Character 
            type="computer-man" 
            say="What are you doing?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say="<delete><delete> Coding according to the best practices. <delete><delete><delete>" />
          <Character 
            type="computer-man" 
            say="What practice is this?" />
        </Panel>
        <Panel>
          <Character 
            type="computer-woman" 
            say='"The best code is no code."' />
          <Character 
            type="computer-man" 
            emotion="😆" />
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
