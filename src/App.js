// src/App.js
import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { useScrollPosition } from "./useScrollPosition";

function App() {
  const scrollPosition = useScrollPosition();

  return (
    <div className="App">
      {scrollPosition > window.innerHeight * 0.9 && <Navbar />}
      <LandingPage />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

