import React from "react";
import { Accordion, Card as BsCard, ListGroup } from "react-bootstrap";
import type { Question, Crossword, Quiz, Hangout } from "../events";

export interface Hangouta {
  type: "hangout";
  location: string;
  end?: string;
  cards: string[];
}

const Card = ({ title, header, children }) => (
  <BsCard className="border-info">
    <BsCard.Header>{title}</BsCard.Header>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </BsCard>
);

const QuestionElement = ({ event }: { event: Question }) => (
  <Card title="Classroom Question" header={event.question}>
    {event.answer}
  </Card>
);
const CrosswordElement = ({ event }: { event: Crossword }) => (
  <Card title="Crossword Puzzle" header={`Puzzle #${event.number}: ${event.word.hint}`}>
    {event.word.word.toUpperCase()}
  </Card>
);
const QuizElement = ({ event }: { event: Quiz }) => (
  <Card title="TV Quiz Show" header="Show Answer">
    ${event.answer ? "B" : "A"}. ${event.text}
  </Card>
);
const HangoutElement = ({ event }: { event: Hangout }) => (
  <Card title="Twins Hangout" header="Show Details">
    <ListGroup variant="flush">
      <ListGroup.Item>Location: {event.location}</ListGroup.Item>
      <ListGroup.Item>{event.end ? `Ends on ${event.end}` : "Always available"}</ListGroup.Item>
      <ListGroup.Item>Cards: {event.cards.join(", ")}</ListGroup.Item>
    </ListGroup>
  </Card>
);

export const renderEvents = (events: (Question | Crossword | Quiz | Hangout)[]) =>
  events.map((event, index) => {
    switch (event.type) {
      case "question":
        return <QuestionElement event={event} key={index} />;
      case "crossword":
        return <CrosswordElement event={event} key={index} />;
      case "quiz":
        return <QuizElement event={event} key={index} />;
      case "hangout":
        return <HangoutElement event={event} key={index} />;
    }
  });
