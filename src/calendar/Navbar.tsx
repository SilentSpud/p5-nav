import React from "react";
import { format, addMonths, subMonths, isSameDay, parseISO } from 'date-fns';
import { useMonthlyCalendar } from '@zach.codes/react-calendar';
import { Nav } from "react-bootstrap";

export const Navbar = () => {
  const { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();

  const isFirst = isSameDay(currentMonth, parseISO("2016-04-01"));
  const isLast = isSameDay(currentMonth, parseISO("2016-12-01"));

  const parseNavClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (evt.currentTarget.classList.contains("prev")) onCurrentMonthChange(subMonths(currentMonth, 1));
    else if (evt.currentTarget.classList.contains("next")) onCurrentMonthChange(addMonths(currentMonth, 1));
  }

  return (
    <Nav variant="tabs" className="bg-dark" navbar={true} justify={true} defaultActiveKey="current">
      <Nav.Item><Nav.Link className="prev" disabled={isFirst} onClick={parseNavClick}>Previous</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="current" disabled>{format(currentMonth, 'LLLL')}</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link className="next" disabled={isLast} onClick={parseNavClick}>Next</Nav.Link></Nav.Item>
    </Nav>
  );
};
export default Navbar;
