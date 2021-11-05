import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NegotiationInfo from "../negotiation";
import personaInfo from "../persona";
import personaTable from "../personaList";

const NavLink = (params) => (
  <LinkContainer to={params.to}>
    <Nav.Link>{params.children}</Nav.Link>
  </LinkContainer>
);
const NavSwitch = (params) => (
  <div className={"content"}>
    <Switch {...params}>
      <Route path="/personas" component={personaTable} />
      <Route path="/persona/:id" component={personaInfo} />
      <Route path="/skills" />
      <Route path="/skill/:id" />
      <Route path="/negotiations" component={NegotiationInfo} />
      <Route path="/negotiation/:id" />
      <Route path="/confidants" />
      <Route path="/confidant/:id" />
      <Route path="/questions" />
    </Switch>
  </div>
);

export const Routes = (params) => (
  <Router {...params}>
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true}>
      <NavLink to="/personas">Personas</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/negotiations">Negotiation Questions</NavLink>
      <NavLink to="/confidants">Confidants</NavLink>
      <NavLink to="/questions">Classroom Questions</NavLink>
    </Nav>
    <NavSwitch />
  </Router>
);
