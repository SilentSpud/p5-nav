import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Confidants, Confidant } from "../../data";
import { ConfidantImages } from "../../confidants";

const ConfidantList = (): JSX.Element => {
  const rows: Confidant[][] = [];
  for (let index = 0; index < Confidants.length; index += 10) {
    const row = Confidants.slice(index, index + 10);
    rows.push(row);
  }
  return (
    <>
      <Head>
        <title>Confidants - rNav</title>
      </Head>
      <Container fluid className="confidants">
        {rows.map((row, index) => (
          <Row key={index}>
            {row.map(({ name }, index) => (
              <Col key={index}>
                <Link href={`/confidant/${name}`} passHref>
                  <Card className="confidant">
                    <a>
                      <Card.Img {...ConfidantImages[name]} as={Image} variant="top" layout="fixed" draggable={false} />
                    </a>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </>
  );
};
export default ConfidantList;
