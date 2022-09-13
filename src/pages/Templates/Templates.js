import React from "react";
import { motion } from "framer-motion";

import classes from "./Templates.module.css";
import SingleTemplate from "../../components/SingleTemplate/SingleTemplate";
import Footer from "../../layout/Footer";
import { AnimatePresence } from "framer-motion";

import ss1 from "../../images/ss1.png";
import ss2 from "../../images/ss2.jpg";
import ss3 from "../../images/ss3.png";
import ss4 from "../../images/soon.jpg";
import orbital from "../../images/space.png";
import sunset from "../../images/sunset.png";
import astronomy from "../../images/astronomy.png";
import lunar from "../../images/lunar.png";
const templates = [
  {
    path: "https://pixelinvite-orbital.netlify.app/",
    text: "Our simplistic approach to a website design. This site includes the following pages: Home, Registry, and RSVP pages.",
    title: "Orbital",
    source: ss1,
    bgImg: orbital,
  },
  {
    path: "https://pixelinvite-horizon.netlify.app/",
    text: "Our simplistic approach to a website design. This site includes the following pages: Home, Registry, and RSVP pages.",
    title: "Horizon",
    source: ss2,
    bgImg: sunset,
  },
  {
    path: "https://pixelinvite-ozone.netlify.app/",
    text: "This template includes a beautiful loading spinner and subtle animations that creates a memorable user experience.",
    title: "Ozone",
    source: ss3,
    bgImg: astronomy,
  },
  {
    path: "/templates/template-one",
    text: "Our simplistic approach to a website design. This site includes the following pages: Home, Registry, and RSVP pages.",
    title: "Coming soon...",
    source: ss4,
    bgImg: lunar,
  },
];

const Templates = () => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <React.Fragment>
          <section className={classes.templates}>
            <h1 className="infoTitle">View our beautiful templates</h1>
            <p className={classes.templateInfo}>
              From unique designs to eye-catching animations, our websites have
              everything you need to advertise your baby shower.
            </p>
            <div className={classes.templateContainer}>
              {templates.map((template, index) => {
                return <SingleTemplate key={index} {...template} />;
              })}
            </div>
          </section>
          <Footer />
        </React.Fragment>
      </motion.div>
    </AnimatePresence>
  );
};

export default Templates;
