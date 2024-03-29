import React from "react";
import { motion, AnimatePresence } from "framer-motion";

//components
import SingleTemplate from "../../components/SingleTemplate/SingleTemplate";
import SectionHeader from '../../components/sectionHeader/SectionHeader'
import Footer from "../../layout/Footer";

//styles
import classes from "./Templates.module.css";

const templates = [
  {
    path: 'https://pixelinvite-orbital.netlify.app/',
    bgid: 'orbital',
    title: 'Orbital',
    number: '01',
    info: 'Multi-page application which includes home, RSVP, and Registry pages.',
  },
  {
    path: 'https://pixelinvite-horizon.netlify.app/',
    bgid: 'horizon',
    title: 'Horizon',
    number: '02',
    info: 'Single-page where all the content is included on the home page; just keep scrolling!',
  },
  {
    path: 'https://pixelinvite-ozone.netlify.app/',
    bgid: 'ozone',
    title: 'Ozone',
    number: '03',
    info: 'Multi-page application where the users are greeted with an animation prior to entering the site.',
  },
  {
    path: '/templates/template-one',
    bgid: 'lunar',
    title: 'Lunar',
    number: '04',
    info: 'Coming soon...',
  },
]

const Templates = () => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <React.Fragment>
          <div className={classes.templates}>
            <SectionHeader 
              subtitle="START HERE"
              title="Browse our templates"
              text="Visit the different templates and decide which one best fits your needs"
            />
            <div className={classes.templateContainer}>
              {templates.map((template, index) => {
                return <SingleTemplate key={index} {...template} />;
              })}
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </motion.div>
    </AnimatePresence>
  );
};

export default Templates;
