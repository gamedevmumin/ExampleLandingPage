import React from "react";

import "reset.less";
import "./stylesheets/App.less";

import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
}

export default App;
