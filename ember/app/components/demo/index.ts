import Component from '@glimmer/component';
import { compileHBS } from 'ember-repl';
import Wrapper from '../wrapper';
import Panel from '../panel';
import Character from '../character';
import Lollipop from '../lollipop';
interface DemoArgs {}
export default class Demo extends Component<DemoArgs> {
  scope = {
    Wrapper,
    Panel,
    Character,
    Lollipop,
  };
  myComponent = compileHBS(
    `
    <Wrapper @title="It will be fun they said..." @icon="🍭">
      <Panel>
        <Character
          @type="computer-man"
          @say="Bring your child to work days are special."
        />
        <Character @type="computer-woman"  />
      </Panel>
      <Panel>
        <Character
          @type="computer-man"
          @say="I was not able to do any work for past three hours ..."
        />
        <Character @type="computer-woman" />
    </Panel>
      <Panel>
        <Character
          @type="computer-man"
          @say="On the other hand I got a free lollipop!"
        >
        <Lollipop />
        </Character>
        <Character
          @type="computer-woman"
          @emotion="😂"
        />
      </Panel>
    </Wrapper>
    `,
    { scope: this.scope }
  );
}
