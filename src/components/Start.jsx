import React from "react";

function Start(props) {
  return (
    <div className="start-page">
      <h1>Quizzical</h1>
      <p>Test Your Knowledge In Sports.</p>
      <button className="start-btn" onClick={props.start}>
        Start
      </button>
    </div>
  );
}

export default Start;
