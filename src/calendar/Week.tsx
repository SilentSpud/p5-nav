import React from "react";
import { addDays, getMonth, getDate } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek } from ".";
import { Events, useEvents } from "../events";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const or = (cond: boolean, str: string) => (cond ? str : "");

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
  const { getEvents } = useEvents();
  return (
    <Row className="week">
      {Array.from(Array(7)).map((_blank, index) => {
        const date = addDays(week, index);
        const events = getEvents(date);
        const isEvents = !!events.afternoon?.events && events.afternoon.events.length > 0;

        return (
          <Col key={index}>
            <div className="morning"></div>
            <div className={`afternoon ${or(isEvents, "bg-primary")}`}>{or(isEvents, "Classroom Questions")}</div>
            <div className="evening"></div>
            <div className="night"></div>
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

export const Week = ({ week, setWeek }) => (
  <Events>
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
