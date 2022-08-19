import React, { useState, useEffect } from "react";

import Header from "../Template-Components/Header/Header";
import Message from "../Template-Components/Message/Message";
import TopGifts from "../Template-Components/TopGifts";
import RSVP from "../Template-Components/RSVP";
import Loader from "../components/Loader";

const TemplateOne = function () {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1250);
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header />
      <Message />
      <TopGifts />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateOne;
