import React from "react";

const Heading = ({ label, margin }) => {
  return (
    <center>
      <h1 className={margin}>{label}</h1>
    </center>
  );
};

export default Heading;
