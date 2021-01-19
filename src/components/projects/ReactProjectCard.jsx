import React from "react";
import { Image } from "react-bootstrap";

const ReactProjectCard = ({ image }) => {
  return (
    <div className="showcase" data-aos="fade" data-aos-duration="1500">
      <Image
        src={require(`../../assets/images/${image}`).default}
        className="img-fluid"
      />
      <div class="overlay">
        <div class="overlay__text">View on Github</div>
      </div>
    </div>
  );
};

export default ReactProjectCard;
