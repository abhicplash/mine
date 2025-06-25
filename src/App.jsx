import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Projects from "./components/Projects";
import PNF from "./Pages/PNF";
import ProjectPage from "./Pages/ProjectPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<PNF  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
