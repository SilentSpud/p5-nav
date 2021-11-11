import React from "react";
import { Card, Popover } from "react-bootstrap";
import { Question } from "../data";

export const ClassPopup = (questions: Question[]) => (
  <Popover>
    <Popover.Header as="h3">Classroom Questions</Popover.Header>
    <Popover.Body>
      {questions.map((question, index) => (
        <Card key={index} border="light">
          <Card.Header>{question.question}</Card.Header>
          <Card.Body>
            {question.answer.map((answer, i) => (
              <Card.Text key={i}>{answer}</Card.Text>
            ))}
          </Card.Body>
        </Card>
      ))}
    </Popover.Body>
  </Popover>
);
