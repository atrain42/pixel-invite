import React, { useEffect } from "react";

import Header from "../template-two/Header";
import Gender from "../Template-Components/Gender";
import TopGifts from "../Template-Components/TopGifts";
import Message from "../Template-Components/Message/Message";
import RSVP from "../Template-Components/RSVP";

import classes from "../template-two/TopGifts.module.css";

const TemplateOne = function ({ setIsLoading }) {
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1250);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Gender />
      <TopGifts />
      <Message />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateOne;
