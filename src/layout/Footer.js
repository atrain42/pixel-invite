import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.contentBin}>
        <div className={classes.footerLinks}>
          <h1>Pixel Invite</h1>
          <p>
            Let's make sending invitations easier with Pixel Invite. A new way
            to invite.
          </p>
        </div>
        <div className={classes.footerLinks}>
          <h2>Navigation</h2>
          <Link to="/templates" className={classes.footLink}>
            Templates
          </Link>
          <Link to="/contact" className={classes.footLink}>
            Contact
          </Link>
        </div>
        <div className={classes.footerLinks}>
          <h2>Company</h2>
          <Link to="/about" className={classes.footLink}>
            About
          </Link>
          <Link to="/privacy" className={classes.footLink}>
            Privacy
          </Link>
          <Link to="/steps" className={classes.footLink}>
            Getting started
          </Link>
        </div>
        <div className={classes.footerLinks}>
          <h2>Contact</h2>
          <h4>You can email us at maxheimer4211@gmail.com</h4>
        </div>
      </div>
      <hr />
      <h3>&#xA9; Pixel Invite, 2022. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
