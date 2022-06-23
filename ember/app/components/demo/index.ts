import Component from '@glimmer/component';
import { compileHBS } from 'ember-repl';
import Wrapper from '../wrapper';
import Panel from '../panel';
import Character from '../character';
import Lollipop from '../lollipop';
import Issues from '../issues';
import { tracked } from '@glimmer/tracking';
interface DemoArgs {}
export default class Demo extends Component<DemoArgs> {
  @tracked issueNumber = 0;
  get scope() {
    return {
      Wrapper,
      Panel,
      Character,
      Lollipop,
      Issue: Issues[this.issueNumber],
    };
  }
  myComponent = compileHBS('<Issue /> ', {
    scope: this.scope,
  });
}
