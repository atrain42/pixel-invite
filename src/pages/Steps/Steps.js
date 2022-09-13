import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import classes from "../About/About.module.css";

import Button from "../../components/button/Button";
import Footer from "../../layout/Footer";

const Steps = () => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <React.Fragment>
          <div className={classes.aboutText}>
            <h1>Steps</h1>
            <div className={classes.aboutItem}>
              <p>
                1. Browse our templates and get an idea of what you want your
                site to look like. Then, fill out the contact form and we will
                respond within 24 hours. We will reach you via the email
                provided in the form.
                <br />
                <br />
                2. Send any information that is relevant to your baby shower
                that you want on the site. Send the information to
                pixel.invite.info@gmail.com. This should include pictures, text,
                addresses, dates, etc.
                <br />
                <br />
                3. Full payment is due. Depending on the payment method you
                selected in the contact form, we will send our corresponding
                account information to that platform. The full $50 is due at
                this point.
                <br />
                <br />
                4. After payment has been recieved, we will begin working on
                your site. Please allow 2 - 3 days to complete the website.
                Note: by this time we should have received all the info you want
                on the site.
                <br />
                <br />
                5. Lastly, we will deploy your site to the internet so you can
                view it. This is your only chance to specify any changes you may
                want. If you want any changes, we will make them and then
                redeploy your site.
              </p>
            </div>

            <Link to="/contact">
              <Button title="Get started" />
            </Link>
          </div>
          <Footer />
        </React.Fragment>
      </motion.div>
    </AnimatePresence>
  );
};

export default Steps;
