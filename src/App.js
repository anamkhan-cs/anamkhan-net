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
import { play, exit } from "./timelines/index";

const App = () => (
  <Router>
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
                    <Main />
                  </Route>

                  <Route exact path="/experience">
                    <Experience />
                  </Route>

                  <Route exact path="/skills">
                    <Skills />
                  </Route>

                  <Route exact path="/projects">
                    <Projects />
                  </Route>

                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                </Switch>
              </Transition>
            </TransitionGroup>
          </>
        );
      }}
    />

    <NavbarMenu />
  </Router>
);

export default App;
