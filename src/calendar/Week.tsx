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
        console.log(dayEvents.events.length);
        return (
          <Col key={index}>
            {dayEvents.events.map((event, index) => (
              <div key={index} className="bg-primary">
                Classroom Question
              </div>
            ))}
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
