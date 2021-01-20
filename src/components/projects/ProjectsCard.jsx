/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const ProjectCard = ({ title, desc, techStack, link }) => {
  return (
    <a href={link} target="_blank">
      <div className="project__card">
        <h5>{title}</h5>
        <p className="mb-0 text--light">{desc}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
