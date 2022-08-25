import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./header/Header";
import Info from "../layout/Info";
import About from "../layout/About";
import Pricing from "../layout/Pricing";
import Testimonial from "../components/testimonial/Testimonial";
import Additional from "./Additional";
import Button from "../components/button/Button";
import Footer from "./Footer";

const Home = function () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <Header />
        <About />
        <Info />
        <Pricing />
        <Testimonial />
        <Additional />
        <section className="call-to-action">
          <h1 className="infoTitle">Ready to get started?</h1>
          <p>Fill out the contact form and we will reply within 24 hours.</p>
          <Link to="/steps">
            <Button title="Steps to follow" />
          </Link>
        </section>
        <Footer />
      </>
    </motion.div>
  );
};

export default Home;
