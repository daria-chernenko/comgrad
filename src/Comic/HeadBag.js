import React from 'react';
import styles from './HeadBag.module.css';
const HeadBag = function(props) {
  return (
    <div className={styles.headbag}>
      <div className={styles.sticker}>
        <p>Random coffee product</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ...</p>
      </div>
    </div>
  );
}
export default HeadBag;
