import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import classnames from "classnames";
import { NavLink as RRDNavlink } from "react-router-dom";

import {
  navbar,
  navitem,
  navlink,
  navbartoggler,
  activelink,
} from "./Navbar.module.scss";

const NavbarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Container fluid>
      <Navbar
        light
        expand="sm"
        className="p-0 d-flex align-items-end justify-content-end"
        fixed="top"
      >
        <NavbarToggler
          onClick={toggle}
          className={classnames("ml-4", navbartoggler)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar vertical>
            <div className={navbar}>
              <NavItem className={navitem}>
                <NavLink
                  to="/"
                  exact
                  className={navlink}
                  activeClassName={activelink}
                  tag={RRDNavlink}
                >
                  About
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/experience"
                  exact
                  className={navlink}
                  activeClassName={activelink}
                  tag={RRDNavlink}
                >
                  Experience
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/skills"
                  exact
                  className={navlink}
                  activeClassName={activelink}
                  tag={RRDNavlink}
                >
                  Skills
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/projects"
                  exact
                  className={navlink}
                  activeClassName={activelink}
                  tag={RRDNavlink}
                >
                  Projects
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/contact"
                  exact
                  className={navlink}
                  activeClassName={activelink}
                  tag={RRDNavlink}
                >
                  Contact
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarMenu;
