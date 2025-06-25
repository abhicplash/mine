import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import PNF from "./Pages/PNF";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PNF  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
