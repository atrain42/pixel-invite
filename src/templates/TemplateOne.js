import React from "react";

import Header from "../template-one/Header";
import TopGifts from "../template-one/TopGifts";
import RSVP from "../template-one/RSVP";

import classes from "../template-one/TopGifts.module.css";

const TemplateOne = function () {
  return (
    <React.Fragment>
      <Header />
      <section className={classes.message}>
        <div className={classes.messageOverlay}></div>
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
          Love, Rebecca.
        </p>
      </section>
      <TopGifts />
      <RSVP />
    </React.Fragment>
  );
};

export default TemplateOne;