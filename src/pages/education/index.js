import React from "react";
import { Image } from "react-bootstrap";
import EducationCard from "../../components/EducationCard";
import CertCard from "../../components/CertCard";
import { achievementSection } from "../../portfolio";
import "./style.css";

const Education = () => {
  return (
    <>
      <div
        className="education__wrapper wrapper--global"
        style={{ overflow: "hidden" }}
      >
        <div className="degree__wrapper">
          <center>
            <h1 data-aos="fade-up" data-aos-duration="1500">
              Education
            </h1>
          </center>
          <div
            className="education__svg text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Image
              src={require("../../assets/images/Education.svg").default}
              className="img-fluid"
            />
          </div>
          <div
            className="education__info my-auto"
            data-aos="slide-right"
            data-aos-duration="1500"
            data-aos-easing="ease-out-back"
            data-aos-delay="1000"
          >
            <EducationCard />
          </div>
        </div>
        <center>
          <h1 className="my-5" data-aos="fade-up" data-aos-duration="1500">
            {achievementSection.title}
          </h1>
        </center>
        <div
          className="cert__svg text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Image
            src={require("../../assets/images/cert.svg").default}
            className="img-fluid"
          />
        </div>
        <div
          className="certification__wrapper grid--global"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {achievementSection.achievementsCards.map((ach) => {
            return (
              <CertCard title={ach.title} link={ach.url} reference={ach.ref} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
