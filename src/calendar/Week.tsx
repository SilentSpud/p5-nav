import React, { useMemo, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { addDays, getDate, getMonth, isSameDay } from "date-fns";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek, WeekDay } from ".";
import { dateToString, Events, useEvents } from "../events";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Slot: FC<{ className: string; disabled?: boolean }> = ({ className, disabled, children }) => (
  <div className={`${className}${disabled ? " invisible" : ""}`}>{!disabled ? children : null}</div>
);

const BadDay: FC<{ index: number; date: Date }> = ({ index, date }) => (
  <Col className="week-day empty">
    <Stack gap={0}>
      <div className="weekday-title">
        <span className="left">{theWeek[index]}</span>
        <span className="right">{dateToString(date, false)}</span>
      </div>
    </Stack>
  </Col>
);

const WeekDayBrief: FC<{ index: number }> = ({ index }) => {
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
      <BadDay index={index} date={newDate} />
    ) : (
      <Col className={`week-day${isSelected ? " selected" : ""}`}>
        <Link href={`/calendar/${getMonth(newDate) + 1}/${getDate(newDate)}`} replace={!!month && !!day} passHref shallow>
          <a onClick={() => setSelected(newDate)} className="week-link">
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

export const Week: FC<{ week: Date; setWeek: (date: Date) => void; selected?: Date }> = ({ week, setWeek, selected }) =>
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
