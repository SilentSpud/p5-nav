import React, { useMemo } from "react";
import { Row, Col, Stack, Alert, Card, ListGroup } from "react-bootstrap";
import { dateToString, Question, useEvents } from "../events";
import { renderEvents, useWeek } from ".";

const Empty = () => useMemo(() => <div className="slot-empty">Nothing</div>, []);

const Afternoon = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { afternoon } = getEvents(selected as Date);
  return useMemo(
    () => (
      <Stack>
        <div className="slot-title">Afternoon</div>
        {!afternoon || !afternoon.events ? <Empty /> : renderEvents(afternoon.events)}
      </Stack>
    ),
    [afternoon]
  );
};
const Evening = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { evening } = getEvents(selected as Date);
  return useMemo(
    () => (
      <Stack>
        <div className="slot-title">Evening</div>
        {!evening || !evening.events ? <Empty /> : renderEvents(evening.events)}
      </Stack>
    ),
    [evening]
  );
};
const Night = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  const { night } = getEvents(selected as Date);
  return useMemo(() => {
    return (
      <Stack>
        <div className="slot-title">Night</div>
        {!night || !night.events ? <Empty /> : ""}
      </Stack>
    );
  }, [night]);
};

export const WeekDay = () => {
  const { selected } = useWeek();
  const { getEvents } = useEvents();
  return useMemo(() => {
    if (!selected) return null;
    const { afternoon, evening, night } = getEvents(selected);
    if (!afternoon && !evening && !night) return null;

    return (
      <>
        <Row className="day-title">
          <Col className="title">{dateToString(selected)}</Col>
        </Row>
        <Row className="day-info">
          <Col className="slot">
            <Afternoon />
          </Col>
          <Col className="slot">
            <Evening />
          </Col>
          <Col className="slot">
            <Night />
          </Col>
        </Row>
      </>
    );
  }, [selected, getEvents]);
};
