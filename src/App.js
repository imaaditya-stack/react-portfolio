import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Education from "./pages/education";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import SplashScreen from "./pages/splash";
import PageNotFound from "./shared/PageNotFound";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const appHeight = () => {
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", appHeight);
  appHeight();

  AOS.init({});

  return (
    <Router>
      <Switch>
        <Route path="/" component={SplashScreen} exact />
        <Route path="/home" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
