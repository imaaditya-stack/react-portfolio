import React from "react";
import { Image } from "react-bootstrap";

const ReactProjectCard = ({ image }) => {
  return (
    <div className="showcase">
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
