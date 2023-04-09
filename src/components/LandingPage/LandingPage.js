import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import "./LandingPage.css";
import profileImage from "../../assets/pic.png";
import particlesConfig from "../LandingPage/particles-config.json";
import "particles.js";

const LandingPage = () => {
  const menuAnimation = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: config.molasses,
  });

  const spinningAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(720deg)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    window.particlesJS("particles-js", particlesConfig);
  }, []);

  return (
    <div className="landing-page" id="landing-page">
      <div id="particles-js"></div>
      <script src="particles.js"></script>
      <animated.div style={menuAnimation}>
        <div className="menu-container">
          <a href="#about" className="menu-item">
            About
          </a>
          <a href="#skills" className="menu-item">
            Skills
          </a>
          <animated.div style={spinningAnimation}>
            <div className="image-container">
              <img src={profileImage} alt="me" className="profile-image" />
            </div>
          </animated.div>
          <a href="#projects" className="menu-item">
            Projects
          </a>
          <a href="#contact" className="menu-item">
            Contact
          </a>
        </div>
      </animated.div>
    </div>
  );
};

export default LandingPage;
