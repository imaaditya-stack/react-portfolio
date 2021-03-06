import React from "react";
import SocialMedia from "../components/home/SocialMediaIcons";
import { Image, Button } from "react-bootstrap";

const GreetingContainer = ({ greeting }) => {
  return (
    <div
      className="greeting__wrapper grid--global"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="greeting__content my-auto">
        <h1>{greeting.title} 👋</h1>
        <p className="text--light">{greeting.subTitle}</p>
        <SocialMedia />
        <Button
          className="button--global"
          size="sm"
          href={greeting.resumeLink}
          target="_blank"
        >
          View my resume
        </Button>
      </div>
      <div className="greeting__image">
        <Image
          src={require("../assets/images/Greeting.svg").default}
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default GreetingContainer;
