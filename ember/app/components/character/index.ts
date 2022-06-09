import Component from '@glimmer/component';
interface CharacterArgs {
  bubbleSizing: string;
  type: 'computer-man' | 'computer-woman' | 'zombie-man';
}
export default class Character extends Component<CharacterArgs> {
  get emoji() {
    let types = {
      'computer-man': '👨‍💻',
      'computer-woman': '👩‍💻',
      'zombie-man': '🧟‍',
    };
    return types[this.args.type];
  }
  get sayClasses() {
    if (this.args.bubbleSizing === 'double') {
      return 'col-span-2';
    }
    return '';
  }
}
