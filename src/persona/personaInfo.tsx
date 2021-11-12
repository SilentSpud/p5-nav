import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from 'next/router';
import { getPersona } from "../data";

export const personaInfo = () => {
  const router = useRouter()
  let { persona } = router.query;
  persona = (typeof persona == "string") ? persona : persona[0];
  const Persona = getPersona(decodeURIComponent(persona));
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
