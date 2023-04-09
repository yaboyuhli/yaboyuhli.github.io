import React from "react";
import "./Skills.css";
import {  animated } from "react-spring";
import { Carousel } from "react-responsive-carousel";
import useAnimations from "../../hooks/useAnimations";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import certificate1 from "../../assets/1.png";
import certificate2 from "../../assets/2.png";
import certificate3 from "../../assets/3.png";
import certificate4 from "../../assets/4.png";
import certificate5 from "../../assets/5.png";
import SkillBar from "react-skillbars";

const Skills = () => {
  const certificates = [
    { src: certificate5, alt: "Certificate 1" },
    { src: certificate2, alt: "Certificate 2" },
    { src: certificate3, alt: "Certificate 3" },
    { src: certificate4, alt: "Certificate 4" },
    { src: certificate1, alt: "Certificate 5" },
  ];

  const skills = [
    { type: "React", level: 85 },
    { type: "Java", level: 55 },
    { type: "HTML5", level: 90 },
    { type: "CSS3", level: 75 },
    { type: "JavaScript", level: 90 },
    { type: "Node.js", level: 60 },
    { type: "Python", level: 55 },
    { type: "Django", level: 50 },
    { type: "SQL", level: 65 },
  ];

  const { triggerRef, fadeInTitle, appear, comeLeftSkills, comeRightSkills, comeLeft } = useAnimations();


  return (
    <div className="skills-page" ref={triggerRef}>
      <div className="skills-title" >
        <h1 id="skills"> </h1>
        <animated.div style={{...comeLeft, ...appear }}>
        <h1>Skills</h1>
        </animated.div>
      </div>
      <animated.div className="skills-underline" style={appear} />
      <div id="skills" className="skills">
        <div className="certificates">
          <animated.div style={fadeInTitle}>
          <h2>Google IT Support Certificates</h2>
          </animated.div>
          <div className="skills-left"  >
            <animated.div style={comeLeftSkills}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              renderArrowPrev={() => {}}
              renderArrowNext={() => {}}
            >
              {certificates.map((certificate, index) => (
                <div key={index}>
                  <img src={certificate.src} alt={certificate.alt} />
                </div>
              ))}
            </Carousel>
            </animated.div>
          </div>
        </div>
        <div className="web-development-skills">
        
        <animated.div style={fadeInTitle}>
          <h2>Development Technologies </h2>
          </animated.div>
        </div>
        
        <div className="skills-bar">
        <animated.div style={comeRightSkills} >
          <SkillBar
            skills={skills}
            colors={{
              bar: "#A08CFCFF",
              title: {
                text: "#A08CFCFF",
                background: "#0D054EE6",
              },
            }}
            animationDelay={200}
            animationDuration={1500}
            height={35}
          />
           </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
