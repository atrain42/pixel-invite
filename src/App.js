import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./layout/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Steps from "./pages/Steps";
import Templates from "./pages/Templates";
import Navbar from "./components/nav/Navbar";
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/templates/template-one" element={<TemplateOne />} />
        <Route path="/templates/template-two" element={<TemplateTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
