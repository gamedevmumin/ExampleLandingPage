import React from "react";
import { sendEmail } from "../functions/EmailSending";

export default function EmailSenderButton(props) {
  const handleClick = async e => {
    e.preventDefault();
    try {
      const response = await sendEmail(
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        props.email,
        process.env.REACT_APP_EMAILJS_USERID
      );
      const isEmailSent = response.status === 200;
      props.onEmailSend(true, !isEmailSent);
    } catch (error) {
      console.log(error);
      props.onEmailSend(true, true);
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {props.children}
    </button>
  );
}
