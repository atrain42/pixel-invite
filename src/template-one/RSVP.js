// import { useState } from "react";
import classes from "./RSVP.module.css";

const RSVP = () => {
  return (
    <section className={classes.rsvp} id="rsvp" onSubmit="return false;">
      <h1 className={classes.rsvpTitle}>RSVP</h1>
      <form className={classes.rsvpForm}>
        {/* Honeypot */}
        <input type="text" name="_honey" className={classes.honeypot} />
        <input type="hidden" name="_captcha" value="false" />
        <div className={classes.detail}>
          <input
            type="text"
            name="First&nbsp;Name"
            placeholder="First Name"
            className={classes.inputText}
            required
          />
          <input
            type="text"
            name="Last&nbsp;Name"
            placeholder="Last Name"
            className={classes.inputText}
            required
          />
        </div>
        <div className={classes.checkbox}>
          <h1 className={classes.subtitle}>Will you be attending?</h1>
          <div className={classes.comboContainer}>
            <span className={classes.checkCombo}>
              <input
                type="radio"
                name="Are&nbsp;you&nbsp;coming"
                value="Yes"
                className={classes.check}
                required
              />
              <label for="I'm coming" className={classes.checkTitle}>
                Accept with pleasure
              </label>
            </span>
            <span className={classes.checkCombo}>
              <input
                type="radio"
                name="Are&nbsp;you&nbsp;coming"
                value="No"
                className={classes.check}
                required
              />
              <label for="I cant't make it" className={classes.checkTitle}>
                Decline with regret
              </label>
            </span>
          </div>
        </div>
        <textarea name="" cols="20" rows="15" placeholder="Message"></textarea>
        <button type="reset">submit</button>
      </form>
    </section>
  );
};

export default RSVP;
