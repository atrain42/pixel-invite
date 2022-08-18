import React from "react";

import Header from "../template-four/Header";
import Gender from "../template-two/Gender";
import RSVP from "../Template-Components/RSVP";

import classes from "../template-two/TopGifts.module.css";

const TemplateFour = function () {
  return (
    <React.Fragment>
      <Header />
      <section className={classes.message}>
        <h1 className={classes.title}>A message for you</h1>
        <p>
          Thank you guys for coming to celebrate my baby with me! I am so
          excited to bring a new life in the world, and want to share this
          experience with the ones who matter the most. If you can't make the
          shower, I hope we can get together soon so I can share with you the
          new baby!
          <br />
          <br />
          A few things for the party. When you get to the house, park in the
          yard to the left of the house. Our driveway is small so we don't want
          to have cars being trapped in. The tent is located in the backyard, so
          just walk around the back of the house and join the party! Please fill
          out the RSVP form so I know if you're coming.
          <br />
          <br />
          Thanks everyone I can't wait to see you all!
          <br />
          <br />
          Love, Mikayla & Mike.
        </p>
      </section>
      <Gender />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateFour;