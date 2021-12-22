import React from "react";
import { addDays, getMonth, getDate } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek, Events, useEvents } from ".";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const padNum = (num: string | number) => ("00" + num.toString()).slice(-2);

const WeekHeader = () => {
  const { week } = useWeek();
  return (
    <Row as="header">
      {theWeek.map((day, i) => {
        const newDate = addDays(week, i);
        return (
          <Col key={i}>
            <span className="left">{day}</span>
            <span className="right">
              {getMonth(newDate) + 1}/{getDate(newDate)}
            </span>
          </Col>
        );
      })}
    </Row>
  );
};

const WeekBody = () => {
  const { week } = useWeek();
  const { getEventsByDate } = useEvents();
  return (
    <Row className="week">
      {Array.from(Array(7)).map((_blank, index) => {
        const date = addDays(week, index);
        const dayEvents = getEventsByDate(date);

        return (
          <Col key={index}>
            <div className="h-25 morning"></div>
            <div className="h-25 afternoon">{dayEvents.events.length > 1 && <div className="bg-primary">Classroom Questions</div>}</div>
            <div className="h-25 evening"></div>
            <div className="h-25 night"></div>
          </Col>
        );
      })}
    </Row>
  );
};

const WeekDay = () => {
  return (
    <Row className="day">
      <Col>Nothing here yet</Col>
    </Row>
  );
};

export const Week = ({ week, setWeek, events }) => (
  <Events events={events}>
    <WeekController week={week} setWeek={setWeek}>
      <WeekNavbar />
      <Container fluid className="weekly">
        <WeekHeader />
        <WeekBody />
        <WeekDay />
      </Container>
    </WeekController>
  </Events>
);
