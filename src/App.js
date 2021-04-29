import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Experiences from "./components/Experiences/Experiences";

import NavbarMenu from "./Navbar/Navbar";

const App = () => (
  <BrowserRouter>
    <NavbarMenu />
    <Route exact path="/" component={Main} />
    <Route exact path="/experiences" component={Experiences} />
    <Route exact path="/skills" />
    <Route exact path="/projects" />
    <Route exact path="/contact" />
  </BrowserRouter>
);

export default App;
