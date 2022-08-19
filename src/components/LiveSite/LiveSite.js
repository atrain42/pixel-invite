import React from "react";

import classes from "./LiveSite.module.css";

const LiveSite = () => {
  return (
    <section className={classes.liveSection}>
      <h1 className="infoTitle">View a live site</h1>
      <p>
        Take a look a look at a live site to get an idea of the functionality of
        our websites.
      </p>
      <div className={classes.mainContent}>
        <div className={classes.liveContainer}>
          <a href="https://live-template.netlify.app/">view</a>
        </div>
        <div className={classes.liveContainerText}>
          <h2>Live site information</h2>
          <h4>
            Please enter the login information below to gain access to the site.
          </h4>
          <h3>Email: test@test.com</h3>
          <h3>Password: testing123</h3>
        </div>
      </div>
    </section>
  );
};

export default LiveSite;
