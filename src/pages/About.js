import React from "react";
import { Link } from "react-router-dom";

import classes from "./About.module.css";
import Button from "../components/button/Button";
import Footer from "../layout/Footer";

const About = () => {
  return (
    <React.Fragment>
      <div className={classes.aboutText}>
        <h1>About us</h1>
        <p>
          Pixel Invite was created to make sending invitations easier. We live
          in a different world today, and it is time to part ways with
          traditional invitations. At Pixel Invite, we create and deploy you a
          personal website that acts as the invitation to your baby shower.
          <br />
          <br />
          Our websites are fully customizable and include links to your
          registry. Your guests also have the opportunity to RSVP on your site.
          When a guest RSVPs on your website, the information in the contact
          form is forwarded to your email address, this way you can see who
          plans on coming.
          <br />
          <br />
          Our sites can be customized to tailor your needs. If you don't like
          the background images on our templates, just supply your own. If you
          want to give guests specific information on your party; for example,
          where to park, then include it on your website. You can also advertise
          your top registry gifts so the guests can get an idea of what you need
          most.
          <br />
          <br />
          The website possibilities are endless, and we have top-notch customer
          service in order to guarantee that your satisfied with your site. Just
          fill out the contact form and we will reach out and start building
          your site!
        </p>
        <Link to="/contact">
          <Button title="Get started" />
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
