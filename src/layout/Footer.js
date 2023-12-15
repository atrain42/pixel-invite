import { Link } from "react-router-dom";

import Button from '../components/button/Button'

//styles
import classes from "./Footer.module.css";

import balloons from '../images/balloons-PI.png'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className='call-to-action'>
        <img
          src={balloons}
          alt='happy balloons'
          className='call-to-action-img'
        ></img>
        <h1 className='infoTitle'>Ready to get started?</h1>
        <p>Fill out the contact form and we will reply within 24 hours.</p>
        <Link to='/contact'>
          <Button title='Get started' />
        </Link>
      </section>
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
          <Link to='/' className={classes.footLink}>
            Home
          </Link>
          <Link to='/templates' className={classes.footLink}>
            Templates
          </Link>
          <Link to='/contact' className={classes.footLink}>
            Contact
          </Link>
        </div>
        <div className={classes.footerLinks}>
          <h2>Company</h2>
          <Link to='/about' className={classes.footLink}>
            About
          </Link>
          <Link to='/privacy' className={classes.footLink}>
            Privacy
          </Link>
          <Link to='/steps' className={classes.footLink}>
            Getting started
          </Link>
        </div>
        <div className={classes.footerLinks}>
          <h2>Contact</h2>
          <h4>You can email us at pixel.invite.info@gmail.com</h4>
        </div>
      </div>
      <hr />
      <h3>&#xA9; Pixel Invite, 2022. All rights reserved.</h3>
    </footer>
  )
};

export default Footer;
