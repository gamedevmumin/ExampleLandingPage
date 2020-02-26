import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__title"> Get our latest book here! </h1>
      <p className="hero__description">
        Learn how to code with our new book about webdevelopment.{" "}
      </p>
      <div className="hero__btn-container">
        <button className="btn-primary">Download now</button>
      </div>
    </div>
  );
}
