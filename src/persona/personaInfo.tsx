import React from "react";
import { Table } from "react-bootstrap";
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
    <Table>
      <tbody>
        <tr><td>Name:</td><td>{personaInfo?.name}</td></tr>
        <tr><td>Arcana:</td><td>{personaInfo?.arcana}</td></tr>
        <tr><td>Level:</td><td>{personaInfo?.level}</td></tr>
      </tbody>
    </Table>
  );
};
