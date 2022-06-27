import Component from '@glimmer/component';
interface PaginationArgs {
  maxPages: number;
}
export default class Pagination extends Component<PaginationArgs> {
  get options() {
    return [...Array(this.args.maxPages).keys()];
  }
}
