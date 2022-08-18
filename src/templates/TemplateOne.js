import React from "react";

import Header from "../Template-Components/Header/Header";
import Message from "../Template-Components/Message/Message";
import TopGifts from "../Template-Components/TopGifts";
import RSVP from "../Template-Components/RSVP";

const TemplateOne = function () {
  return (
    <React.Fragment>
      <Header />
      <Message />
      <TopGifts />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateOne;
