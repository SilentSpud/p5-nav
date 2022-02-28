import React, { FC } from "react";
import { OverlayTrigger, Popover, Table } from "react-bootstrap";
import { getStatus, StatusInfo } from "../data";

const Row: FC = ({ children }) => (
  <tr>
    <td>{children}</td>
  </tr>
);

export const StatusPopup = ({ name: statName }): JSX.Element | null => {
  const { name, effects, effect } = getStatus(statName) as StatusInfo;
  let overlay: JSX.Element = (
    <Popover className="popup status-popup">
      <Popover.Header>{name}</Popover.Header>
      <Popover.Body>
        <Table>
          <tbody>
            {effect &&
              effect.map((row, index) => (
                <tr key={index}>
                  <td>{row}</td>
                </tr>
              ))}
            {effects && (
              <>
                {effects.blockAction && <Row>Unable to perform any actions</Row>}
                {effects.blockNegotiate && <Row>Unable to negotiate while afflicted</Row>}
                {effects.blockSkill && <Row>Unable to use any skills</Row>}
                {effects.cureOnHit && <Row>Cured if attacked</Row>}
                {effects.cureOnNegotiate && <Row>Cured if negotiated with</Row>}
              </>
            )}
          </tbody>
        </Table>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={overlay} rootClose>
      <span className="status-link">{name}</span>
    </OverlayTrigger>
  );
};
