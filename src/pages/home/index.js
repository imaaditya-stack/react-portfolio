import React from "react";
import { greeting, FullStack, DataScience, Cloud } from "../../portfolio";
import SkillsContainer from "../../containers/Skills";
import GreetingContainer from "../../containers/Greeting";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import "./style.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__wrapper wrapper--global">
        <GreetingContainer greeting={greeting} />
        <center>
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            What I Do?
          </h1>
        </center>
        <SkillsContainer svg="FullStack.svg" skills={FullStack} />
        <SkillsContainer svg="DataScience.svg" skills={DataScience} />
        <SkillsContainer svg="Cloud.svg" skills={Cloud} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
