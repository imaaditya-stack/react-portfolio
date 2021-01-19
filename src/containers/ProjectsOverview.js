import React from "react";
import { Image } from "react-bootstrap";

const ProjectsOverview = ({ title, subtitle }) => {
  return (
    <div className="projects__overview grid--global">
      <div className="projects__svg">
        <Image src={require("../assets/images/Projects.svg").default} />
      </div>
      <div className="my-auto">
        <center>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </center>
      </div>
    </div>
  );
};

export default ProjectsOverview;
