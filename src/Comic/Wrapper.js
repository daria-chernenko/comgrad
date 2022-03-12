import React from 'react';
import styles from './Title.module.css';
import classNames from 'classnames';
export default function(props) {
  console.log(props);
  return (
    <div>
    <section style={{fontSize: props.zoom}} className={classNames(styles.comic, props.theme.layout)}>
          <div className={props.theme.header} ref={this.titleRef}>
            <h3 className={props.theme.title}>
              {this.props.icon &&
                <span className={styles.favicon} ref={this.iconRef}>{this.props.icon}</span>
              }
              {this.props.title}
            </h3>
          </div>
          {React.Children.map(this.props.children, (element, idx) => {
            return React.cloneElement(element, { ref: this.strips[idx], index: idx });
          })}
          <div className={props.theme.signature} ref={this.signatureRef}>
            <a href="https:
          </div>
        </section>
    <div>
      <p className={styles.evenboxinner}>
        {props.children}
      </p>
    </div>
    </div>
  );
}
