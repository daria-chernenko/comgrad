import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Download.module.css';
export default function(props) {
  return (
    <Button color="teal" circular icon="save" className={styles.download} onClick={props.downloadComics} />
  );
}
