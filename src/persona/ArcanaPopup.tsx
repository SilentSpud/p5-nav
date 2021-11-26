import React from "react";
import { OverlayTrigger, Popover, Table } from "react-bootstrap";
import Link from "next/link";
import { getConfidant } from "../data";

const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const ArcanaPopup = ({ arcana }): JSX.Element | null => {
  const confidant = getConfidant(arcana);
  if (!confidant) return null;
  const isStory = "story" in confidant;
  let overlay: JSX.Element = (
    <Popover className="popup arcana-popup">
      <Popover.Header>
        {camel(confidant.name)}
        {isStory ? " (Story)" : ""}
      </Popover.Header>
      <Popover.Body>
        <Table>
          <tbody>
            <tr>
              {(!isStory && <td>Character:</td>) || null}
              <td>{confidant.character}</td>
            </tr>
          </tbody>
        </Table>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={overlay} rootClose>
      <span className="arcana">
        {isStory ? (
          <>{camel(confidant.name)}</>
        ) : (
          <Link href={`/confidant/${confidant.name}`}>
            <a>{camel(confidant.name)}</a>
          </Link>
        )}
      </span>
    </OverlayTrigger>
  );
};
