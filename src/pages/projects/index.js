import React from "react";
import ReactProjects from "../../containers/ReactProjects";
import ProjectsContainer from "../../containers/Projects";
import ProjectsOverview from "../../containers/ProjectsOverview";
import { projectsOverview, dsProjects, projects } from "../../portfolio";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import "./style.css";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="project__wrapper">
        <ProjectsOverview
          title={projectsOverview.title}
          subtitle={projectsOverview.subtitle}
        />
        <ReactProjects />
        <ProjectsContainer projects={dsProjects} />
        <ProjectsContainer projects={projects} />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
