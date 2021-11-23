import React, { ReactNode } from "react";
import { OverlayTrigger, Popover, Stack, Table } from "react-bootstrap";
import Link from "next/link";
import { getConfidant } from "../data";
const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const Popup = ({ overlay, children }) => (
  <OverlayTrigger trigger={["click", "focus"]} placement="bottom" overlay={overlay} rootClose>
    {children}
  </OverlayTrigger>
);

export const ArcanaPopup = ({ arcana }): JSX.Element | null => {
  const confidant = getConfidant(arcana);
  if (!confidant) return null;
  let overlay: JSX.Element;
  if ("story" in confidant) {
    overlay = (
      <Popover className="popup arcana-popup">
        <Popover.Header>{camel(confidant.name)} (Story)</Popover.Header>
        <Popover.Body>
          <Table>
            <tbody>
              <tr>
                <td>Character:</td>
                <td>{confidant.character}</td>
              </tr>
            </tbody>
          </Table>
        </Popover.Body>
      </Popover>
    );
  } else {
    overlay = (
      <Popover className="popup arcana-popup">
        <Popover.Header>
          <Link href={`/confidant/${confidant.name}`}>
            <a>{camel(confidant.name)} Confidant</a>
          </Link>
        </Popover.Header>
        <Popover.Body>
          <Table>
            <tbody>
              <tr>
                <td>Character:</td>
                <td>{confidant.character}</td>
              </tr>
            </tbody>
          </Table>
        </Popover.Body>
      </Popover>
    );
  }

  return (
    <Popup overlay={overlay}>
      <span className="arcana">{camel(confidant.name)}</span>
    </Popup>
  );
};
