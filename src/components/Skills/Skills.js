import React from 'react';
import './Skills.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Skills = () => {
  const certificates = [
    // Add your certificate images here
    { src: 'path/to/certificate1.jpg', alt: 'Certificate 1' },
    { src: 'path/to/certificate2.jpg', alt: 'Certificate 2' },
    // ...
  ];

  const webDevelopmentSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    // ...
  ];

  return (
    <div id="skills" className="skills">
      <div className="certificates">
        <h2>Google IT Support Certificates</h2>
        <Carousel showThumbs={false}>
          {certificates.map((certificate, index) => (
            <div key={index}>
              <img src={certificate.src} alt={certificate.alt} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="web-development-skills">
        <h2>Web Development</h2>
        {webDevelopmentSkills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-percentage-container">
              <div
                className="skill-percentage"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
