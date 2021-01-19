import React from "react";
import TechStack from "../components/home/TechStack";
import { Image } from "react-bootstrap";

const SkillsContainer = ({ svg, skills }) => {
  return (
    <div
      className="skills__wrapper grid--global"
      style={{ overflowX: "hidden" }}
    >
      <div
        className="skills__svg text-center"
        data-aos="slide-right"
        data-aos-duration="1500"
      >
        <Image
          src={require(`../assets/images/${svg}`).default}
          alt=""
          className="img-fluid"
        />
      </div>
      <div
        className="skills__desc my-auto"
        data-aos="slide-left"
        data-aos-duration="1500"
      >
        <h2>{skills.title}</h2>
        <TechStack softwareSkills={skills.stack} />
        {skills.skills.map((skill) => {
          return <p className="text--light">{skill}</p>;
        })}
      </div>
    </div>
  );
};

export default SkillsContainer;
