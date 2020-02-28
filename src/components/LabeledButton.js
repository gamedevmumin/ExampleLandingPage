import React from "react";

export default function LabeledButton(props) {
  return (
    <div>
      <div className="labeled-btn-container">
        <button className="btn-primary">{props.buttonText}</button>
        <small>
          <a href="#"> {props.labelText} </a>
        </small>
      </div>
    </div>
  );
}
