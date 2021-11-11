import React, { ReactNode, useContext } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { EventItem, padDates, useCalendar } from "./CalendarController";
import "./calendar.scss";

const DayEvents = React.createContext({} as { day: Date; events: EventItem[] });
export const useEvents = () => useContext(DayEvents);

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const isSameDay = (a: Date, b: Date) =>
  // only check the month and day since the years don't overlap
  a.getMonth() === b.getMonth() ? (a.getDate() === b.getDate() ? true : false) : false;

export const Week = ({ days, children }: { days: (Date | 0)[]; children: ReactNode | ReactNode[] }) => {
  const { events } = useCalendar();
  return (
    <Row className="week">
      {days.map((day: Date | 0, dayIndex: number) => {
        if (day === 0) {
          return <Col key={dayIndex}></Col>;
        }
        return (
          <Col key={dayIndex}>
            <DayEvents.Provider key={day.toISOString()} value={{ day, events: events.filter((data) => isSameDay(data.date, day)) }}>
              {children}
            </DayEvents.Provider>
          </Col>
        );
      })}
    </Row>
  );
};

export const Month = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const { days } = useCalendar();
  const daysToRender = padDates(days);
  const weeks = [];
  for (let i = 0; i < daysToRender.length; i += 7) {
    weeks.push(daysToRender.slice(i, i + 7));
  }
  return (
    <Container fluid className="calendar">
      <Row className="header">
        {daysOfTheWeek.map((day, i) => (
          <Col key={i}>{day}</Col>
        ))}
      </Row>
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex} days={week}>
          {children}
        </Week>
      ))}
    </Container>
  );
};

export const Day = () => {
  const { day, events } = useEvents();
  const dayNumber = day.getDate();

  return (
    <div>
      <div className="num">{dayNumber}</div>
      <Stack direction="vertical" gap={3}>
        {events.map((item, index) => (
          <Event key={index} title={item.title} date={item.date} theme={item.theme} />
        ))}
      </Stack>
    </div>
  );
};

export const Event = ({ title, theme }: { title: string; date: Date; theme: string }) => <div className={`bg-${theme ? theme : "primary"}`}>{title}</div>;
