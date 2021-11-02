import React from "react";
import { Table } from "react-bootstrap";
import { NegotiationList, NegotiationReaction as Reaction, NegotiationReactions as Reactions, Negotiations } from "../data";

/*export interface NegotiationReaction {
  unconfirmed?: boolean;
  rate: NegotiationReactions;
}
export enum NegotiationReactions {
  Bad = 0,
  Neutral = 1,
  OK = 2,
  Good = 3,
}*/

const Answer = (props: { value: Reaction | Reactions }) => {
  let ansVal, ansUnk = false;
  switch (typeof props.value) {
    case "number":
      ansVal = props.value;
      break;
    case "object":
      ansVal = props.value.rate;
      ansUnk = props.value.unconfirmed ?? false;
      break;
    default:
      console.log(props.value);
      return null;
  }
  switch (ansVal) {
    case Reactions.Bad: return <td className={`${ansUnk ? 'unconfirmed' : ''}`}>Bad</td>
    case Reactions.Neutral: return <td className={`${ansUnk ? 'unconfirmed' : ''}`}></td>
    case Reactions.OK: return <td className={`${ansUnk ? 'unconfirmed' : ''}`}>Ok</td>
    case Reactions.Good: return <td className={`${ansUnk ? 'unconfirmed' : ''}`}>Good</td>
  }


}

const parseQuestions = (questionList: NegotiationList) => {
  const tableList = [];
  let tNum = 0;
  for (const question in questionList) {
    const answers = questionList[question];

    tableList.push(
      <Table key={tNum} striped bordered hover>
        <thead>
          <tr>
            <th>{question}</th>
            <th>Gloomy</th>
            <th>Irritable</th>
            <th>Timid</th>
            <th>Upbeat</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((ans, i) => (
            <tr key={i}>
              <td>{ans.text}</td>
              <Answer value={ans.gloomy} />
              <Answer value={ans.irritable} />
              <Answer value={ans.timid} />
              <Answer value={ans.upbeat} />
            </tr>
          ))}
        </tbody>
      </Table>
    );
    tNum++;
  }
  return tableList;
}

export const NegotiationInfo = () => {
  const questions = parseQuestions(Negotiations);
  return <div className="questionlist">{questions}</div>;
}
