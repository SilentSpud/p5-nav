import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { getPersona } from "../data";

export const PersonaInfo = () => {
  const router = useRouter();
  let { persona } = router.query;
  if (!persona) return null;
  const Persona = getPersona(decodeURIComponent(persona[0]));
  return (
    <Container>
      <Row>
        <Col>{Persona?.name}</Col>
        <Col>{Persona?.arcana}</Col>
        <Col>{Persona?.level}</Col>
      </Row>
    </Container>
  );
};
