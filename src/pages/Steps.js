import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./About.module.css";

import Button from "../components/button/Button";
import Footer from "../layout/Footer";

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <React.Fragment>
        <div className={classes.aboutText}>
          <h1>Steps</h1>
          <p>
            1. Browse our templates and get an idea of what you want your site
            to look like. Then, fill out the contact form and we will respond
            within 24 hours.
            <br />
            <br />
            2. Send any information that is relevant to your baby shower or that
            you want on the site. Send the information to
            pixel.invite.info@gmail.com
            <br />
            <br />
            3. Full payment is due. Depending on the payment method you selected
            in the contact form, we will send our corresponding account
            information to that platform. The full $50 is due at this point.
            <br />
            <br />
            4. After payment has been recieved, we will begin working on your
            site. Please allow 2 - 3 days to complete the website.
            <br />
            <br />
            5. Lastly, we will deploy your site to the internet so you can view
            it. This is your only chance to specify any changes you may want. If
            you want any changes, we will make them and then redeploy your site.
          </p>
          <Link to="/contact">
            <Button title="Get started" />
          </Link>
        </div>
        <Footer />
      </React.Fragment>
    </motion.div>
  );
};

export default Steps;
