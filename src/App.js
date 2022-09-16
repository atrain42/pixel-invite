import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./layout/Home";
// import { About, Privacy, Steps, Templates, Contact, Success } from "./pages";

import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import Success from "./pages/Success/Success";
import Contact from "./pages/Contact/Contact";
import Steps from "./pages/Steps/Steps";
import Templates from "./pages/Templates/Templates";

import Navbar from "./components/nav/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Models from "./components/SingleTemplate/Models";

const templates = [
  {
    path: "https://pixelinvite-orbital.netlify.app/",
    bgid: "orbital",
    title: "Orbital",
    number: "01",
    info: "Multi-page application which includes home, RSVP, and Registry pages.",
  },
  {
    path: "https://pixelinvite-horizon.netlify.app/",
    bgid: "horizon",
    title: "Horizon",
    number: "02",
    info: "Single-page where all the content is included on the home page; just keep scrolling!",
  },
  {
    path: "https://pixelinvite-ozone.netlify.app/",
    bgid: "ozone",
    title: "Ozone",
    number: "03",
    info: "Multi-page application where the users are greeted with an animation prior to entering the site.",
  },
  {
    path: "/templates/template-one",
    bgid: "lunar",
    title: "Lunar",
    number: "04",
    info: "Coming soon...",
  },
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/templates" element={<Templates data={templates} />} />
          <Route path="/model/:title" element={<Models data={templates} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
