import React, { useState } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";

export default function MainPage() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const onGetItNowButtonClicked = e => {
    e.preventDefault();
    setIsPopUpOpen(true);
  };

  const onPopUpClose = () => {
    setIsPopUpOpen(false);
  };
  return (
    <>
      <Hero onGetItNowButtonClicked={onGetItNowButtonClicked} />
      <Content />
      <Footer />

      <PopUp open={isPopUpOpen} onPopUpClose={onPopUpClose} />
    </>
  );
}
