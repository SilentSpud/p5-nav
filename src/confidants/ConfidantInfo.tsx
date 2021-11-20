import React from "react";
import { Table } from "react-bootstrap";
import { useConfidant } from ".";

const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const ConfidantIntro = () => {
  const { name, character } = useConfidant();

  return (
    <section className="confidant-intro">
      <h2>{camel(name)}</h2>
      <h3>{character}</h3>
    </section>
  )
}

export const ConfidantBenefits = () => {
  const { benefits } = useConfidant();
  return (
    <section className="confidant-benefits">
      <Table striped bordered>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((row, index) => (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  )
}

export const ConfidantAnswers = () => {
  const { ranks } = useConfidant();

  return (
    <section className="confidant-answers">
      {ranks.map((rank, index) => {

        return (
          <div className="rank" key={index}>
            <h4>Rank {rank.rank}</h4>
          </div>
        )
      })}
    </section>
  );
}
export const ConfidantInfo = {
  intro: ConfidantIntro,
  benefits: ConfidantBenefits,
  answers: ConfidantAnswers
}
export default ConfidantInfo;
