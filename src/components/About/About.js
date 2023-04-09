import React from "react";
import "./About.css";
import useAnimations from "../../hooks/useAnimations";
import { animated } from "react-spring";
import software from "../../assets/software.png";
import pcImage from "../../assets/gaming-pc.png";
import americanFootballImage from "../../assets/american-football.png";
import basketballImage from "../../assets/basketball.png";
import footballImage from "../../assets/football.png";
import gamesImage from "../../assets/games.png";
import weightLiftingImage from "../../assets/weight-lifting.png";
import hiking from "../../assets/hiking.png";
import criticalThinker from "../../assets/criticalthinking.png";

const About = () => {

  // Get animation-related properties from the useAnimations custom hook
  const { triggerRef, appear, comeLeft, bounce, rotate } = useAnimations();

  return (
    
    <div className="about-page-container" id="about">
      <div className="about-title" ref={triggerRef}>
        <animated.div style={appear}>
          <animated.h1 style={bounce}>About</animated.h1>
        </animated.div>
        <animated.div className="about-underline" style={appear} />
      </div>
      <div className="about-section-container">
        <div className="about-text" ref={triggerRef}>
          <animated.div style={comeLeft}>
            <h3>Who am I?</h3>
            <p>
              Hi there! My name is Ali Nasralla, and I am a highly motivated
              computer science graduate. I am eager to join a reputable
              organization where I can leverage my skills and enthusiasm for
              technology in a truly impactful manner. With a track record of
              adaptability and self-growth, I am confident in my ability to
              thrive in dynamic environments and continually expand my
              knowledge. Eager to embrace new challenges, I look forward to
              making a positive difference within any organization I join.
            </p>
          </animated.div>
        </div>

        <div className="about-image-container">
          <animated.div style={bounce}>
            <animated.div style={rotate}>
              <img src={software} alt="Software" className="about-image" />
              <img src={americanFootballImage} alt="American Football" className="about-image" />
              <img src={criticalThinker}alt="Critical Thinking"className="about-image"/>
              <img src={basketballImage} alt="Basketball" className="about-image"/>
              <img src={gamesImage} alt="Games" className="about-image" />
              <img src={weightLiftingImage} alt="Weight Lifting" className="about-image"/>
              <img src={pcImage} alt="PC" className="about-image" />
              <img src={hiking} alt="Hiking" className="about-image" />
              <img src={footballImage} alt="Football" className="about-image" />
            </animated.div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default About;
