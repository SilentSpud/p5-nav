import React from "react";
import 'regenerator-runtime/runtime';
import { prepareTable } from "./personaTable";
import { personaData } from "./../data/PersonaData";
import './style.scss';
import { Tab, Tabs } from "react-bootstrap";

export default function App(): JSX.Element {
  return (<Tabs defaultActiveKey="personas" className="mb-3">
    <Tab eventKey="personas" title="Personas">
      {prepareTable(personaData)}
    </Tab>
  </Tabs>);
}
