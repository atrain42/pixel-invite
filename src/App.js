import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./layout/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Templates from "./pages/Templates";
import Navbar from "./components/nav/Navbar";
import TemplateOne from "./templates/TemplateOne";
import TemplateTwo from "./templates/TemplateTwo";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="templates" element={<Templates />} />
          <Route path="template-one" element={<TemplateOne />} />
          <Route path="template-two" element={<TemplateTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;