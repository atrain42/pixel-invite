import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./About.module.css";
import Button from "../components/button/Button";
import Footer from "../layout/Footer";
import { AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <React.Fragment>
          <div className={classes.aboutText}>
            <h1>Privacy Policy</h1>
            <p>
              Protecting you is very important to us. This is why we don't
              require you to input any credit card information into our site.
              Simply specifiy the payment platform you use, and we will give you
              our username for that account.
              <br />
              <br />
              All of the sites that we create for our customers are password
              protected. This means that if you don't have the password, there
              is no way to access your site. This allows sensitive information
              like addresses and names to be protected.
              <br />
              <br />
              We take your website down a week after your baby shower has
              concluded. This prevents your shower information from living on
              the internet forever. With Pixel Invite, you never have to worry
              about privacy.
            </p>
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

export default About;
