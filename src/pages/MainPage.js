import React, { useState } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import PopUpForm from "../components/PopUpForm";

export default function MainPage() {
  const [isFormOpen, setOpen] = useState(false);
  const onGetItNowButtonClicked = e => {
    e.preventDefault();
    setOpen(true);
  };

  const onFormClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Hero onGetItNowButtonClicked={onGetItNowButtonClicked} />
      <Content />
      <Footer />

      <PopUpForm open={isFormOpen} onFormClose={onFormClose} />
    </>
  );
}
