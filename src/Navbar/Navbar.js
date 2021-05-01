import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
// import { NavLink as RRDNavLink, NavLink } from "react-router-dom";

import { Link, glide } from "react-tiger-transition";
import { navbar, navitem, navlink, navbartoggler } from "./Navbar.module.scss";
import "react-tiger-transition/styles/main.min.css";

// inject css
glide({
  name: "glide-top",
  direction: "top",
});

const NavbarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="lg" className="p-0" fixed="top">
      <NavbarToggler
        onClick={toggle}
        className="ml-4"
        className={navbartoggler}
      />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar vertical>
          <div className={navbar}>
            <NavItem className={navitem}>
              <Link to="/" transition="glide-top" exact className={navlink}>
                About
              </Link>
            </NavItem>

            <NavItem className={navitem}>
              <Link
                to="/experience"
                transition="glide-top"
                exact
                className={navlink}
              >
                Experiences
              </Link>
            </NavItem>

            <NavItem className={navitem}>
              <Link
                to="/skills"
                transition="glide-top"
                exact
                className={navlink}
              >
                Skills
              </Link>
            </NavItem>

            <NavItem className={navitem}>
              <Link
                to="/projects"
                transition="glide-top"
                exact
                className={navlink}
              >
                Projects
              </Link>
            </NavItem>

            <NavItem className={navitem}>
              <Link
                to="/contact"
                transition="glide-top"
                exact
                className={navlink}
              >
                Contact
              </Link>
            </NavItem>
          </div>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
