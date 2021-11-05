import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPersona } from "../data";

export const personaInfo = () => {
  const { id } = useParams<{ id: string }>();
  const Persona = getPersona(decodeURIComponent(id));
  console.log(Persona);
  return (
    <Container>
      <Row>
        <Col>{Persona.name}</Col>
        <Col>{Persona.arcana}</Col>
        <Col>{Persona.level}</Col>
      </Row>
    </Container>
  );
};
