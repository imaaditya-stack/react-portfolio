import React from "react";
import "./Home.css";

const TechStack = ({ softwareSkills }) => {
  return (
    <ul className="dev-icons">
      {softwareSkills?.map((skills) => {
        return (
          <li className="software-skills-inline">
            <span
              className="iconify"
              data-icon={skills.IconifyClassname}
              style={{ color: skills.color }}
              data-inline="false"
            ></span>
          </li>
        );
      })}
    </ul>
  );
};

export default TechStack;
