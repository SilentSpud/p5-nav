import React from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { ConfidantBenefit, getConfidant } from "../data";

const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const useConfidant = () => {
  const router = useRouter();
  let { confidant } = router.query;
  switch (typeof confidant) {
    case "string":
      break;
    case "object":
      confidant = confidant[0];
    case "undefined":
      return null;
  }
  return getConfidant(confidant);
};


const formatBenefits = (benefits: { [name: string]: ConfidantBenefit }) => {
  const benefitsList: ConfidantBenefit[] = [];
  for (let perkName in benefits) {
    let perk = Object.assign({ name: perkName }, benefits[perkName]);
    benefitsList.push(perk);
  }
  return benefitsList;
};

export const ConfidantInfo = () => {
  const confidant = useConfidant();
  if (!confidant) return null;
  console.log(confidant);
  return (
    <div className="confidant-info">
      <h2>{camel(confidant.name)}</h2>
      <h3>{confidant.character}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          </thead>
        <tbody>
          {confidant.benefits.map((row, index) => (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
