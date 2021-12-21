import { addDays, isSameDay } from "date-fns";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WeekNavbar, WeekController } from ".";

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Day = ({ day }) => {
  return (
    <Col>
      <p>{day.label}</p>
    </Col>
  );
};

type WeekProps = {
  week: Date;
  setWeek: (date: Date) => void;
  events: any[];
};

export const Week = ({ week, setWeek, events }: WeekProps) => (
  <WeekController week={week} setWeek={setWeek} events={events}>
    <WeekNavbar />
    <Container fluid className="weekly-calendar">
      <Row className="header">
        {daysOfTheWeek.map((day, i) => (
          <Col key={i}>{day}</Col>
        ))}
      </Row>
      <Row>
        {Array.from(Array(7)).map((_blank, index) => {
          const date = addDays(week, index);
          return <Col key={index}>{events.map((item, index) => (isSameDay(date, item.date) ? <Day key={index} day={item.date} /> : null))}</Col>;
        })}
      </Row>
    </Container>
  </WeekController>
);
