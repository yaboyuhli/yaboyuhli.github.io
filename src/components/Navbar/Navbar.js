import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">
        <button className="navbar-btn" onClick={() => scrollToSection("about")}>
          About
        </button>
        <button
          className="navbar-btn"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </button>
        <button
          className="navbar-btn"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="navbar-btn"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
