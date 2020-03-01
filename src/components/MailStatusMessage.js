import React from "react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function MailStatusMessage(props) {
  return (
    <>
      {props.success ? (
        <>
          <FaCheckCircle style={{ color: "green" }} /> You've received an email!
        </>
      ) : (
        <>
          <FaTimesCircle style={{ color: "red" }} /> An error occurred
        </>
      )}
    </>
  );
}
