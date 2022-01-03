import React, { useMemo } from "react";
import { addDays, isSameDay } from "date-fns";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek, WeekDay } from ".";
import { dateToString, Events, useEvents } from "../events";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Slot = ({ className, disabled, children }) => <div className={`${className}${disabled ? " invisible" : ""}`}>{!disabled ? children : null}</div>;

const WeekDayBrief = ({ index }: { index: number }) => {
  const { week, setSelected, selected } = useWeek();
  const { getEvents } = useEvents();
  return useMemo(() => {
    const newDate = addDays(week, index);
    const isSelected = selected ? isSameDay(newDate, selected) : false;
    const { afternoon, evening, night } = getEvents(newDate);
    const disabled = !afternoon && !evening && !night;
    return disabled ? (
      <Col className="week-day empty">
        <Stack gap={0}>
          <div className="weekday-title">
            <span className="left">{theWeek[index]}</span>
            <span className="right">{dateToString(newDate, false)}</span>
          </div>
        </Stack>
      </Col>
    ) : (
      <Col onClick={() => setSelected(newDate)} className={`week-day${isSelected ? " selected" : ""}`}>
        <Stack gap={0}>
          <div className="weekday-title">
            <span className="left">{theWeek[index]}</span>
            <span className="right">{dateToString(newDate, false)}</span>
          </div>
          <Slot className="day noon" disabled={!afternoon?.events?.length}>
            Daytime Events
          </Slot>
          <Slot className="day night" disabled={!evening?.events?.length && !night?.events?.length}>
            Evening Events
          </Slot>
        </Stack>
      </Col>
    );
  }, [getEvents, index, selected, setSelected, week]);
};

export const Week = ({ week, setWeek }) =>
  useMemo(
    () => (
      <Events>
        <WeekController week={week} setWeek={setWeek}>
          <WeekNavbar />
          <Container fluid className="weekly">
            <Row className="week">
              {Array.from(Array(7)).map((_blank, index) => (
                <WeekDayBrief key={index} index={index} />
              ))}
            </Row>
            <WeekDay />
          </Container>
        </WeekController>
      </Events>
    ),
    [setWeek, week]
  );
