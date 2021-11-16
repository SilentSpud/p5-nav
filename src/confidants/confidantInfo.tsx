import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { getPersona } from "../data";

export const ConfidantInfo = () => {
  const router = useRouter();
  let { persona: confidant } = router.query;
  switch (typeof confidant) {
    case "string":
      break;
    case "object":
      confidant = confidant[0];
    case "undefined":
      return null;
  }
  if (!confidant) return null;
  console.log(confidant);
};
