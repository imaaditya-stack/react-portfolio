/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Image } from "react-bootstrap";

const ReactProjectCard = ({ image, link }) => {
  return (
    <div className="showcase" data-aos="fade-up" data-aos-duration="1500">
      <Image
        src={require(`../../assets/images/${image}`).default}
        className="img-fluid"
      />
      <div class="overlay">
        <div class="overlay__text">
          <a href={link} target="_blank">
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactProjectCard;
