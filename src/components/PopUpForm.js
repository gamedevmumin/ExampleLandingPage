import React from "react";
import Popup from "reactjs-popup";

import "../stylesheets/App.less";

export default function PopUpForm(props) {
  return (
    <Popup
      modal
      open={props.open}
      closeOnDocumentClick
      onClose={props.onFormClose}
    >
      {close => (
        <>
          <div className="modal">
            <h1>Get your free course now:</h1>
            <form>
              <p>
                <label for="mail-input">E-mail:</label>
                <input
                  id="mail-input"
                  type="text"
                  className="modal__mail-input"
                  required
                ></input>
              </p>

              <button type="submit" className="btn">
                Get course
              </button>
            </form>
          </div>
        </>
      )}
    </Popup>
  );
}
