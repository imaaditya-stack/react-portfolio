import React from "react";

const ProjectCard = ({ title, desc, techStack }) => {
  return (
    <div className="ds__card">
      <h5>{title}</h5>
      <p className="mb-0">{desc}</p>
    </div>
  );
};

export default ProjectCard;
