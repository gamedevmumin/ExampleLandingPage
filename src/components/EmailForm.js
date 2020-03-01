import React from "react";

import EmailSenderButton from "./EmailSenderButton";

export default function EmailForm(props) {
  return (
    <>
      <h1>Get your free course now:</h1>
      <form>
        <p>
          <label htmlFor="mail-input">E-mail:</label>
          <input
            id="mail-input"
            name="to_email"
            type="email"
            className="modal__mail-input"
            onChange={props.handleEmailChange}
            value={props.email}
            required
          ></input>
        </p>
        <EmailSenderButton email={props.email} onEmailSend={props.onEmailSend}>
          Get it
        </EmailSenderButton>
      </form>
    </>
  );
}
