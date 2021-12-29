import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import type { Question, Crossword, Quiz, Hangout } from "../events";

export interface Hangouta {
  type: "hangout";
  location: string;
  end?: string;
  cards: string[];
}

const QuestionElement = ({ event }: { event: Question }) => (
  <Card className="border-info">
    <Card.Header>Classroom Question</Card.Header>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{event.question}</Accordion.Header>
        <Accordion.Body>{event.answer}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Card>
);
const CrosswordElement = ({ event }: { event: Crossword }) => (
  <Card className="border-info">
    <Card.Header>Crossword Puzzle</Card.Header>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Puzzle #{event.number}: {event.word.hint}
        </Accordion.Header>
        <Accordion.Body>{event.word.word.toUpperCase()}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Card>
);
const QuizElement = ({ event }: { event: Quiz }) => (
  <Card className="border-info">
    <Card.Header>TV Quiz Show</Card.Header>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Show Answer</Accordion.Header>
        <Accordion.Body>{event.answer ? "B" : "A"}. {event.text}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Card>
);
const HangoutElement = ({ event }: { event: Hangout }) => (
  <Card className="border-info">
    <Card.Header>Twins Hangout</Card.Header>
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Show Details</Accordion.Header>
        <Accordion.Body className="p-0">
          <ListGroup variant="flush">
            <ListGroup.Item>Location: {event.location}</ListGroup.Item>
            <ListGroup.Item>{event.end ? `Ends on ${event.end}` : "Always available"}</ListGroup.Item>
            <ListGroup.Item>Cards: {event.cards.join(", ")}</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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
