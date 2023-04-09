import React from 'react';
import './ProjectCard.css';

// The ProjectCard component takes title, description, and imageUrl as props.
// These props will be used to display the project's details.
const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      {/* The imageUrl prop is used as the src attribute for the project's image */}
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
