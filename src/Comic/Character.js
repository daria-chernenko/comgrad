import React from 'react';
import styles from './Character.module.css';
var classNames = require('classnames');
const Character = function(props) {
  let faceClassName = `character-${props.position}`;
  let bubbleClassName = classNames(
    styles.bubble,
    styles[`${props.position}Bubble`],
    styles[`${props.bubbleSizing}Bubble`]
  );
  let types = {
    'computer-man': '👨‍💻',
    'computer-woman': '👩‍💻',
    'zombie-man': '🧟‍'
  }
  let face = types[props.type];
  return (
    <React.Fragment>
      <div className={faceClassName}>
        {props.sound &&
          <p className={styles.sound}>
            {props.sound}
          </p>
        }
        <span className="character">
          {props.children}
          <span className="face">
            {face}
          </span>
          {props.emotion &&
            <span className={styles.emotion}>{props.emotion}</span>
          }
        </span>
      </div>
      {props.say &&
        <p className={bubbleClassName}>
          {props.say}
        </p>
      }
    </React.Fragment>
  );
}
Character.defaultProps = {
  position: 'auto',
  type: 'computer-woman',
  bubbleSizing: 'single'
}
export default Character;
