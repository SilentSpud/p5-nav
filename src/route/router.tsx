import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch as Routes, Route } from "react-router-dom";

// Route imports
import EventCalendar from "../calendar";
import ConfidantList from "../confidants";
import NegotiationInfo from "../negotiation";
import PersonaInfo from "../persona";
import PersonaTable from "../personaList";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode | React.ReactNode[] }) => (
  <LinkContainer to={to}>
    <Nav.Link>{children}</Nav.Link>
  </LinkContainer>
);
const NavSwitch = () => (
  <div className="content">
    <Routes>
      <Route path="/personas" component={PersonaTable} />
      <Route path="/persona/:id" component={PersonaInfo} />
      <Route path="/skills" />
      <Route path="/skill/:id" />
      <Route path="/calendar" component={EventCalendar} />
      <Route path="/confidants" component={ConfidantList} />
      <Route path="/confidant/:id" />
      <Route path="/negotiations" component={NegotiationInfo} />
      <Route path="/negotiation/:id" />
    </Routes>
  </div>
);

export const NavRoutes = () => (
  <Router>
    <Nav variant="tabs" className="bg-dark" navbar justify>
      <NavLink to="/personas">Personas</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/confidants">Confidants</NavLink>
      <NavLink to="/negotiations">Negotiation Questions</NavLink>
    </Nav>
    <NavSwitch />
  </Router>
);
