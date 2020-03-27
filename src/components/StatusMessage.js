import React from "react";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function StatusMessage(props) {
  return (
    <>
      {props.success ? (
        <>
          <FaCheckCircle style={{ color: "green" }} /> {props.successMessage}
        </>
      ) : (
        <>
          <FaTimesCircle style={{ color: "red" }} /> {props.failureMessage}
        </>
      )}
    </>
  );
}
