import img from "../images/trial1.svg";

import classes from "./About.module.css";

const About = function () {
  return (
    <section className={classes.aboutSection}>
      <h1 className="infoTitle">Who are we?</h1>
      <div className={classes.aboutContainer}>
        <div className={classes.aboutText}>
          <h1>About us</h1>
          <p>
            Our goal is to make sending invites to your baby shower, easy.
            Planning a baby shower can get complicated and there are a lot of
            things to worry about. Let us worry about the invitations. <br />
            <br />
            At Pixel Invite, we create and deploy you a personal website that
            acts as the invitation to your baby shower. Our websites are fully
            customizable and include links to your registry. Your guests also
            have the opportunity to RSVP on your site.
          </p>
        </div>
        <img src={img} alt="about" />
      </div>
      <div className={classes.aboutContent}>
        <div className={classes.aboutText}>
          <h1>How it works</h1>
          <p>
            Browse the templates and get an idea of who we are and what we do.
            If you want to purchase a site, fill out the contact form and we
            will get back with you within 24 hours.
          </p>
        </div>
        <div className={classes.aboutText}>
          <h1>Mission</h1>
          <p>
            Our mission is to discard the old way of sending invites through the
            mail, and to simplify the process on the web. Instead of hand
            writing invitation letters, just share the link to your website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
