import React from "react";
import 'regenerator-runtime/runtime';
import personaTable from "./personaTable";
import './style.scss';
import { Tab, Tabs } from "react-bootstrap";

export default function App(): JSX.Element {
  return (<Tabs defaultActiveKey="personas" className="mb-3">
    <Tab eventKey="personas" title="Personas">
      {personaTable()}
    </Tab>
  </Tabs>);
}
