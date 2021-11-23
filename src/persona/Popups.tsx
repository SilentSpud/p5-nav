import React from "react";
import { OverlayTrigger, Popover, Table } from "react-bootstrap";
import Link from "next/link";
import { getConfidant } from "../data";
const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const Popup = ({ overlay, children }) => (
  <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={overlay} rootClose>
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
        <Popover.Header>{camel(confidant.name)}</Popover.Header>
        <Popover.Body>
          <Table>
            <tbody>
              <tr>
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
      <span className="arcana">
        <Link href={`/confidant/${confidant.name}`}>
          <a>{camel(confidant.name)}</a>
        </Link>
      </span>
    </Popup>
  );
};
