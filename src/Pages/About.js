import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
class Episodes extends Component {
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <h1>About</h1>
            <h2>Motivation</h2>
            <p>
              Over time I collected a lot of stories from my IT friends. Jokes from the environment of big corporates and/or startups. I thought that it would be neat to collect them as a comic. Unfortunately I haven't found easy way to create and download for publishing my ideas (for free). So why not create your own?
            </p>
            <p>This is a simple example of React in action - a learning project. Very nice showcase of latest & greatest CSS features.</p>
            <p>This was not obvious from the start, but I'm creating first ever fully accessible comics. It is possible to do virtually infinite zoom without losing quality. Text readers works very well. And there is possibility to enable high contrast mode as well. Did you know that it's quite a pain to translate comics? Well, over here it's quite easy.</p>
            <p>It is quite challenging to create story with the limited set of tools - CSS &amp; some emoji. There are emojis expressing feelings via emojis. How deep can we go?</p>
            <p>I wanted to create first ever comics that accepts pull requests. See a spelling error? Want to address discriminative language? Have idea for new episode? Comics is broken on your browser? Raisconsoe a PR!</p>
            <h3>Disclaimer</h3>
            <p>
              I tried my best to anonymize the sources of my stories. Some of them are even made up as a result of a "pub talk". If you still feel like you can recognize the source, please tell me.
              There is no intent to offend anybody. Just for the laughs.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default Episodes
