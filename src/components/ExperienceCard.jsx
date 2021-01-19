import React from "react";

const ExperienceCard = ({ role, company, desc, duration }) => {
  return (
    <div
      className="exp__card"
      data-aos="slide-right"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
    >
      <div className="exp__details">
        <h5>{role}</h5>
        <p className="mb-2 text--light">{company}</p>
        <p className="mb-0 text--light exp__desc">{desc}</p>
      </div>
      <div className="exp__year">
        <p className="mb-0 text--light exp__year">{duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
