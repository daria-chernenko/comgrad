import React, { Component } from 'react';
import { released } from '../Issues';
import Comic from '../Comic';
class RandomComics extends Component {
  state = {}
  constructor(props) {
    super(props);
    const randomComic = released[Math.floor(Math.random()*released.length)];
    this.state = {
      randomComic: randomComic
    };
  }
  render() {
    return(
      <Comic story={this.state.randomComic} />
    );
  }
}
export default RandomComics;
