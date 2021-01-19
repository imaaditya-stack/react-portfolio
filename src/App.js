import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Education from "./pages/education";
import Header from "./shared/Header";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
