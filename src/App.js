import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, glide } from "react-tiger-transition";
import { Row, Col } from "reactstrap";

import Main from "./components/Main/Main";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import NavbarMenu from "./Navbar/Navbar";

glide({
  name: "glide-bottom",
  direction: "bottom",
});
glide({
  name: "glide-top",
  direction: "top",
});

document.getElementById("root").style.height = "100vh";

const App = () => (
  <Router>
    <Navigation>
      <Row>
        <Col sm="2">
          <NavbarMenu />
        </Col>

        <Route exact path="/" screen>
          <Col sm="10">
            <Main />
          </Col>
        </Route>

        <Route exact path="/experience" screen>
          <Col sm="10">
            <Experience />
          </Col>
        </Route>

        <Route exact path="/skills" screen>
          <Col sm="10">
            <Skills />
          </Col>
        </Route>

        <Route exact path="/projects" screen>
          <Col sm="10">
            <Projects />
          </Col>
        </Route>

        <Route exact path="/contact" screen>
          <Col sm="10">
            <Contact />
          </Col>
        </Route>
      </Row>
    </Navigation>
  </Router>
);

export default App;
