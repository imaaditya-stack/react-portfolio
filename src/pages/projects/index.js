import React from "react";
import ReactProjects from "../../containers/ReactProjects";
import ProjectsContainer from "../../containers/Projects";
import { dsProjects, projects } from "../../portfolio";
import "./style.css";

const Projects = () => {
  return (
    <div className="project__wrapper">
      <ReactProjects />
      <ProjectsContainer projects={dsProjects} />
      <ProjectsContainer projects={projects} />
    </div>
  );
};

export default Projects;
