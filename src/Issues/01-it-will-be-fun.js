import React, { Component } from 'react';
import Comic from '../Comic';
import Panel from '../Comic/Panel';
import Character from '../Comic/Character';
import Lollipop from '../Comic/Lollipop';
class Issue extends Component {
  render() {
    return (
      <div id="foo">
      <Comic title="It will be fun they said...">
        <Panel>
          <Character 
            type="computer-man" 
            say="Bring your child to work days are special."/>
          <Character type="computer-woman"  />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="I was not able to do any work for past three hours ..."/>
          <Character type="computer-woman" />
        </Panel>
        <Panel>
          <Character 
            type="computer-man" 
            say="On the other hand I got a free lollipop!">
            <Lollipop />
          </Character>
          <Character type="computer-woman" />
        </Panel>
      </Comic>
      </div>
    );
  }
}
export default Issue;
