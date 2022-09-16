import React from "react";
import { motion } from "framer-motion";

import classes from "./Templates.module.css";
import SingleTemplate from "../../components/SingleTemplate/SingleTemplate";
import Footer from "../../layout/Footer";
import { AnimatePresence } from "framer-motion";

const Templates = ({ data }) => {
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
              {data.map((template, index) => {
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
