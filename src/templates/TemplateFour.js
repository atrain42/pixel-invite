import React, { useEffect } from "react";

import Header from "../template-four/Header";
import Message from "../Template-Components/Message/Message";
import Gender from "../template-two/Gender";
import RSVP from "../Template-Components/RSVP";

import classes from "../template-two/TopGifts.module.css";

const TemplateFour = function ({ setIsLoading }) {
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1250);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Message />
      <Gender />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateFour;
