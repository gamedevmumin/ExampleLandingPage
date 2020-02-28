import React from "react";

import "reset.less";
import "./stylesheets/App.less";

import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero />
      <Content />
      <Footer />
    </>
  );
}

export default App;
