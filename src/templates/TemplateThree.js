import React, { useEffect } from "react";

import Header from "../template-three/Header";
import Message from "../Template-Components/Message/Message";
import RSVP from "../Template-Components/RSVP";

const TemplateThree = function ({ setIsLoading }) {
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
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateThree;
