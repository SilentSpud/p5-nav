import React from "react";
import { useMonthlyCalendar } from "@zach.codes/react-calendar";
import { Nav } from "react-bootstrap";

const monthList = ["January", "February", "", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const Navbar = () => {
  const { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();
  const isFirstMonth = currentMonth.getMonth() === 3;
  const isLastMonth = currentMonth.getMonth() === 1;

  const parseNavClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (evt.currentTarget.classList.contains("prev")) onCurrentMonthChange((currentMonth.setMonth(currentMonth.getMonth() - 1), currentMonth));
    else if (evt.currentTarget.classList.contains("next")) onCurrentMonthChange((currentMonth.setMonth(currentMonth.getMonth() + 1), currentMonth));
  };

  return (
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true} defaultActiveKey="current">
      <Nav.Item>
        <Nav.Link className="prev" disabled={isFirstMonth} onClick={parseNavClick}>
          Previous
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="current" disabled>
          {monthList[currentMonth.getMonth()]}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="next" disabled={isLastMonth} onClick={parseNavClick}>
          Next
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navbar;
