import React from "react";
import { animated } from "react-spring";
import useAnimations from "../../hooks/useAnimations";
import "./Projects.css";
import weather from "../../assets/weather-app.png";
import spotify from "../../assets/spotify-app.png";
import movie from "../../assets/movie-app.png";


const Projects = () => {
 
  const projectsData = [
    // Add your project data here
    {
      title: "Project 1",
      description: "Weather app that displays the weather of a desired location.",
      imageUrl: weather,
      projectUrl: "https://yaboyuhli.github.io/weather-app/",
    },
    {
      title: "Project 2",
      description: "A Spotify Playlist app that allows you to create playlists faster and more efficiently.",
      imageUrl: spotify,
      projectUrl: "https://yaboyuhli.github.io/spotify-app",
    },
    {
      title: "Project 3",
      description: "Movie app that displays the information of a desired movie.",
      imageUrl: movie,
      projectUrl: "https://yaboyuhli.github.io/movie-app/",
    },
  ];

  const { triggerRef, appear, comeRight, fadeInTrail } = useAnimations(projectsData.length);

  return (
    <div className="projects-page" ref={triggerRef}>
      <div className="project-title">
          <h1 id="projects"> </h1>
          <animated.div style={comeRight}>
          <h1>Projects</h1>
        </animated.div>
      </div>
      <animated.div className="project-underline" style={appear} />
      <div className="projects-container">
        {fadeInTrail.map((animation, index) => (
          <animated.div className="project" key={index} style={animation}>
            <a href={projectsData[index].projectUrl} target="_blank" rel="noopener noreferrer">
              <img src={projectsData[index].imageUrl} alt={projectsData[index].title} />
            </a>
            <p>{projectsData[index].description}</p> 
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
