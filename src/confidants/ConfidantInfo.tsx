import React from "react";
import { Table } from "react-bootstrap";
import { useConfidant } from ".";
import { ConfidantRank, RankMetadata } from "../data";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMinus, faAngleUp, faAnglesUp, faArrowUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";

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
      {ranks.map((rank, index) => parseRow(rank, index))}
    </section>
  );
}

const tableHead = ({ rank, meta }: { rank: string | number; meta: RankMetadata | undefined }) => (
  <thead>
    <tr>
      <th colSpan={4}>{rank == "Max" ? "Max" : `Rank ${rank}`}</th>
    </tr>
    {meta &&
      <tr>
        <th colSpan={4}><pre>{JSON.stringify(meta)}</pre></th>
      </tr>
    }
  </thead>
)

const Points = ({ points, max }: { points: number; max: boolean }): JSX.Element => {
  let symbol: IconDefinition = faMinus;
  switch (points) {
    case 1: symbol = faAngleUp; break;
    case 2: symbol = faAnglesUp; break;
    case 3: symbol = faArrowUp; break;
  }
  return (
    <span className="answer-points"><Icon icon={symbol} className={max ? "max-points" : "bad-points"} title={`+${points}`}/></span>
  )
}

const parseRow = (rank: ConfidantRank, index: number) => {
  return (
    <Table striped bordered key={index}>
      <tbody>
        {rank.questions && rank.questions.map((question, index) => (
          <tr key={index}>
            <td>{question.number == "Follow-up" ? "Follow-up" : `Response ${question.number}`}</td>
            {question.answers && question.answers.map((answer, index) => {
              return <td key={index}>{answer.answer} <Points points={answer.points} max={answer.max ?? false} /></td>
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export const ConfidantInfo = {
  intro: ConfidantIntro,
  benefits: ConfidantBenefits,
  answers: ConfidantAnswers
}
export default ConfidantInfo;
