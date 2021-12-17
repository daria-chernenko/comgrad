import React from 'react';
const Character = function(props) {
  let faceClassName = `character-${props.position}`;
  let bubbleClassName = `bubble bubble-${props.position} bubble-${props.bubbleSizing}`;
  let soundClassName = `sound sound-${props.position}`;
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
          <p className={soundClassName}>
            {props.sound}
          </p>
        }
        <span className="character">
          {props.children}
          <span className="face">
            {face}
          </span>
          {props.emotion &&
            <span className="emotion">{props.emotion}</span>
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
