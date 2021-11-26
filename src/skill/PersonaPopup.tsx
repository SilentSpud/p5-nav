import React from "react";
import { OverlayTrigger, Popover, Table } from "react-bootstrap";
import Link from "next/link";
import { getPersona } from "../data";

export const PersonaPopup = ({ name }): JSX.Element | null => {
  const persona = getPersona(name);
  if (!persona) return null;
  let overlay: JSX.Element = (
    <Popover className="popup arcana-popup">
      <Popover.Header>{persona.name}</Popover.Header>
      <Popover.Body>
        <Table>
          <tbody>
            <tr>
              <td>{persona.level}</td>
            </tr>
          </tbody>
        </Table>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={overlay} rootClose>
      <span className="persona-link">
        <Link href={`/persona/${encodeURIComponent(persona.name)}`}>
          <a>{name}</a>
        </Link>
      </span>
    </OverlayTrigger>
  );
};
