import React from "react";
import { Image } from "react-bootstrap";
import ExperienceCard from "../../components/ExperienceCard";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import { workExperiences } from "../../portfolio";
import "./style.css";

const Experience = () => {
  return (
    <>
      <Header />
      <div
        className="exp__wrapper wrapper--global"
        style={{ overflow: "hidden" }}
      >
        <div data-aos="fade-up" data-aos-duration="1500">
          <div className="exp__header text-center mb-5">
            <h1>Experience</h1>
            <h4>Work and Internship</h4>
          </div>
          <div className="exp__svg text-center mb-5">
            <Image
              src={require("../../assets/images/Experience.svg").default}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="exp__info my-auto">
          {workExperiences.map((exp) => {
            return (
              <ExperienceCard
                role={exp.role}
                company={exp.company}
                desc={exp.desc}
                duration={exp.duration}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
