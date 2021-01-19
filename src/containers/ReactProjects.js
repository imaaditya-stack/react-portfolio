import React from "react";
import ReactProjectCard from "../components/projects/ReactProjectCard";
import Heading from "../components/Heading";
import { reactProjects } from "../portfolio";

const ReactProjects = () => {
  return (
    <>
      <Heading label={reactProjects.title} margin="mb-5" />
      <div className="react__projects grid--global">
        {reactProjects.projects.map((item) => {
          return <ReactProjectCard image={item.image} link={item.link} />;
        })}
      </div>
    </>
  );
};

export default ReactProjects;
