import React from "react";

import Header from "../template-three/Header";
import Message from "../Template-Components/Message/Message";
import RSVP from "../Template-Components/RSVP";

const TemplateThree = function () {
  return (
    <React.Fragment>
      <Header />
      <Message />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateThree;
