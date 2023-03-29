import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./LandingPage.css";
import profileImage from "../LandingPage/pic.png";

function LandingPage() {
  
  const menuAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: config.gentle,
  });

  

  return (

    // floating animation
    <div className="landing-page" id="landing-page">
     
      <animated.div style={menuAnimation}>
        <div className="menu-container">
          <a href="#about" className="menu-item">
            About
          </a>
          <a href="#projects" className="menu-item">
            Projects
          </a>
          <div className="image-container">
            <img src={profileImage} alt="me" className="profile-image" />
          </div>
          <a href="#skills" className="menu-item">
            Skills
          </a>
          <a href="#contact" className="menu-item">
            Contact
          </a>
        </div>
      </animated.div>
    </div>
  );
}

export default LandingPage;