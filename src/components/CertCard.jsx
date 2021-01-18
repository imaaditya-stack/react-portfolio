import React from "react";
import { Button } from "react-bootstrap";

const CertCard = ({ title, reference, link }) => {
  return (
    <div className="cert__card">
      <center>
        <h5>{title}</h5>
        <p className="text--light">{reference}</p>
        <Button className="button--global" href={link}>
          View Certificate
        </Button>
      </center>
    </div>
  );
};

export default CertCard;
