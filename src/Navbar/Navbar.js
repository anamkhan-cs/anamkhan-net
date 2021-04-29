import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as RRDNavLink } from "react-router-dom";

import { navbar, navitem, navlink, active } from "./Navbar.module.scss";

const NavbarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar vertical>
            <div className={navbar}>
              <NavItem className={navitem}>
                <NavLink
                  to="/"
                  className={navlink}
                  activeClassName={active}
                  tag={RRDNavLink}
                  exact
                >
                  About
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/experiences"
                  className={navlink}
                  activeClassName={active}
                  tag={RRDNavLink}
                  exact
                >
                  Experiences
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/skills"
                  className={navlink}
                  activeClassName={active}
                  tag={RRDNavLink}
                  exact
                >
                  Skills
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/projects"
                  className={navlink}
                  activeClassName={active}
                  tag={RRDNavLink}
                  exact
                >
                  Projects
                </NavLink>
              </NavItem>

              <NavItem className={navitem}>
                <NavLink
                  to="/contact"
                  className={navlink}
                  activeClassName={active}
                  tag={RRDNavLink}
                  exact
                >
                  Contact
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
