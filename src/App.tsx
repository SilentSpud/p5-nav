import React from "react";
import personaTable from "./personaTable";
import './style.scss';
import { Tab, Tabs } from "react-bootstrap";
import ConfidantsInfo from "./ConfidantsInfo";

export default function App(): JSX.Element {
  return (<Tabs defaultActiveKey="personas" className="mb-3">
    <Tab eventKey="personas" title="Personas">
      {personaTable()}
    </Tab>
    <Tab eventKey="confidants" title="Confidants">
      <ConfidantsInfo></ConfidantsInfo>
    </Tab>
  </Tabs>);
}
