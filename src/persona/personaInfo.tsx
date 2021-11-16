import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { getPersona } from "../data";

export const PersonaInfo = () => {
  const router = useRouter();
  let { persona } = router.query;
  switch (typeof persona) {
    case "string":
      break;
    case "object":
      persona = persona[0];
    case "undefined":
      return null;
  }
  if (!persona) return null;
  const personaInfo = getPersona(decodeURIComponent(persona));
  return (
    <Container>
      <Row>
        <Col>{personaInfo?.name}</Col>
        <Col>{personaInfo?.arcana}</Col>
        <Col>{personaInfo?.level}</Col>
      </Row>
    </Container>
  );
};
