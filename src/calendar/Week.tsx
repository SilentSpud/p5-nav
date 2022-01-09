import React, { useMemo, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { addDays, getDate, getMonth, isSameDay } from "date-fns";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { WeekNavbar, WeekController, useWeek, WeekDay } from ".";
import { dateToString, Events, FreeTime, useEvents } from "../events";

const theWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Slot: FC<{ className: string; disabled?: boolean }> = ({ className, disabled, children }) => (
  <div className={`day ${className} ${disabled ? "invisible" : ""}`}>{!disabled ? children : null}</div>
);
const TimeSlot: FC<{ slot?: FreeTime; night?: boolean }> = ({ slot, night }) => {
  let className: string = "",
    text: string = "";
  switch (slot) {
    case FreeTime.None: {
      className = "border-light text-muted";
      text = (night ? "Night" : "Evening") + ": No Time";
      break;
    }
    case FreeTime.Leblanc: {
      className = "border-secondary";
      text = (night ? "Night" : "Evening") + ": Leblanc Only";
      break;
    }
    case FreeTime.Full: {
      className = "border-primary";
      text = (night ? "Night" : "Evening") + ": Free Time";
      break;
    }
  }
  return <div className={`day border ${className}`}>{text}</div>;
};

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
    query: { month },
  } = useRouter();
  return useMemo(() => {
    const newDate = addDays(week, index);
    const isSelected = selected ? isSameDay(newDate, selected) : false;
    const { afternoon, evening, night } = getEvents(newDate);

    return !afternoon && !evening && !night ? (
      <BadDay index={index} date={newDate} />
    ) : (
      <Col className={`week-day ${isSelected ? "selected" : ""}`}>
        <Link href={`/calendar/${getMonth(newDate) + 1}/${getDate(newDate)}`} replace={!!month} passHref shallow>
          <a onClick={() => setSelected(newDate)} className="week-link">
            <Stack gap={0}>
              <div className="weekday-title">
                <span className="left">{theWeek[index]}</span>
                <span className="right">{dateToString(newDate, false)}</span>
              </div>
              <Slot className="noon" disabled={!afternoon?.events?.length && !evening?.events?.length && !night?.events?.length}>
                Special Events
              </Slot>
              <Slot className="night" disabled>
                Weekly Events
              </Slot>
              <TimeSlot slot={evening?.time} />
              <TimeSlot slot={night?.time} night />
            </Stack>
          </a>
        </Link>
      </Col>
    );
  }, [getEvents, index, month, selected, setSelected, week]);
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
