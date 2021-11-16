import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { getConfidant } from "../data";

export const ConfidantInfo = () => {
  const router = useRouter();
  let { confidant } = router.query;
  switch (typeof confidant) {
    case "string":
      break;
    case "object":
      confidant = confidant[0];
    case "undefined":
      return null;
  }
  const confidantInfo = getConfidant(confidant);
  if (!confidantInfo) return null;
  console.log(confidantInfo);
  return (
    <p>{confidantInfo.name}</p>
  )
};
