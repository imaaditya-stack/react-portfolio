import React from "react";
import ProjectCard from "../components/projects/ProjectsCard";
import Heading from "../components/Heading";

const ProjectsContainer = ({ projects }) => {
  return (
    <>
      <Heading label={projects.title} margin="my-5" />
      <div
        className="projects grid--global"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {projects.projects.map((item) => {
          return <ProjectCard title={item.title} desc={item.description} />;
        })}
      </div>
    </>
  );
};

export default ProjectsContainer;
