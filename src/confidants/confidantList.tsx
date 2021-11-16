import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Confidant, Confidants } from "../data";

export const ConfidantList = (): JSX.Element => {
  const rows: Confidant[][] = [];
  for (let i = 0; i < Confidants.length; i += 5) {
    const row = Confidants.slice(i, i + 5);
    rows.push(row);
  }

  return (
    <Container fluid>
      {rows.map((row, index) => (
        <Row key={index}>
          {row.map((confidant, index) => (
            <Col key={index}>
              <Card className="confidant">
                <Card.Img variant="top" src={""} />
                <Card.Body>
                  <Card.Title>{confidant.name}</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{confidant.character}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};
