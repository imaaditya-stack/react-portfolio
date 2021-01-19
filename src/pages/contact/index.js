import React from "react";
import { Image } from "react-bootstrap";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>DISCUSS A PROJECT OR WANT TO SAY HI? MY INBOX IS OPEN FOR ALL :)</p>
      <Image src={require("../../assets/images/contact.svg").default} />
    </div>
  );
};

export default Contact;
