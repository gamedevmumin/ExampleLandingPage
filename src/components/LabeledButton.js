import React from "react";

export default function LabeledButton(props) {
  return (
    <div>
      <div className="labeled-btn-container">
        <button onClick={props.onClick} className="btn-primary">
          {props.buttonText}
        </button>
        <small>
          <a href="www.xd.pl"> {props.labelText} </a>
        </small>
      </div>
    </div>
  );
}
