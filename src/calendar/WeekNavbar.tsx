import React from "react";
import { addWeeks, subWeeks, getWeekOfMonth, getMonth, getYear, getDate } from "date-fns";
import { Nav } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useWeek } from ".";

type AClickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

const isStart = (week: Date) => getYear(week) === 2016 && (getMonth(week) < 3 || (getMonth(week) === 3 && getWeekOfMonth(week) === 2));
const isEnd = (week: Date) => getYear(week) === 2017 && (getMonth(week) > 2 || (getMonth(week) === 2 && getWeekOfMonth(week) === 5));

export const WeekNavbar = () => {
  const { week, setWeek } = useWeek();
  getYear(week);

  const parseNavClick = ({ currentTarget: { classList } }: AClickEvent) => {
    if (classList.contains("prev")) setWeek(subWeeks(week, 1));
    else if (classList.contains("next")) setWeek(addWeeks(week, 1));
  };

  return (
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true} defaultActiveKey="current">
      <Nav.Item>
        <Nav.Link className="prev" disabled={isStart(week)} onClick={parseNavClick}>
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
        <Nav.Link className="next" disabled={isEnd(week)} onClick={parseNavClick}>
          Next
          <FaAngleRight />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default WeekNavbar;
