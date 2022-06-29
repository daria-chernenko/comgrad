import Route from '@ember/routing/route';
export default class IssuesShow extends Route {
  model({ issue_id }) {
    return issue_id;
  }
}
