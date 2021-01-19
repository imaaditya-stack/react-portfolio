import React from "react";

const Heading = ({ label, margin }) => {
  return (
    <center>
      <h1 className={margin} data-aos="zoom-in" data-aos-duration="1500">
        {label}
      </h1>
    </center>
  );
};

export default Heading;
