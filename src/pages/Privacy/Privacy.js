import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//components
import Button from "../../components/button/Button";
import Footer from "../../layout/Footer";

//styles
import classes from "../About/About.module.css";

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
            <div className={classes.aboutItem}>
              <h2>1. What information do we collect?</h2>
              <p>
                In short: We collect the personal information you provide to us
                in the contact form. <br></br>
                <br></br>We collect the personal information that you
                voluntarily provide to us when you are completing your purchase.
                This only includes your name and email address<br></br>
              </p>
              <p>
                We do not access any sensitive information. We don't require you
                to input any banking information or any credit card information.
              </p>
            </div>
            <div className={classes.aboutItem}>
              <h2>2. How do we process your information?</h2>
              <p>
                In short: your information is processed privately and is not
                shared with any 3rd parties. Your information is only used to
                contact you, and is not stored in any database or anything.
                <br></br>
                <br></br>
                With your consent, we may process your information to post
                testimonials on our website.
              </p>
            </div>
            <div className={classes.aboutItem}>
              <h2>3. How long do we keep your information?</h2>
              <p>
                In short: we keep your information until all payments and
                services are finalized. We do this because we may need to
                contact you when creating your website. <br></br>
                <br></br>Once your payment is final and your website is deployed
                on the internet, we do not store your information anywhere.
              </p>
            </div>
            <div className={classes.aboutItem}>
              <h2>4. How can you contact us about this notice?</h2>
              <p>
                If you have any questions or comments about this notice, you may
                email us at pixel.invite.info@gmail.com.<br></br>
                <br></br>Pixel Invite, your information kept safe.
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

export default About;
