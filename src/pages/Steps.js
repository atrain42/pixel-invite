import React from "react";
import { Link } from "react-router-dom";

import classes from "./About.module.css";

import Button from "../components/button/Button";
import Footer from "../layout/Footer";

const Steps = () => {
  return (
    <React.Fragment>
      <div className={classes.aboutText}>
        <h1>Steps to get your site</h1>
        <p>
          1. Fill out the contact form and we will respond within 24 hours.
          <br />
          <br />
          2. Send any information that is relevant to your baby shower or that
          you want on the site. Send the information to
          pixel.invite.info@gmail.com
          <br />
          <br />
          3. Full payment is due. Depending on the payment method you selected
          in the contact form, we will send the corresponding account
          information to that platform. The full $50 is due at this point.
          <br />
          <br />
          4. After payment has been recieved, we will begin working on your
          site. Please allow 2 - 3 days to complete the website.
        </p>
        <Link to="/contact">
          <Button title="Get started" />
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Steps;
