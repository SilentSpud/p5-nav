import React from "react";
import { Table } from "react-bootstrap";
import { NegotiationList, NegotiationAnswer, NegotiationReaction as Reaction, NegotiationReactions as Reactions } from "../data";

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

const QuestionTable = ({ question, answers }: { question: string; answers: NegotiationAnswer[] }) => {
  return (
    <Table bordered variant="dark">
      <thead>
        <tr>
          <th colSpan={5} className="question">
            {question}
          </th>
        </tr>
        <tr>
          <th></th>
          <th>Gloomy</th>
          <th>Irritable</th>
          <th>Timid</th>
          <th>Upbeat</th>
        </tr>
      </thead>
      <tbody>
        {answers.map((answer, index) => (
          <tr key={index}>
            <td>{answer.text}</td>
            <Answer value={answer.gloomy} />
            <Answer value={answer.irritable} />
            <Answer value={answer.timid} />
            <Answer value={answer.upbeat} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const QuestionList = ({ questions }: { questions: NegotiationList }) => {
  const tableList: JSX.Element[] = [];
  for (const question in questions) {
    tableList.push(<QuestionTable key={question} question={question} answers={questions[question]} />);
  }
  return <>{tableList}</>;
};
