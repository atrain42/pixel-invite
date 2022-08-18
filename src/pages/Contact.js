import React from "react";

import classes from "./Contact.module.css";
import img from "../images/contact1.svg";
import Footer from "../layout/Footer";

const Contact = () => {
  return (
    <div className={classes.contactBin}>
      <h1 className="infoTitle">Let's get started</h1>
      <section className={classes.contactSection}>
        <img src={img} alt="contact" />
        <form
          action="https://formsubmit.co/pixel.invite.info@email.com"
          method="POST"
          className={classes.contactForm}
        >
          <input type="text" name="_honey" className={classes.honeypot} />
          <input type="hidden" name="_captcha" value="false" />
          <span>
            <input type="text" name="First name" placeholder="First Name" />
            <input type="text" name="Last Name" placeholder="Last Name" />
          </span>
          <span>
            <input type="email" name="Email" placeholder="Email" />
            <select name="Payment method">
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
  );
};

export default Contact;
