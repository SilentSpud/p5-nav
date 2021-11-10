import React, { useContext } from "react";
import { format, isSameDay } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import "./calendar.scss";
import { processPadding, useMonthlyCalendar } from "./CalendarController";

const DayEvents = React.createContext({ day: new Date(), events: [] });
export const useEvents = () => useContext(DayEvents);

interface EventItem {
  title: string;
  date: Date;
}
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const Week = ({ days, children, events }: { days: (Date | 0)[]; events: EventItem[]; children: any | any[] }) => (
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

export const Month = ({ events, children }: { events: EventItem[]; children: any | any[] }) => {
  const { days } = useMonthlyCalendar();
  const daysToRender = processPadding(days);
  const weeks = [];
  for (let i = 0; i < daysToRender.length; i += 7) {
    let thisWeek = daysToRender.slice(i, i + 7);
    // pad the week if needed
    if (thisWeek.length < 7) {
      thisWeek = thisWeek.concat([0, 0, 0, 0, 0, 0, 0]).slice(0, 7);
    }
    weeks.push(thisWeek);
  }
  return (
    <Container fluid className="calendar">
      <Row className="header">
        {daysOfTheWeek.map((day, i) => (
          <Col key={i}>{day}</Col>
        ))}
      </Row>
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex} days={week} events={events}>
          {children}
        </Week>
      ))}
    </Container>
  );
};

export const Day = ({ renderDay }: { renderDay: (events: EventItem[]) => JSX.Element[] }) => {
  const { locale } = useMonthlyCalendar();
  const { day, events } = useEvents();
  const dayNumber = format(day, "d", { locale });

  return (
    <div>
      <div>
        <div>{dayNumber}</div>
        <div>{format(day, "EEEE", { locale })}</div>
      </div>
      <ul>{renderDay(events)}</ul>
    </div>
  );
};

export const Event = ({ title, date }: { title: string; date: Date }) => (
  <li>
    <div>
      <h3>{title}</h3>
      <p>{format(date, "k:mm")}</p>
    </div>
  </li>
);
