import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link';
import { Confidants } from "../data";
import type { Confidant } from "../data";
import ConfidantImages from "./confidantImages";

export const ConfidantList = (): JSX.Element => {
  const rows: Confidant[][] = [];
  for (let index = 0; index < Confidants.length; index += 10) {
    const row = Confidants.slice(index, index + 10);
    rows.push(row);
  }

  return (
    <Container fluid className="confidants">
      {rows.map((row, index) => (
        <Row key={index}>
          {row.map((confidant, index) => (
            <Col key={index}>
              <Link href={`/confidant/${confidant.name}`} passHref>
                <a>
                  <Card className="confidant">
                    <Card.Img as={Image} variant="top" src={ConfidantImages[confidant.name]} width={170} height={300} layout="fixed" draggable={false} />
                  </Card>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};
