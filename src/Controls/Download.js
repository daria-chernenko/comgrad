import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import styles from './Download.module.css';
import domtoimage from 'dom-to-image'
class Download extends Component {
  downloadComics = () => {
    let downloads = [];
    this.props.components.map((component, index) => {
      let promise = domtoimage.toJpeg(component);
      downloads.push(promise);
      promise.then((dataUrl) => {
        var link = document.createElement('a');
        link.download = `${this.props.title}-${index}.jpg`;
        link.href = dataUrl;
        link.click();
      });
    });
  }
  render() {
    return (
      <Button className={styles.download} onClick={this.downloadComics}>
        Download
      </Button>
    );
  }
}
export default Download;
