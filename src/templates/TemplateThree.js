import React, { useState } from "react";

import Header from "../template-three/Header";
import Message from "../Template-Components/Message/Message";
import RSVP from "../Template-Components/RSVP";

import Loader from "../components/Loader";

const TemplateThree = function () {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1250);

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header />
      <Message />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateThree;
