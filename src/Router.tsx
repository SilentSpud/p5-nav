import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import personaTable from "./personaList/personaTable";


const NavRouter = (params) => {
  return (
    <Router {...params}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <LinkContainer to="/personas"><Nav.Link>Personas</Nav.Link></LinkContainer>
            <LinkContainer to="/skills"><Nav.Link>Skills</Nav.Link></LinkContainer>
            <LinkContainer to="/negotiation"><Nav.Link>Negotiation</Nav.Link></LinkContainer>
            <LinkContainer to="/confidants"><Nav.Link>Confidants</Nav.Link></LinkContainer>
            <LinkContainer to="/questions"><Nav.Link>Questions</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/personas">
          {personaTable()}
        </Route>
        <Route path="/persona/:id" />
        <Route path="/skills">

        </Route>
        <Route path="/skill/:id" />
        <Route path="/negotiations">

        </Route>
        <Route path="/negotiation/:id" />
        <Route path="/confidants">

        </Route>
        <Route path="/confidant/:id" />
        <Route path="/questions">

        </Route>
      </Switch>
    </Router>
  );
};
export default NavRouter;

/*<Tabs defaultActiveKey="personas" className="mb-3">
    <Tab eventKey="personas" title="Personas">
      {personaTable()}
      <PersonaPopup></PersonaPopup>
    </Tab>
    <Tab eventKey="confidants" title="Confidants">
      <ConfidantsInfo></ConfidantsInfo>
    </Tab>
  </Tabs>*/
