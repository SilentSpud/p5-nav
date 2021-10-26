import React from "react";
import jsdom from "jsdom";
import fetch from 'node-fetch';
import confidants from "../data/confidants";


const getTestConfidant = () => {
  let name = 'chariot';
  let con = confidants['name'];
  return con;
};

const Confidant = (): JSX.Element => {
  let testData = getTestConfidant();
  return (<div>Test: {testData}</div>);
}
export default Confidant;
