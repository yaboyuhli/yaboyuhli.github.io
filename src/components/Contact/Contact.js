import React from "react";
import { animated } from "react-spring";
import useAnimations from "../../hooks/useAnimations";
import "./Contact.css";
import code from "../../assets/code.png";
import learn from "../../assets/learn.png";
import adapt from "../../assets/adapt.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/message.png";

const Contact = () => {
  const { triggerRef, appear, fadeInTrailContact, comeLeft, fadeInIcons } =
    useAnimations(3);

  return (
    <div className="contact" id="contact" ref={triggerRef}>
      <animated.div style={comeLeft}>
        <h1 className="contact-title">Why work with me?</h1>
      </animated.div>
      <animated.div className="underline" style={appear} />
      <main className="content-container">
        {fadeInTrailContact.map(({ opacity, x }, index) => (
          <animated.section
            key={index}
            style={{
              opacity,
              transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
            }}
          >
            {index === 0 && (
              <>
                <div className="image-container">
                  <img src={code} alt="code" className="code" />
                </div>
                <h2>Passionate about technology</h2>
                <p>
                  I strongly believe that the most impactful work is
                  accomplished by individuals who are passionate about their
                  craft.
                </p>
              </>
            )}
            {index === 1 && (
              <>
                <div className="image-container">
                  <img src={learn} alt="learn" className="learn" />
                </div>
                <h2>Quick Learner</h2>
                <p>
                  I am highly confident in my ability to quickly acquire new
                  knowledge and effectively apply it in a fast-paced and
                  competitive environment.
                </p>
              </>
            )}
            {index === 2 && (
              <>
                <div className="image-container">
                  <img src={adapt} alt="adapt" className="adapt" />
                </div>
                <h2>Adaptable</h2>
                <p>
                  While I enjoy collaborating with my team and learning new
                  technologies and methodologies, I am also capable of working
                  independently when needed. My greatest value to your company
                  is my ability to quickly adapt and learn your preferred
                  technology stack while being a versatile team player.
                </p>
              </>
            )}
          </animated.section>
        ))}
      </main>
      <animated.div
        className="contact-icons"
        style={{
          opacity: fadeInIcons.opacity,
          transform: fadeInIcons.x.interpolate(
            (x) => `translate3d(${x * 100}px,0,0)`
          ),
        }}
      >
        <a href="https://www.linkedin.com/in/ali-nasralla-00649a222/" target="_blank" rel="noreferrer"  >
          <img src={linkedin} alt="Linkedin" className="icon" />
        </a>
        <a href="https://github.com/yaboyuhli" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" className="icon" />
        </a>
        <a href="mailto:amnasralla@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="Email" className="icon" />
        </a>
      </animated.div>
    </div>
  );
};

export default Contact;
