import React, { useMemo } from "react";
import { addDays, getMonth, getDate } from "date-fns";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek, WeekDay } from ".";
import { Events, useEvents } from "../events";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Slot = ({ activeClass, className, disabled, children }) => (
  <div className={`${className}${!disabled ? ` ${activeClass}` : ""}`}>{!disabled ? children : null}</div>
);

const WeekBody = () => {
  const { week, setSelected } = useWeek();
  const { getEvents } = useEvents();
  return useMemo(() => (
    <Row className="week">
      {Array.from(Array(7)).map((_blank, index) => {
        const newDate = addDays(week, index);
        const { afternoon, evening, night } = getEvents(newDate);
        return (
          <Col key={index} onClick={() => setSelected(newDate)} className="week-day">
            <Stack gap={0}>
              <div className="weekday-title">
                <span className="left">{theWeek[index]}</span>
                <span className="right">
                  {getMonth(newDate) + 1}/{getDate(newDate)}
                </span>
              </div>
              <Slot className="day noon" activeClass="bg-primary" disabled={!afternoon?.events?.length}>
                Daytime Events
              </Slot>
              <Slot className="day night" activeClass="bg-info" disabled={!evening?.events?.length && !night?.events?.length}>
                Evening Events
              </Slot>
            </Stack>
          </Col>
        );
      })}
    </Row>
  ), [getEvents, setSelected, week]);
};

export const Week = ({ week, setWeek }) => useMemo(() => (
  <Events>
    <WeekController week={week} setWeek={setWeek}>
      <WeekNavbar />
      <Container fluid className="weekly">
        <WeekBody />
        <WeekDay />
      </Container>
    </WeekController>
  </Events>
), [setWeek, week]);
