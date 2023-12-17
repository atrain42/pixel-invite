import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
          <Route path="/templates" element={<Templates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
