import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={projectLink} className="project-link" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
