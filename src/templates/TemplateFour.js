import React, { useState } from "react";

import Header from "../template-four/Header";
import Message from "../Template-Components/Message/Message";
import Gender from "../Template-Components/Gender";
import RSVP from "../Template-Components/RSVP";

import Loader from "../components/Loader";

const TemplateFour = function () {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1250);

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header />
      <Message />
      <Gender />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateFour;
