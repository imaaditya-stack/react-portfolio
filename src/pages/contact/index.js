import React from "react";
import { Image } from "react-bootstrap";
import SocialMedia from "../../components/home/SocialMediaIcons";
import { contactInfo } from "../../portfolio";
import "./style.css";

const Contact = () => {
  return (
    <div
      className="contact__wrapper wrapper--global grid--global"
      style={{ overflow: "hidden" }}
    >
      <div
        className="contact__svg"
        data-aos="slide-right"
        data-aos-duration="1500"
      >
        <Image src={require("../../assets/images/contact.svg").default} />
      </div>
      <div
        className="contact__info my-auto"
        data-aos="slide-left"
        data-aos-duration="1500"
      >
        <h1>{contactInfo.title}</h1>
        <p>{contactInfo.subtitle}</p>
        <Image
          src={require("../../assets/images/pic.png").default}
          className="my-picture"
        />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
