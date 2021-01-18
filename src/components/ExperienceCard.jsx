import React from "react";

const ExperienceCard = ({ role, company, desc, duration }) => {
  return (
    <div className="exp__card">
      <div className="exp__details">
        <h5>{role}</h5>
        <p className="mb-2 text--light">{company}</p>
        <p className="mb-0 text--light">{desc}</p>
      </div>
      <div className="exp__year">
        <p className="mb-0 text--light">{duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
