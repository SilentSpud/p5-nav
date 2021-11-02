import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPersona } from "../data";

export const personaInfo = (props) => {
  const { id } = useParams<{ id: string }>();
  const Persona = getPersona(decodeURIComponent(id));
  return (
    <Container {...props}>
      <Row>
        <Col>{Persona.name}</Col>
        <Col>{Persona.arcana}</Col>
        <Col>{Persona.level}</Col>
      </Row>
    </Container>
  );
};
