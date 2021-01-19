import React from "react";
import ReactProjects from "../../containers/ReactProjects";
import ProjectsContainer from "../../containers/Projects";
import ProjectsOverview from "../../containers/ProjectsOverview";
import { projectsOverview, dsProjects, projects } from "../../portfolio";
import "./style.css";

const Projects = () => {
  return (
    <div className="project__wrapper">
      <ProjectsOverview
        title={projectsOverview.title}
        subtitle={projectsOverview.subtitle}
      />
      <ReactProjects />
      <ProjectsContainer projects={dsProjects} />
      <ProjectsContainer projects={projects} />
    </div>
  );
};

export default Projects;
