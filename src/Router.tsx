import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import personaTable from "./personaList";


const NavRouter = (params) => (
  <Router {...params}>
    <Navbar bg="dark" variant="dark">
        <Nav>
          <LinkContainer to="/personas"><Nav.Link>Personas</Nav.Link></LinkContainer>
          <LinkContainer to="/skills"><Nav.Link>Skills</Nav.Link></LinkContainer>
          <LinkContainer to="/negotiation"><Nav.Link>Negotiation</Nav.Link></LinkContainer>
          <LinkContainer to="/confidants"><Nav.Link>Confidants</Nav.Link></LinkContainer>
          <LinkContainer to="/questions"><Nav.Link>Questions</Nav.Link></LinkContainer>
        </Nav>
    </Navbar>
    <Switch>
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
  </Router>
);
export default NavRouter;
