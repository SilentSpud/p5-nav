import React from "react";
import { useCalendar } from "./CalendarController";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Icon = FontAwesomeIcon;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const Navbar = () => {
  const { month, onMonthChange } = useCalendar();

  const parseNavClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (evt.currentTarget.classList.contains("prev")) onMonthChange((month.setMonth(month.getMonth() - 1), month));
    else if (evt.currentTarget.classList.contains("next")) onMonthChange((month.setMonth(month.getMonth() + 1), month));
  };

  return (
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true} defaultActiveKey="current">
      <Nav.Item>
        <Nav.Link className="prev" disabled={month.getMonth() === 3} onClick={parseNavClick}>
          <Icon icon={faAngleLeft} /> Previous
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="current" disabled>
          {monthNames[month.getMonth()]}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="next" disabled={month.getMonth() === 2} onClick={parseNavClick}>
          Next <Icon icon={faAngleRight} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navbar;
