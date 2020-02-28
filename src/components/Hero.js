import React from "react";
import LabeledButton from "./LabeledButton";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content-container">
        <div>
          <h1 className="hero__content-container__title">
            Get our latest course here!
          </h1>
          <p className="hero__content-container__description">
            Learn how to code with our new course about webdevelopment.
          </p>
          <LabeledButton labelText="Privacy Policy" buttonText="Download now" />
        </div>
        <div className="hero__content-container__image"></div>
      </div>
    </div>
  );
}
