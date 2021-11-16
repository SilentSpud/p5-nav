import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { getConfidant } from "../data";

const useConfidant = () => {
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
  return getConfidant(confidant);
};

export const ConfidantInfo = () => {
  const confidant = useConfidant();
  if (!confidant) return null;
  console.log(confidant);
  return <p>{confidant.name}</p>;
};
