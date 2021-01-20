import React from "react";
import { Image } from "react-bootstrap";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="vertically--centered--wrapper pageNotFound--wrapper">
      <Image
        src={require("../assets/images/404.svg").default}
        className="img-fluid"
      />
    </div>
  );
};

export default PageNotFound;
