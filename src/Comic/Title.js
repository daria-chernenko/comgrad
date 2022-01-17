import React from 'react';
import styles from './Title.module.css';
const Title = function(props) {
  return (
    <div>
      <p className={styles.evenboxinner}>
        {props.children}
      </p>
    </div>
  );
}
export default Title;
