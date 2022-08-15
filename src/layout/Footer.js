import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h1>Pixel Invite</h1>
      <p>
        Let's make sending invitations easier with Pixel Invite. A new way to
        invite.
      </p>
      <div>
        <h2>Company</h2>
        <Link to="about">About</Link>
        <Link to="privacy">Privacy</Link>
        <Link to="/">Expectations</Link>
      </div>
      <div>
        <h2>Contact</h2>
        <p>You can email us at maxheimer4211@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
