import React from "react";
import { greeting, FullStack, DataScience, Cloud } from "../../portfolio";
import SkillsContainer from "../../containers/Skills";
import GreetingContainer from "../../containers/Greeting";
import "./style.css";

const Home = () => {
  return (
    <div className="home__wrapper">
      <GreetingContainer greeting={greeting} />
      <center>
        <h1>What I Do?</h1>
      </center>
      <SkillsContainer svg="FullStack.svg" skills={FullStack} />
      <SkillsContainer svg="DataScience.svg" skills={DataScience} />
      <SkillsContainer svg="Cloud.svg" skills={Cloud} />
    </div>
  );
};

export default Home;
