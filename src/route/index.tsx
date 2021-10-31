import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import personaTable from "../personaList";

const NavLink = (params) => <LinkContainer to={params.to}><Nav.Link>{params.children}</Nav.Link></LinkContainer>;
const NavSwitch = (params) => (
  <Switch {...params}>
    <Route path="/personas" component={personaTable} />
    <Route path="/persona/:id" />
    <Route path="/skills" />
    <Route path="/skill/:id" />
    <Route path="/negotiations" />
    <Route path="/negotiation/:id" />
    <Route path="/confidants" />
    <Route path="/confidant/:id" />
    <Route path="/questions" />
  </Switch>
)

const Routes = (params) => (
  <Router {...params}>
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true}>
      <NavLink to="/personas">Personas</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/negotiation">Negotiation Questions</NavLink>
      <NavLink to="/confidants">Confidants</NavLink>
      <NavLink to="/questions">Classroom Questions</NavLink>
    </Nav>
    <NavSwitch />
  </Router>
);
export default Routes;
