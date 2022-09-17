import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Header from "./header/Header";
import Info from "../layout/Info";
import Mission from "../layout/Mission";
import Pricing from "../layout/Pricing";
import Testimonial from "../components/testimonial/Testimonial";
import Questions from "../components/accordion/Questions";
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
        <Mission />
        <div className="section-break"></div>
        <Info />
        <Pricing />
        <Testimonial />
        <Questions />
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
