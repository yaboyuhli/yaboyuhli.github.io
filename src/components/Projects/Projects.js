import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {/* Add your project cards here */}
        <ProjectCard
          title="Project 1"
          image="path/to/image"
          description="Description of project 1"
          projectLink="https://example.com/project1"
        />
        {/* Add more ProjectCard components for additional projects */}
      </div>
    </div>
  );
}

export default Projects;

