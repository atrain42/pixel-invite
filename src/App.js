import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

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
import Loader from "./components/Loader";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Router>
      {isLoading && <Loader />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/templates/template-one"
          element={<TemplateOne setIsLoading={setIsLoading} />}
        />
        <Route
          path="/templates/template-two"
          element={<TemplateTwo />}
          setIsLoading={setIsLoading}
        />
        <Route
          path="/templates/template-three"
          element={<TemplateThree />}
          setIsLoading={setIsLoading}
        />
        <Route
          path="/templates/template-four"
          element={<TemplateFour />}
          setIsLoading={setIsLoading}
        />
      </Routes>
    </Router>
  );
}

export default App;
