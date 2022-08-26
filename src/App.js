import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./layout/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Steps from "./pages/Steps";
import Templates from "./pages/Templates";
import Navbar from "./components/nav/Navbar";
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import TemplateThree from "./templates/TemplateThree";
import TemplateFour from "./templates/TemplateFour";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/templates/template-one" element={<TemplateOne />} />
          <Route path="/templates/template-two" element={<TemplateTwo />} />
          <Route path="/templates/template-three" element={<TemplateThree />} />
          <Route path="/templates/template-four" element={<TemplateFour />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
