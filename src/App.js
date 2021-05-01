import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "reactstrap";
import {
  TransitionGroup,
  CSSTransition as Transition,
} from "react-transition-group";

import Main from "./components/Main/Main";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import NavbarMenu from "./Navbar/Navbar";
import { play, exit } from "./timelines";

const App = () => (
  <Router>
    <Row>
      <Route
        render={({ location }) => {
          const { pathname, key } = location;

          return (
            <>
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <Col xs="10">
                        <Main />
                      </Col>
                    </Route>

                    <Route exact path="/experience">
                      <Col xs="10">
                        <Experience />
                      </Col>
                    </Route>

                    <Route exact path="/skills">
                      <Col xs="10">
                        <Skills />
                      </Col>
                    </Route>

                    <Route exact path="/projects">
                      <Col xs="10">
                        <Projects />
                      </Col>
                    </Route>

                    <Route exact path="/contact">
                      <Col xs="10">
                        <Contact />
                      </Col>
                    </Route>
                  </Switch>
                </Transition>
              </TransitionGroup>
            </>
          );
        }}
      />
      <Col xs="2">
        <NavbarMenu />
      </Col>
    </Row>
  </Router>
);

export default App;
