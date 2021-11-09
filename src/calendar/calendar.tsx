import React, { useState } from "react";
import { startOfMonth, parseISO } from 'date-fns';
import { MonthlyCalendar } from '@zach.codes/react-calendar';
import { Day, Event, Month } from "./NavCalendar";
import Navbar from "./Navbar";
import "./calendar.scss";

const StartDate = parseISO("2016-04-09");

const demoEvents = [
  { title: 'Call John', date: StartDate },
  { title: 'Call John', date: StartDate },
  { title: 'Meeting with Bob', date: StartDate },
];


export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(StartDate));

  return (
    <MonthlyCalendar currentMonth={currentMonth} onCurrentMonthChange={date => setCurrentMonth(date)}>
      <Navbar />
      <Month events={demoEvents}>
        <Day renderDay={data => data.map((item: { title: string, date: Date }, index) => (
          <Event key={index} title={item.title} date={item.date} />
        ))} />
      </Month>
    </MonthlyCalendar>
  );
};
