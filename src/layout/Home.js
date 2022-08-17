import { Fragment } from "react";
import Header from "./header/Header";
import Info from "../layout/Info";
import About from "../layout/About";
import Pricing from "../layout/Pricing";
import Testimonial from "../components/testimonial/Testimonial";
import Additional from "./Additional";
import Footer from "../layout/Footer";
import Button from "../components/button/Button";

const Home = function () {
  return (
    <>
      <Header />
      <About />
      <Info />
      <Pricing />
      <Testimonial />
      <Additional />
      <section className="call-to-action">
        <h1>Ready to get started?</h1>
        <p>Fill out the contact form and we will reply within 24 hours.</p>
        <Button title="Get started" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
