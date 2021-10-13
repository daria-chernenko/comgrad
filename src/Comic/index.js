import React from 'react';
const Comic = function(props) {
  return (
    <section className="comic">
      <h2 className="issue-title">
        {props.title}
      </h2>
      <div className="strip">
        {props.children}
      </div>
      <div className="signature">
        <a>Gradient company</a> by <a href="https:
      </div>
    </section>
  );
}
export default Comic;
