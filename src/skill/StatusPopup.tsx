import React from "react";
import { OverlayTrigger, Popover, Table } from "react-bootstrap";
import { getStatus, StatusInfo } from "../data";

export const StatusPopup = ({ name: statName }): JSX.Element | null => {
  const { name, effects, effect } = getStatus(statName) as StatusInfo;
  let overlay: JSX.Element = (
    <Popover className="popup status-popup">
      <Popover.Header>{name}</Popover.Header>
      <Popover.Body>
        <Table>
          <tbody>
            {effect && effect.map((row, index) => (
              <tr key={index}>
                <td>{row}</td>
              </tr>
            ))}
            {effects && (
              <>
                {effects.blockAction && (
                  <tr>
                    <td>Unable to perform any actions</td>
                  </tr>
                )}
                {effects.blockNegotiate && (
                  <tr>
                    <td>Unable to negotiate with the target while afflicted</td>
                  </tr>
                )}
                {effects.blockSkill && (
                  <tr>
                    <td>Unable to use any skills</td>
                  </tr>
                )}
                {effects.cureOnHit && (
                  <tr>
                    <td>Cured if the target is attacked</td>
                  </tr>
                )}
                {effects.cureOnNegotiate && (
                  <tr>
                    <td>Cured if the target is negotiated with</td>
                  </tr>
                )}
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
