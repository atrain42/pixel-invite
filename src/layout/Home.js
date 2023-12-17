import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Header from "./header/Header";
import Info from "../layout/Info";
import GetStarted from "./GetStarted";
import Pricing from "../layout/Pricing";
import Testimonial from "../components/testimonial/Testimonial";
import Questions from "../components/accordion/Questions";
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
        <Info />
        <Pricing />
        <Testimonial />
        <Questions />
        <GetStarted />
        <Footer />
      </>
    </motion.div>
  );
};

export default Home;
