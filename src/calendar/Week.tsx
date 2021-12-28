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

const Slot = ({ activeClass, className, disabled, children }) => (
  <div className={`${className}${!disabled ? ` ${activeClass}` : ""}`}>{!disabled ? children : null}</div>
);

const WeekBody = () => {
  const { week } = useWeek();
  const { getEvents } = useEvents();
  return (
    <Row className="week">
      {Array.from(Array(7)).map((_blank, index) => {
        const { afternoon, evening, night } = getEvents(addDays(week, index));
        return (
          <Col key={index} style={{ padding: 0 }}>
            <Slot className="day" activeClass="bg-primary" disabled={!afternoon?.events?.length}>
              Daytime Events
            </Slot>
            <Slot className="night" activeClass="bg-info" disabled={!evening?.events?.length && !night?.events?.length}>
              Evening Events
            </Slot>
          </Col>
        );
      })}
    </Row>
  );
};

const WeekDay = () => {
  return (
    <Row className="day-info">
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
