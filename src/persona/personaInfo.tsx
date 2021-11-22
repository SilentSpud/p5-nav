import React from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import { parseNameTags } from "../personaList";
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
  const info = getPersona(decodeURIComponent(persona));
  if (!persona || !info) return null;
  return (
    <div className="persona-info">
      <h1>{parseNameTags(info)}</h1>
      <Table>
        <tbody>
          <tr>
            <td>Arcana:</td>
            <td>{info.arcana}</td>
          </tr>
          <tr>
            <td>Level:</td>
            <td>{info.level}</td>
          </tr>
          {info.trait && (
            <tr>
              <td>Trait:</td>
              <td>{info.trait}</td>
            </tr>
          )}
          {info.inherits && (
            <tr>
              <td>Inherits:</td>
              <td>{info.inherits}</td>
            </tr>
          )}
          {info.item && (
            <tr>
              <td>Execution Item:</td>
              <td>{info.item}</td>
            </tr>
          )}
          {info.alarmItem && (
            <tr>
              <td>Alarm Item:</td>
              <td>{info.alarmItem}</td>
            </tr>
          )}
        </tbody>
      </Table>
      {info.shadow && (
        <Table>
          <thead>
            <tr>
              <th colSpan={2}>Shadow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shadow:</td>
              <td>{info.shadow}</td>
            </tr>
            <tr>
              <td>Personality:</td>
              <td>{info.personality}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};