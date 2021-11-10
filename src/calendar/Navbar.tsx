import React from "react";
import { useMonthlyCalendar } from "./CalendarController";
import { Nav } from "react-bootstrap";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const Navbar = () => {
  const { currentMonth, onMonthChange } = useMonthlyCalendar();

  const parseNavClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (evt.currentTarget.classList.contains("prev")) onMonthChange((currentMonth.setMonth(currentMonth.getMonth() - 1), currentMonth));
    else if (evt.currentTarget.classList.contains("next")) onMonthChange((currentMonth.setMonth(currentMonth.getMonth() + 1), currentMonth));
  };

  return (
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true} defaultActiveKey="current">
      <Nav.Item>
        <Nav.Link className="prev" disabled={currentMonth.getMonth() === 3} onClick={parseNavClick}>
          Previous
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="current" disabled>
          {monthNames[currentMonth.getMonth()]}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="next" disabled={currentMonth.getMonth() === 1} onClick={parseNavClick}>
          Next
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navbar;
