import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
import HeadBag from '../Comic/HeadBag';
class Issue extends Component {
  render(props) {
    return (
      <Comic title="Addiction" icon="☕️">
        <Panel>
          <Character type="computer-man" />
          <Character type="computer-woman" >
            <HeadBag />
          </Character>
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="So ... what is the story with the paper thing on your head?" />
          <Character 
            type="computer-woman" 
            say="I'm in my happy place ...">
            <HeadBag />
          </Character>
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="Wait a minute ... is that a ... coffee bean bag?" />
          <Character 
            type="computer-woman" 
            sound="Sniffffff!">
            <HeadBag />
          </Character>
        </Panel>
      </Comic>
    );
  }
}
export default Issue;
