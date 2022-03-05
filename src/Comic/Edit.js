import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Edit.module.css';
const Edit = function(props) {
  return (
    <Button circular icon="bars" className={styles.button} onClick={props.clicked}/>
  );
}
export default Edit;
