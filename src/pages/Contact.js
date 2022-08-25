import React, { useState } from "react";
import { motion } from "framer-motion";

import classes from "./Contact.module.css";
import img from "../images/contact1.svg";
import Footer from "../layout/Footer";

import FormLoader from "../components/FormLoader/FormLoader";

const Contact = () => {
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmission = () => {
    setFormLoading(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <React.Fragment>
        {formLoading && <FormLoader />}
        <div className={classes.contactBin}>
          <h1 className="infoTitle">Let's get started</h1>
          <section className={classes.contactSection}>
            <img src={img} alt="contact" />
            <form
              action="https://formsubmit.co/pixel.invite.info@gmail.com"
              method="POST"
              className={classes.contactForm}
              onSubmit={handleSubmission}
            >
              <input type="text" name="_honey" className={classes.honeypot} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://www.pixelinvite.com/success"
              />
              <span>
                <input
                  type="text"
                  name="First name"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  required
                />
              </span>
              <span>
                <input type="email" name="Email" placeholder="Email" required />
                <select name="Payment method" required>
                  <option value="Apple Pay">Apple Pay</option>
                  <option value="Venmo">Venmo</option>
                  <option value="Cashapp">Cashapp</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </span>
              <textarea
                cols="55"
                rows="15"
                placeholder="Message"
                name="message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </section>
          <Footer />
        </div>
      </React.Fragment>
    </motion.div>
  );
};

export default Contact;
