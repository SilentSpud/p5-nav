import React, { useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { dateToString, useEvents } from "../events";
import { useWeek } from ".";

export const WeekDay = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  return useMemo(() => {
    if (!selected) return null;
    const date = getEvents(selected);
    if (!date) return null;
    return (
      <>
        <Row className="day-title">
          <Col>{dateToString(date.date)}</Col>
        </Row>
        <Row className="day-info">
          <Col>Afternoon</Col>
          <Col>Evening</Col>
          <Col>Night</Col>
        </Row>
      </>
    );
  }, [selected, getEvents]);
};
