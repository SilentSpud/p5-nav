import React from "react";
import { Table } from "react-bootstrap";
import { NegotiationList, NegotiationReaction as Reaction, NegotiationReactions as Reactions, Negotiations } from "../data";

const Answer = (props: { value: Reaction | Reactions }) => {
  let ansVal: Reactions,
    ansUnknown = false;
  switch (typeof props.value) {
    case "number":
      ansVal = props.value;
      break;
    case "object":
      ansVal = props.value.rate;
      ansUnknown = props.value.unconfirmed ?? false;
      break;
    default:
      return null;
  }
  switch (ansVal) {
    case Reactions.Bad:
      return <td>Bad{ansUnknown ? "?" : ""}</td>;
    case Reactions.Neutral:
      return <td>{ansUnknown ? "?" : ""}</td>;
    case Reactions.OK:
      return <td>Ok{ansUnknown ? "?" : ""}</td>;
    case Reactions.Good:
      return <td>Good{ansUnknown ? "?" : ""}</td>;
  }
};

const parseQuestions = (questionList: NegotiationList) => {
  const tableList: JSX.Element[] = [];
  let tNum = 0;
  for (const question in questionList) {
    const answers = questionList[question];

    tableList.push(
      <Table key={tNum} bordered>
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
};

export const NegotiationInfo = () => {
  const questions = parseQuestions(Negotiations);
  return <div className="questionlist">{questions}</div>;
};
