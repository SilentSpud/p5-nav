import React from "react";
import { addWeeks, subWeeks, getMonth, getDate, isBefore, isAfter } from "date-fns";
import { Nav } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useWeek } from ".";

type AClickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

export const WeekNavbar = () => {
  const { week, setWeek } = useWeek();

  const parseNavClick = ({ currentTarget: { classList } }: AClickEvent) => {
    if (classList.contains("prev")) setWeek(subWeeks(week, 1));
    else if (classList.contains("next")) setWeek(addWeeks(week, 1));
  };

  return (
    <Nav variant="tabs" navbar={true} justify={true} defaultActiveKey="current">
      <Nav.Item>
        <Nav.Link className="prev" disabled={isBefore(week, new Date(2016, 3, 9))} onClick={parseNavClick}>
          <FaAngleLeft />
          Previous
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="current" disabled>
          {`Week of ${getMonth(week) + 1}/${getDate(week)}`}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="next" disabled={isAfter(week, new Date(2017, 1, 15))} onClick={parseNavClick}>
          Next
          <FaAngleRight />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default WeekNavbar;
