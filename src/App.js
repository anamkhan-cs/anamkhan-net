import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-scroll";
import { Button } from "reactstrap";
import { BrowserRouter, Route } from "react-router-dom";

import NavbarMenu from "./Navbar/Navbar";

const App = () => (
  <BrowserRouter>
    <NavbarMenu />
    <Route path="/" />
    <Route path="/experiences" />
    <Route path="/skills" />
    <Route path="/projects" />
    <Route path="/contact" />
  </BrowserRouter>
);

export default App;
