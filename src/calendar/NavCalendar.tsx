/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { format, isSameDay } from 'date-fns';
import { handleOmittedDays, useMonthlyCalendar } from '@zach.codes/react-calendar';
import { Col, Container, Row } from "react-bootstrap";
import "./calendar.scss";


const DayEvents = React.createContext({ day: new Date(), events: [] });
export const useEvents = () => useContext(DayEvents);

export const Week = ({ days, children, events }) => (
  <Row className="week">{days.map((day, dayIndex) => {
    if (typeof day != "object") {
      return (<Col key={dayIndex}></Col>);
    }
    return (
      <Col key={dayIndex}>
        <DayEvents.Provider key={day.toISOString()} value={{ day, events: events.filter(data => isSameDay(data.date, day)), }}>
          {children}
        </DayEvents.Provider>
      </Col>
    );
  })}</Row>
);

export const Month = ({ events, children }) => {
  const { days, locale } = useMonthlyCalendar();
  const { headings, daysToRender, padding } = handleOmittedDays({ days, locale });
  const weeks = [];
  const allDays = padding.concat(daysToRender)
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }
  return (
    <Container fluid className="calendar">
      <Row className="header">
        {headings.map(day => (<Col key={day.day}>{day.label}</Col>))}
      </Row>
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex} days={week} events={events}>{children}</Week>
      ))}
    </Container>
  );
}


export const Day = ({ renderDay }) => {
  const { locale } = useMonthlyCalendar();
  const { day, events } = useEvents();
  const dayNumber = format(day, 'd', { locale });

  return (
    <div>
      <div>
        <div>{dayNumber}</div>
        <div>
          {format(day, 'EEEE', { locale })}
        </div>
      </div>
      <ul>
        {renderDay(events)}
      </ul>
    </div>
  );
}

export const Event = ({ title, date }: { title: string, date: Date }) => (
  <li>
    <div>
      <h3>{title}</h3>
      <p>{format(date, 'k:mm')}</p>
    </div>
  </li>
);
