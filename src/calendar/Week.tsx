import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { addDays, getDate, getMonth, isSameDay } from "date-fns";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek, WeekDay } from ".";
import { dateToString, Events, useEvents } from "../events";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Slot = ({ className, disabled, children }) => <div className={`${className}${disabled ? " invisible" : ""}`}>{!disabled ? children : null}</div>;

const WeekDayBrief = ({ index }: { index: number }) => {
  const { week, selected, setSelected } = useWeek();
  const { getEvents } = useEvents();
  const {
    query: { month, day },
  } = useRouter();
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
      <Col className={`week-day${isSelected ? " selected" : ""}`}>
        <Link href={`/calendar/${getMonth(newDate) + 1}/${getDate(newDate)}`} replace={!!month && !!day} passHref shallow>
          <a onClick={() => setSelected(newDate)}>
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
          </a>
        </Link>
      </Col>
    );
  }, [getEvents, index, day, month, selected, setSelected, week]);
};

export const Week = ({ week, setWeek, selected }: { week: Date; setWeek: (date: Date) => void; selected?: Date }) =>
  useMemo(
    () => (
      <Events>
        <WeekController week={week} setWeek={setWeek} selected={selected}>
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
    [setWeek, week, selected]
  );
