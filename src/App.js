import React from "react";
import emailjs from "emailjs-com";

import "reset.less";
import "./stylesheets/App.less";

import MainPage from "./pages/MainPage";

emailjs.init(process.env.REACT_APP_EMAILJS_USERID);

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
