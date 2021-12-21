import React, { useMemo } from "react";
import { addDays, isSameDay, getMonth, getDate } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek } from ".";
import { Event } from "../calendar";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const padNum = (num: string | number) => ("00" + num.toString()).slice(-2);

const WeekHeader = () => {
  const { week } = useWeek();
  return (
    <Row as="header">{theWeek.map((day, i) => {
      const newDate = addDays(week, i);
      return (
        <Col key={i}>
          {day}, {getMonth(newDate) + 1}/{padNum(getDate(newDate))}
        </Col>
      );
    })}</Row>
  );
};

const WeekBody = () => {
  const { week, events } = useWeek();
  return (
    <Row className="week">
      {Array.from(Array(7)).map((_blank, index) => {
        const date = addDays(week, index);
        const dayEvents = events.filter(({ date: eventDate }) => isSameDay(date, eventDate));
        return (
          <Col key={index}>
            {dayEvents.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </Col>
        );
      })}
    </Row>
  );
};

export const Week = ({ week, setWeek, events }) => (
  <WeekController week={week} setWeek={setWeek} events={events}>
    <WeekNavbar />
    <Container fluid className="weekly">
      <WeekHeader />
      <WeekBody />
      <Row className="day">
        <Col></Col>
      </Row>
    </Container>
  </WeekController>
);
