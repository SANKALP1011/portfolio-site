import React from "react";
import Resume from "../components/Resume";
import "../components/styles.css";
import "../components/demo.css";
import "../components/About.css";
import "../components/Navbar.css";
import "../styles/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "../components/demo";
import About from "../components/About";
import Contact from "../components/Contact";
import Project from "../components/Projects";
import Skiils from "../components/Skils";
import LandingPage from "./LandingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

AOS.init();

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Main" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skils" element={<Skiils />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
