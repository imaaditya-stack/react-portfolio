import React from "react";
import { Image } from "react-bootstrap";
import "./Fallback.css";

const Fallback = () => {
  return (
    <div className="vertically--centered--wrapper fallback">
      <Image
        src={require("../assets/images/loading.svg").default}
        className="img-fluid"
      />
    </div>
  );
};

export default Fallback;
