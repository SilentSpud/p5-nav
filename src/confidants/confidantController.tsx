import React from "react";
import { useRouter } from "next/router";
import { Confidant, ConfidantInfo } from ".";

export const ConfidantDetails = () => {
  const router = useRouter();
  let { confidant: confidantName } = router.query;
  switch (typeof confidantName) {
    case "string":
      break;
    case "object":
      confidantName = confidantName[0];
    case "undefined":
      return null;
  }
  return (
    <Confidant confidant={confidantName}>
      <ConfidantInfo.intro />
      <ConfidantInfo.benefits />
      <ConfidantInfo.answers />
    </Confidant>
  );
};
