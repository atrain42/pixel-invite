import React, { useState } from "react";

import Header from "../template-two/Header";
import Gender from "../Template-Components/Gender";
import TopGifts from "../Template-Components/TopGifts";
import Message from "../Template-Components/Message/Message";
import RSVP from "../Template-Components/RSVP";

import Loader from "../components/Loader";

const TemplateOne = function () {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1250);

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header />
      <Gender />
      <TopGifts />
      <Message />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateOne;
